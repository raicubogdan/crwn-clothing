import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCw3VeS5f610gB6xgKn3VClh7-3O3UXSsk",
  authDomain: "crwn-db-83f40.firebaseapp.com",
  projectId: "crwn-db-83f40",
  storageBucket: "crwn-db-83f40.appspot.com",
  messagingSenderId: "471206933644",
  appId: "1:471206933644:web:73ec0a8acd1938d68537a9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
