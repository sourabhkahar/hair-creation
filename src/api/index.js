// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApQdcrzeVHkQ1FcAKmgSFxXBSbRDzIWF8",
  authDomain: "hair-creation-8ffc3.firebaseapp.com",
  projectId: "hair-creation-8ffc3",
  storageBucket: "hair-creation-8ffc3.firebasestorage.app",
  messagingSenderId: "437241658492",
  appId: "1:437241658492:web:ca53c0dc3f1ce8cd449df9",
  measurementId: "G-1F2FLKRQMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export  { db, collection, getDocs, app};