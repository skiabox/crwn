import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA52WbHE35GQt7yfIReueZ8gevsuja7PQM",
  authDomain: "crwn-db-ff712.firebaseapp.com",
  databaseURL: "https://crwn-db-ff712.firebaseio.com",
  projectId: "crwn-db-ff712",
  storageBucket: "crwn-db-ff712.appspot.com",
  messagingSenderId: "186966015475",
  appId: "1:186966015475:web:b953d206ee04f36fc9a686",
  measurementId: "G-60WJXZSMV4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
