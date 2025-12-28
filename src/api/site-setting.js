import { db } from './index.js';
import {   getDoc, doc,  setDoc, serverTimestamp,where } from "firebase/firestore";
const table = 'site-setting'
// Query the first page of docs
let documentSnapshots = [];
async function loadRecords() {
    const q = doc(db, table,'setting');
    const docs = await getDoc(q);
    documentSnapshots = docs.data()
}

async function updateArtists(data) {
    try {
        const payload = {
            updated_at: serverTimestamp(),
            ...data
        }
        await setDoc(doc(db, table,'setting'), payload, { merge: true });
        return true
    } catch (error) {
        return false
    }
}

export { documentSnapshots, updateArtists, loadRecords };

