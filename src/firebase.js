//************************************************************************************************
// pushObjects firebase project configuration
//************************************************************************************************
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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

/*********************************************************************
 * Learning to work with a secondary database on firebase
 *  1. pushObjects
 *  2. randomImg
 *********************************************************************/
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const app1 = initializeApp({
//   apiKey: "AIzaSyCgFXFreKWJRbDA2Ejfyj3EWr34q8QZU3A",
//   authDomain: "pushobjects.firebaseapp.com",
//   databaseURL: "https://pushobjects-default-rtdb.firebaseio.com",
//   projectId: "pushobjects",
//   storageBucket: "pushobjects.appspot.com",
//   messagingSenderId: "418374552753",
//   appId: "1:418374552753:web:99480fff48d07aa8532690"
// });

// const app2 = initializeApp({
//   apiKey: "AIzaSyC7BDIgQlAukZdz-15s9r64Wb936uKt_Rk",
//   authDomain: "randomimg.firebaseapp.com",
//   databaseURL: "https://randomimg-default-rtdb.firebaseio.com",
//   projectId: "randomimg",
//   storageBucket: "randomimg.appspot.com",
//   messagingSenderId: "485346974736",
//   appId: "1:485346974736:web:807c24d240b0030869be95"
// }, 'app2');

// // Get the default database instance for an app1
// const database1 = getDatabase(app1);

// // Get a database instance for app2
// const database2 = getDatabase(app2);
