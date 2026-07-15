const firebaseConfig = window.FIREBASE_CONFIG;

if (!firebaseConfig) {
  throw new Error(
    "Firebase config is missing. Run the build so js/firebase-config.js is generated, or define window.FIREBASE_CONFIG before loading js/firebase.js."
  );
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
