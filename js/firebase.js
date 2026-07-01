import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiLuKo7dpmffZzzvT_A_mvhVlThpSpOjM",
  authDomain: "golf-flow-1-d0722.firebaseapp.com",
  projectId: "golf-flow-1-d0722",
  storageBucket: "golf-flow-1-d0722.firebasestorage.app",
  messagingSenderId: "1066856791901",
  appId: "1:1066856791901:web:20a3a57d33f8e0df2332b4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
