const firebaseConfig = {
  apiKey: "AIzaSyDzvpyk0820xCUiNHmDYWI8QUG2ZhU5aXY",
  authDomain: "community-business-network.firebaseapp.com",
  projectId: "community-business-network",
  storageBucket: "community-business-network.firebasestorage.app",
  messagingSenderId: "631499831089",
  appId: "1:631499831089:web:ac5ce03fa92389f679a210",
  measurementId: "G-01EBE300WR"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();