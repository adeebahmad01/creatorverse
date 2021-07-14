import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUHiRQ1Iemg2uF2K8fIcBpepFlixNnYzQ",
  authDomain: "creatorverse1.firebaseapp.com",
  projectId: "creatorverse1",
  storageBucket: "creatorverse1.appspot.com",
  messagingSenderId: "660904678076",
  appId: "1:660904678076:web:bc7f8c0f14de147f9cf6b9",
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
