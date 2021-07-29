import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDauxtaZ6RuFfxwL5Jp0jC_a72IH7rkuA4",
  authDomain: "creatorverse-246b9.firebaseapp.com",
  projectId: "creatorverse-246b9",
  storageBucket: "creatorverse-246b9.appspot.com",
  messagingSenderId: "721200622977",
  appId: "1:721200622977:web:a72a1ca0ae1b7975ab4c80",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// DATABASE
var db = firebase.firestore();

const auth = firebase.auth();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

export { db, storage, auth };
export default firebase;
