import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB3MRP718YUy5CDTg3GTdAl4G2guAjzVvM",
  authDomain: "hshackscarterthomas.firebaseapp.com",
  projectId: "hshackscarterthomas",
  storageBucket: "hshackscarterthomas.appspot.com",
  messagingSenderId: "142589757583",
  appId: "1:142589757583:web:1373f5fd21b2bdbbee88fa",
  measurementId: "G-WDL7MT3WXW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
