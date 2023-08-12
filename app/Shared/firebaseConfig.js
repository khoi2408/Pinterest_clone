// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQu6ApKPYbLYuKdIRBQrVNysBprffNyC4",
  authDomain: "wing-app-8d1f7.firebaseapp.com",
  projectId: "wing-app-8d1f7",
  storageBucket: "wing-app-8d1f7.appspot.com",
  messagingSenderId: "599036499620",
  appId: "1:599036499620:web:cecbcaa0bb4b8c53813831",
  measurementId: "G-7JTGZY4167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;