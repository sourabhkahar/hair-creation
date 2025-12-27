// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs } from 'firebase/firestore/lite';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,
  authDomain: import.meta.env.VITE_FIRE_BASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIRE_BASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIRE_BASE_MESSANGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRE_BASE_APP_ID,
  measurementId: import.meta.env.VITE_FIRE_BASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export  { db, collection, getDocs, app};