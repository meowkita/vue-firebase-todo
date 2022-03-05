import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzSdZQ9ChhHzrCOT1RmgN051RUS4CKTRE",
  authDomain: "vue-firebase-todo-meowkita.firebaseapp.com",
  projectId: "vue-firebase-todo-meowkita",
  storageBucket: "vue-firebase-todo-meowkita.appspot.com",
  messagingSenderId: "193652589093",
  appId: "1:193652589093:web:b3a54bd63c1922c6ddb5cc",
  measurementId: "G-DXHECCK84D",
};

const app = initializeApp(firebaseConfig);

export { app, auth, firestore };
