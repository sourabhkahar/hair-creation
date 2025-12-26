import { app } from './index.js';
import { getAuth,  onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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

export { isLoggedIn,logIn,logOut };

