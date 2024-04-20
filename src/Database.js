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

export async function addPosting(posting) {
  await setDoc(doc(db, "postings", posting.title), { ...posting });
}

export async function getPostings() {
  const snapshot = await getDocs(collection(db, "postings"));

  const postings = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    const posting = {
      id: doc.id,
      ...data,
    };
    postings.push(posting);
  });

  return postings;
}
