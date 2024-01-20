import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBtPTeWvhkS_PzCp9jp7xxXBmLhgrgFj0Q",
  authDomain: "practice-5278e.firebaseapp.com",
  projectId: "practice-5278e",
  storageBucket: "practice-5278e.appspot.com",
  messagingSenderId: "822872573179",
  appId: "1:822872573179:web:eab014b558c8232fd49c5e",
  measurementId: "G-SQPMJPXBMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)