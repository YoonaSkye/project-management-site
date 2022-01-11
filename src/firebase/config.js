import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3LUG88tUc6LCRc7nl_t7G4ZXQUgZvvOg",
  authDomain: "mydojo-33fc1.firebaseapp.com",
  projectId: "mydojo-33fc1",
  storageBucket: "mydojo-33fc1.appspot.com",
  messagingSenderId: "157786891803",
  appId: "1:157786891803:web:0b6e40e0b0746f16673abe",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
