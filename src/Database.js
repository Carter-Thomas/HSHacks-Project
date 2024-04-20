import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const app = initializeApp({
  appId: "1:142589757583:web:1373f5fd21b2bdbbee88fa",
  apiKey: "AIzaSyB3MRP718YUy5CDTg3GTdAl4G2guAjzVvM",
  authDomain: "hshackscarterthomas.firebaseapp.com",
  projectId: "hshackscarterthomas",
  storageBucket: "hshackscarterthomas.appspot.com",
  messagingSenderId: "142589757583",
  measurementId: "G-WDL7MT3WXW",
});
const db = getFirestore(app);

class Tutor {
    constructor(name) {
        this.name = name;
    }
}

export async function getTutors() {
    return await getDocs(collection(db, 'tutors')).docs.map((doc) => {
        console.log(doc.id, " => ", doc.data());
    })
}

