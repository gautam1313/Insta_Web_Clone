import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  limit,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
// const db = getFirestore();
// console.log(firebase);
// console.log(db);
// seedDatabase(db);
const firebaseHelpers = {
  firebase,
  auth,
  signInWithEmailAndPassword,
  collection,
  query,
  where,
  getDocs,
  db,
  createUserWithEmailAndPassword,
  updateProfile,
  addDoc,
  onAuthStateChanged,
  signOut,
  limit,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
};
export { firebaseHelpers };
