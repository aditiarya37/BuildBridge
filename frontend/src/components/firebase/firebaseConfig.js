// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjV3Kxi8D0hWMDGf7Uulq_5yo1wXwDmWc",
  authDomain: "buildbridge-89fba.firebaseapp.com",
  projectId: "buildbridge-89fba",
  storageBucket: "buildbridge-89fba.firebasestorage.app",
  messagingSenderId: "830225389961",
  appId: "1:830225389961:web:d35e9109c7049ddb586958",
  measurementId: "G-H13NBZW8H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
