import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa0BDmtSC704UZzReadoQrjLh_sAtiKRE",
  authDomain: "tu-bienestar-3965a.firebaseapp.com",
  projectId: "tu-bienestar-3965a",
  storageBucket: "tu-bienestar-3965a.appspot.com",
  messagingSenderId: "132368585134",
  appId: "1:132368585134:web:72adf8d0cf72d82214783f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);