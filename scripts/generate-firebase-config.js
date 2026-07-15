const fs = require("fs");
const path = require("path");

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const content = fs.readFileSync(filePath, "utf8");
  const env = {};

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, "");
    env[key] = value;
  }

  return env;
}

const rootDir = path.resolve(__dirname, "..");
const envFromFile = loadEnv(path.join(rootDir, ".env"));

const config = {
  apiKey: process.env.FIREBASE_API_KEY || envFromFile.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || envFromFile.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID || envFromFile.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || envFromFile.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.FIREBASE_MESSAGING_SENDER_ID || envFromFile.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID || envFromFile.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || envFromFile.FIREBASE_MEASUREMENT_ID
};

const missing = Object.entries(config)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missing.length) {
  throw new Error(`Missing Firebase env values: ${missing.join(", ")}`);
}

const output = `window.FIREBASE_CONFIG = ${JSON.stringify(config, null, 2)};\n`;
const target = path.join(rootDir, "js", "firebase-config.js");
fs.writeFileSync(target, output, "utf8");
console.log(`Wrote ${path.relative(rootDir, target)}`);
