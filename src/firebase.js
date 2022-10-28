// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDauzFa_K7w_bEzVt3GTN2w2BsiO-6ItMU",
  authDomain: "ingenious-thoughts.firebaseapp.com",
  databaseURL: "https://ingenious-thoughts-default-rtdb.firebaseio.com",
  projectId: "ingenious-thoughts",
  storageBucket: "ingenious-thoughts.appspot.com",
  messagingSenderId: "686011475696",
  appId: "1:686011475696:web:1c8acf8389d661f7bcc435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// const apiKey = "AIzaSyDauzFa_K7w_bEzVt3GTN2w2BsiO-6ItMU";
// const authDomain = "ingenious-thoughts.firebaseapp.com";
// const databaseURL = "https://ingenious-thoughts-default-rtdb.firebaseio.com";
// const projectId = "ingenious-thoughts";
// const storageBucket = "ingenious-thoughts.appspot.com";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: apiKey,
//   authDomain: authDomain,
//   databaseURL: databaseURL,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: "686011475696",
//   appId: "1:686011475696:web:1c8acf8389d661f7bcc435",
// };

// const secondaryAppConfig = {
//   apiKey: apiKey,
//   authDomain: authDomain,
//   databaseURL: databaseURL,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: "686011475696",
//   appId: "1:686011475696:web:8234f7d41050f5c4bcc435"
// }; 

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const secondaryApp = initializeApp(secondaryAppConfig);

// export default app;
// export { secondaryApp };