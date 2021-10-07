import "./wdyr";
import React from "react";
import "./styles/index.css";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebaseHelpers } from "./lib/firebase"; //FieldValue

ReactDOM.render(
  <FirebaseContext.Provider
    value={{
      firebase: firebaseHelpers.firebase,
      auth: firebaseHelpers.auth,
      signInWithEmailAndPassword: firebaseHelpers.signInWithEmailAndPassword,
      collection: firebaseHelpers.collection,
      query: firebaseHelpers.query,
      where: firebaseHelpers.where,
      getDocs: firebaseHelpers.getDocs,
      db: firebaseHelpers.db,
      createUserWithEmailAndPassword:
        firebaseHelpers.createUserWithEmailAndPassword,
      updateProfile: firebaseHelpers.updateProfile,
      addDoc: firebaseHelpers.addDoc,
      onAuthStateChanged: firebaseHelpers.onAuthStateChanged,
      signOut: firebaseHelpers.signOut,
      limit: firebaseHelpers.limit,
    }}
  >
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
