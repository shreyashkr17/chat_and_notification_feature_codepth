import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import {getMessaging } from "firebase/messaging"
import {getMessaging} from "firebase/messaging";
// import "dotenv/config";

const firebaseConfig = {
  apiKey: "AIzaSyAhL9NgHUKgAViDQXXOA475oyWoXNpS81M",
  authDomain: "chat-7278a.firebaseapp.com",
  projectId: "chat-7278a",
  storageBucket: "chat-7278a.appspot.com",
  messagingSenderId: "1878232299",
  appId: "1:1878232299:web:c52528d0d9136afc3482ae",
  measurementId: "G-G7YD5P2ZF0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const messaging = getMessaging(app);
