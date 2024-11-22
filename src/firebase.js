// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* within VITE, this is how we use .env */
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-7e235.firebaseapp.com",
  projectId: "mern-realestate-7e235",
  storageBucket: "mern-realestate-7e235.appspot.com",
  messagingSenderId: "499394868610",
  appId: "1:499394868610:web:63da979eb5cf720c5d0b9b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
