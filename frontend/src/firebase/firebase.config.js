// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQbg_5lBae2H8Tf11WUonuiVYyEQ7xmoA",
  authDomain: "abiding-circle-448421-c6.firebaseapp.com",
  projectId: "abiding-circle-448421-c6",
  storageBucket: "abiding-circle-448421-c6.firebasestorage.app",
  messagingSenderId: "141090333016",
  appId: "1:141090333016:web:dd943d67b2dca64945c52d",
  measurementId: "G-VVCXCHP2CP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
