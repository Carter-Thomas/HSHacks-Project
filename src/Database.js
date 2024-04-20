import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { Tutor } from "./Tutor";
import { Session } from "./Session";

const app = initializeApp({
  appId: "1:142589757583:web:1373f5fd21b2bdbbee88fa",
  apiKey: "AIzaSyB3MRP718YUy5CDTg3GTdAl4G2guAjzVvM",
  authDomain: "hshackscarterthomas.firebaseapp.com",
  projectId: "hshackscarterthomas",
  storageBucket: "hshackscarterthomas.appspot.com",
  messagingSenderId: "142589757583",
  measurementId: "G-WDL7MT3WXW",
});
export const auth = getAuth();
const db = getFirestore(app);

export function signUp(email, password) {
  if (!email.toLowerCase().endsWith("d214.org")) return;
  createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  signOut(auth);
}

export async function getTutors() {
  const snapshot = await getDocs(collection(db, "tutors"));

  const tutors = [];
  return snapshot.forEach((doc) => {
    const data = doc.data();
    var tutor = new Tutor(doc.id, data.email, data.school, data.subjects);
    data.sessions.forEach((opening) => {
      const session = new Session(opening.start.toDate(), opening.end.toDate());
      session.available = opening.available;
      tutor.sessions.push(session);
    });
    tutors.push(tutor);
    console.log(tutor); // WARN: for testing
  });
}

export async function updateTutor(tutor) {
  await setDoc(doc(db, "tutors", tutor.name), tutor.toObject());
}
