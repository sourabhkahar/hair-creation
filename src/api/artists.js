import { db } from './index.js';
import { collection, query, orderBy, startAfter, limit, getDocs, doc, getDoc, setDoc, serverTimestamp, addDoc, getCountFromServer, startAt, endAt, where, collectionGroup } from "firebase/firestore";
const table = 'artists'
const perPage = 10
let cursorStack = [];
let currentSearchText = "";
// Query the first page of docs
let documentSnapshots = [];
let lastVisible = null;
async function loadRecords(searchText = '') {
    currentSearchText = searchText;
    const first = query(collection(db, table), where("deleted_at", "==", null), orderBy("name"), orderBy("created_at", "desc"), startAt(searchText), endAt(searchText + "\uf8ff"), limit(perPage));
    documentSnapshots = await getDocs(first);
    // Get the last visible document
    lastVisible = documentSnapshots.docs[ documentSnapshots.docs.length - 1 ];
    cursorStack = [];
    cursorStack.push(documentSnapshots.docs[ 0 ]);
}
async function getNextReords(lastRec) {
    const next = query(collection(db, table), where("deleted_at", "==", null), orderBy("name"), orderBy("created_at", "desc"), startAt(currentSearchText), endAt(currentSearchText + "\uf8ff"), startAfter(lastRec), limit(perPage));
    documentSnapshots = await getDocs(next);
    cursorStack.push(documentSnapshots.docs[ 0 ]);
    lastVisible = documentSnapshots.docs[ documentSnapshots.docs.length - 1 ];
}
async function getPreviousPage() {
    if (cursorStack.length === 0) return;

    cursorStack.pop();
    const previousFirstDoc = cursorStack[ cursorStack.length - 1 ];
    const q = query(
        collection(db, table),
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
async function totalArtists() {
    const q = query(
        collection(db, table),
        where("deleted_at", "==", null)
    );
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count
}
async function getASingleArtists($id) {
    const docRef = doc(db, table, $id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return {};
    }
}
async function updateArtists(id, data) {
    try {
        const payload = {
            updated_at: serverTimestamp(),
            ...data
        }
        await setDoc(doc(db, table, id), payload, { merge: true });
        return true
    } catch (error) {
        return false
    }
}
async function addArtists(data) {
    try {
        const payload = {
            updated_at: serverTimestamp(),
            created_at: serverTimestamp(),
            deleted_at: null,
            ...data
        }
        return await addDoc(collection(db, table), payload, { merge: true });
    } catch (error) {
        return false
    }
}
async function getAllArtistsWithServices() {
    const artistsSnap = await getDocs(
        query(collection(db, "artists"), where("deleted_at", "==", null))
    );

    const result = [];
    for (const artistDoc of artistsSnap.docs) {
        const artist = { id: artistDoc.id, ...artistDoc.data() };
        const services = await getArtistServices(artist.id);
        result.push({
            artist,
            services
        });
    }
    return result;
}


async function getArtistServices(artistId) {
  const q = query(
    collection(db, "artists", artistId, "services"),
    where("deleted_at", "==", null)
  );

  const snap = await getDocs(q);

  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }));
}

export { documentSnapshots, lastVisible, perPage, getASingleArtists, updateArtists, getNextReords, loadRecords, addArtists, totalArtists, getPreviousPage, cursorStack, serverTimestamp, getAllArtistsWithServices };

