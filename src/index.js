import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import {
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
} from "./lib/firebase"; //FieldValue

ReactDOM.render(
  <FirebaseContext.Provider
    value={{
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
    }}
  >
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
