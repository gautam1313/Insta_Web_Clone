import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyDi1oAnKURTJxBYdSRvLdeis6v9FOlVxo8",
  authDomain: "insta2-70270.firebaseapp.com",
  projectId: "insta2-70270",
  storageBucket: "insta2-70270.appspot.com",
  messagingSenderId: "1013058461212",
  appId: "1:1013058461212:web:584a82085577c1a55089d9",
};

const firebase = initializeApp(firebaseConfig);
const { FieldValue } = getFirestore();
// const db = getFirestore();
console.log(firebase);
// console.log(db);
// seedDatabase(db);

export { firebase, FieldValue }; //FieldValue
