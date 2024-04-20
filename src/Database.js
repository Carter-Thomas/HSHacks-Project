import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const app = initializeApp({
    projectId: "hshackscarterthomas",
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

