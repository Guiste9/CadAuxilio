import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4dYg4HEP8tP0lChd5eKgk6cSK4W8wc7U",
  authDomain: "cadauxilio-91a9d.firebaseapp.com",
  projectId: "cadauxilio-91a9d",
  storageBucket: "cadauxilio-91a9d.firebasestorage.app",
  messagingSenderId: "588175637381",
  appId: "1:588175637381:web:50dccb80c8d7743a02a2ec",
  measurementId: "G-J3B3P1LF1L"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)