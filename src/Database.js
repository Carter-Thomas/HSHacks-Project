import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const app = initializeApp({
  appId: "1:142589757583:web:1373f5fd21b2bdbbee88fa",
  apiKey: "AIzaSyB3MRP718YUy5CDTg3GTdAl4G2guAjzVvM",
  authDomain: "hshackscarterthomas.firebaseapp.com",
  projectId: "hshackscarterthomas",
  storageBucket: "hshackscarterthomas.appspot.com",
  messagingSenderId: "142589757583",
  measurementId: "G-WDL7MT3WXW",
});
const auth = getAuth();
const db = getFirestore(app);

const user = null;

export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
    signOut(auth)
}

class Time {
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute;
    }
}

class Period {
    constructor(name, start, end) {
        this.name = name;

        this.start = new Date();
        this.start.setHours(start.hour, start.minute, 0);

        this.end = new Date()
        this.end.setHours(end.hour, end.minute, 0);
    }
}

class Session {
    constructor(start, end, available) {
        this.start = start;
        this.end = end;
        this.available = available;
    }

    toPeriod() {
        const PERIODS = [
            new Period('Period 1', new Time(8, 30), new Time(9, 50)),
            new Period('Period 2', new Time(9, 55), new Time(11, 20)),
            new Period('Period 3', new Time(11, 25), new Time(13, 35)),
            new Period('Period 4', new Time(13, 40), new Time(15, 0)),
        ];

        const start = new Date(Date.now());
        start.setHours(this.start.getHours(), this.start.getMinutes(), 0);

        const end = new Date(Date.now());
        end.setHours(this.end.getHours(), this.end.getMinutes(), 0);

        for (const period of PERIODS) {
            if (start >= period.start && end <= period.end) {
                return period;
            }
        }
    }
}

class Tutor {
    constructor(name, email, school, subjects) {
        // contact info
        this.name = name;
        this.email = email;
        this.school = school;

        // availability
        this.subjects = subjects;
        this.availability = [];
    }
}

export async function getTutors() {
    const snapshot = await getDocs(collection(db, 'tutors'))

    const tutors = [];
    return snapshot.forEach((doc) => {
        const data = doc.data();
        var tutor = new Tutor(doc.id, data.email, data.school, data.subjects);
        data.availability.forEach((session) => {
            tutor.availability.push(new Session(session.start.toDate(), session.end.toDate(), session.available));
        });
        tutors.push(tutor);
        console.log(tutor); // for testing
    })
}
