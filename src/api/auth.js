import { app, db } from './index.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {  doc, getDoc } from "firebase/firestore";

const auth = getAuth(app);

function isLoggedIn(callback) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            callback(true);
        } else {
            callback(false);
        }
    });
}

async function logIn(email, password) {
    try {
        const auth = getAuth();
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return new Promise((resolve, reject) => {
            resolve(error);
        });
    }
}

async function logOut() {
    try {
        const auth = getAuth();
        return await auth.signOut();
    } catch (error) {
        return new Promise((resolve, reject) => {
            resolve(error);
        });
    }
}

async function getCurrentUser() {
    const userRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(userRef)
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return {};
    }
}

export { isLoggedIn, logIn, logOut, getCurrentUser };

