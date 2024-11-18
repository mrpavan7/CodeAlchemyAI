// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Paste your Firebase API KEY ",
  authDomain: "codealchemy-ai.firebaseapp.com",
  projectId: "codealchemy-ai",
  storageBucket: "codealchemy-ai.appspot.com",
  messagingSenderId: "645119684006",
  appId: "1:645119684006:web:9c15a70be43c0211927367",
  measurementId: "G-VVHJCKL8FD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
const firebaseApp = firebase.initializeApp(firebaseConfig);
export { app, auth, db, storage, firebaseApp, provider };
