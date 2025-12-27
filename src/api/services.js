import { db } from './index.js';
import { collection, query, orderBy, startAfter, limit, getDocs, doc, getDoc, setDoc, serverTimestamp, addDoc, getCountFromServer, startAt,endAt,where } from "firebase/firestore";
const table = 'services'
const table2 = 'artists'
const perPage = 3
let cursorStack = [];
let currentSearchText = "";
// Query the first page of docs
let documentSnapshots = [];
let lastVisible = null;
async function loadRecords(searchText='',artistsId) {
    currentSearchText = searchText;
    const first = query(collection(db, table2,artistsId,table), where("deleted_at", "==", null),orderBy("name"), orderBy("created_at", "desc"),startAt(searchText),endAt(searchText + "\uf8ff"), limit(perPage));
    documentSnapshots = await getDocs(first);
    // Get the last visible document
    lastVisible = documentSnapshots.docs[ documentSnapshots.docs.length - 1 ];
    cursorStack = [];
    cursorStack.push(documentSnapshots.docs[0]);
}
async function getNextReords(lastRec,artistsId) {
    const next = query(collection(db, table2,artistsId,table),where("deleted_at", "==", null), orderBy("name"),orderBy("created_at", "desc"),startAt(currentSearchText),endAt(currentSearchText + "\uf8ff"), startAfter(lastRec), limit(perPage));
    documentSnapshots = await getDocs(next);
    cursorStack.push(documentSnapshots.docs[0]);
    lastVisible = documentSnapshots.docs[ documentSnapshots.docs.length - 1 ];
}
async function getPreviousPage(artistsId) {
    if (cursorStack.length === 0) return;

    cursorStack.pop();
    const previousFirstDoc = cursorStack[cursorStack.length - 1];
    const q = query(
        collection(db, table2,artistsId,table),
        where("deleted_at", "==", null),
        orderBy("name"),
        orderBy("created_at", "desc"),
        startAt(currentSearchText),
        endAt(currentSearchText + "\uf8ff"),
        startAt(previousFirstDoc),
        limit(perPage)
    );

    documentSnapshots = await getDocs(q);
    lastVisible = documentSnapshots.docs.at(-1);
}
async function totalServices(artistsId) {
     const q = query(
        collection(db, table2,artistsId,table),
        where("deleted_at", "==", null)
    );
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count
}
async function getASingleServices(artist_id,id) {
    const docRef = doc(db, table2, artist_id, table, id);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return {};
    }
}
async function updateServices(id, data,artist_id) {
    try {
        const payload = {
            updated_at: serverTimestamp(),
            ...data
        }
        await setDoc(doc(db, table2, artist_id, table, id), payload, { merge: true });
        return true
    } catch (error) {
        return false
    }
}
async function addServices(data,id) {
    try {
        const payload = {
            updated_at: serverTimestamp(),
            created_at: serverTimestamp(),
            deleted_at: null,
            artist_id: id,
            ...data
        }
        return await addDoc(collection(db, table2, id, table), payload);
    } catch (error) {
        console.log(error)
        return false
    }
}

export { documentSnapshots, lastVisible, perPage, getASingleServices, updateServices, getNextReords, loadRecords, addServices, totalServices, getPreviousPage, cursorStack, serverTimestamp };

