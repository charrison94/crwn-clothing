import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAhkNtom1h4Z1YITc67-6vTLCkbpDlGMGQ",
  authDomain: "crwn-db-crh.firebaseapp.com",
  projectId: "crwn-db-crh",
  storageBucket: "crwn-db-crh.appspot.com",
  messagingSenderId: "46462515299",
  appId: "1:46462515299:web:c4957672dbe2c90cce6056",
  measurementId: "G-WDXSN6MHQP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
