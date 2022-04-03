import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/functions";

firebase.initializeApp({
  apiKey: "AIzaSyDIxPQsmJPjnZofjwGzHT7CigT7VMsx1Eg",
  authDomain: "simplebankapplication.firebaseapp.com",
  projectId: "simplebankapplication",
  storageBucket: "simplebankapplication.appspot.com",
  messagingSenderId: "1087256694213",
  appId: "1:1087256694213:web:78196b9a240158e03dcfac",
});
const auth = firebase.auth();
const db = firebase.firestore();
const database = firebase.database();
const storage = firebase.storage();
const functions = firebase.functions();

export { auth, db, database, storage, functions };
