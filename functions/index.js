const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

admin.initializeApp();

function getSmtpConfig() {
  const cfg = functions.config().smtp || {};
  if (!cfg.host || !cfg.user || !cfg.pass || !cfg.from) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "Gmail SMTP is not configured. Set firebase functions config smtp.host, smtp.port, smtp.secure, smtp.user, smtp.pass, and smtp.from."
    );
  }
  return cfg;
}

function createTransporter() {
  const cfg = getSmtpConfig();
  return nodemailer.createTransport({
    host: cfg.host,
    port: Number(cfg.port || 587),
    secure: String(cfg.secure || "false") === "true",
    auth: {
      user: cfg.user,
      pass: cfg.pass
    }
  });
}

function createOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

exports.sendEmailResetOtp = functions.https.onCall(async (data) => {
  const email = String(data.email || "").trim().toLowerCase();
  if (!email) {
    throw new functions.https.HttpsError("invalid-argument", "Email is required.");
  }

  const snapshot = await admin.firestore().collection("users").where("email", "==", email).limit(1).get();
  if (snapshot.empty) {
    throw new functions.https.HttpsError("not-found", "No account found for that email.");
  }

  const otp = createOtp();
  const sessionId = crypto.randomUUID();
  const expiresAt = Date.now() + 10 * 60 * 1000;

  await admin.firestore().collection("passwordResetOtps").doc(sessionId).set({
    email,
    otp,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    expiresAt: admin.firestore.Timestamp.fromMillis(expiresAt),
    used: false
  });

  const transporter = createTransporter();
  await transporter.sendMail({
    from: getSmtpConfig().from,
    to: email,
    subject: "Community Business Network - Password Reset OTP",
    text: `
Community Business Network

Your password reset OTP is:

${otp}

This OTP will expire in 10 minutes.

If you did not request a password reset, please ignore this email.
`
  });

  return { sessionId };
});

exports.verifyEmailResetOtp = functions.https.onCall(async (data) => {
  const email = String(data.email || "").trim().toLowerCase();
  const otp = String(data.otp || "").trim();
  const sessionId = String(data.sessionId || "").trim();

  if (!email || !otp || !sessionId) {
    throw new functions.https.HttpsError("invalid-argument", "Email, OTP, and session ID are required.");
  }

  const doc = await admin.firestore().collection("passwordResetOtps").doc(sessionId).get();
  if (!doc.exists) {
    throw new functions.https.HttpsError("not-found", "OTP session not found.");
  }

  const dataDoc = doc.data() || {};
  if (dataDoc.used) {
    throw new functions.https.HttpsError("failed-precondition", "OTP already used.");
  }
  if (dataDoc.expiresAt && dataDoc.expiresAt.toMillis && dataDoc.expiresAt.toMillis() < Date.now()) {
    throw new functions.https.HttpsError("deadline-exceeded", "OTP expired. Please request a new one.");
  }
  if (dataDoc.email !== email || dataDoc.otp !== otp) {
    throw new functions.https.HttpsError("permission-denied", "Invalid OTP.");
  }

  await doc.ref.set({ verified: true, verifiedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
  return { success: true };
});

exports.resetPasswordWithEmailOtp = functions.https.onCall(async (data) => {
  const email = String(data.email || "").trim().toLowerCase();
  const sessionId = String(data.sessionId || "").trim();
  const newPassword = String(data.newPassword || "");

  if (!email || !sessionId || !newPassword) {
    throw new functions.https.HttpsError("invalid-argument", "Email, session ID, and new password are required.");
  }
  if (newPassword.length < 8) {
    throw new functions.https.HttpsError("invalid-argument", "Password must be at least 6 characters.");
  }

  const sessionDoc = await admin.firestore().collection("passwordResetOtps").doc(sessionId).get();
  if (!sessionDoc.exists || !sessionDoc.data().verified) {
    throw new functions.https.HttpsError("permission-denied", "Email OTP verification required.");
  }
  if (sessionDoc.data().expiresAt && sessionDoc.data().expiresAt.toMillis && sessionDoc.data().expiresAt.toMillis() < Date.now()) {
    throw new functions.https.HttpsError("deadline-exceeded", "OTP expired. Please request a new one.");
  }

  if (sessionDoc.data().email !== email) {
    throw new functions.https.HttpsError("permission-denied", "Email does not match verified session.");
  }

  const userRecord = await admin.auth().getUserByEmail(email);
  await admin.auth().updateUser(userRecord.uid, { password: newPassword });

  await sessionDoc.ref.set({ used: true, usedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });

  return { success: true };
});
