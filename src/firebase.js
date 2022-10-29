// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//************************************************************************************************
// pushObjects firebase project configuration
//************************************************************************************************
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgFXFreKWJRbDA2Ejfyj3EWr34q8QZU3A",
  authDomain: "pushobjects.firebaseapp.com",
  databaseURL: "https://pushobjects-default-rtdb.firebaseio.com",
  projectId: "pushobjects",
  storageBucket: "pushobjects.appspot.com",
  messagingSenderId: "418374552753",
  appId: "1:418374552753:web:99480fff48d07aa8532690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;