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
    constructor(name, email, school) {
        // contact info
        this.name = name;
        this.email = email;
        this.school = school;

        // availability
        this.subjects = [];
        this.availableDates = [];
    }
}

export async function getTutors() {
    const snapshot = await getDocs(collection(db, 'tutors'))

    const tutors = [];
    return snapshot.forEach((doc) => {
        const data = doc.data();
        var tutor = new Tutor(doc.id, data.email, data.school);
        tutor.subjects = data.subjects;
        tutor.availableDates = data.availableDates;
        tutors.push(tutor);
        console.log(tutor); // for testing
    })
}
