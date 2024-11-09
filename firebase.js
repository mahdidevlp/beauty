// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtQyeQE7szeboEaj9PlFnWyukJ_rbEs98",
  authDomain: "projet-de-pointage.firebaseapp.com",
  projectId: "projet-de-pointage",
  storageBucket: "projet-de-pointage.firebasestorage.app",
  messagingSenderId: "315224845501",
  appId: "1:315224845501:web:27373a524b699885591bd4",
  measurementId: "G-73PTS0EN8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
