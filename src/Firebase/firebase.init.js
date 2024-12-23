import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA36cW0BOaMKcsgP7oAZNtzWieWglo3fZI",
  authDomain: "simple-firebase-2-88996.firebaseapp.com",
  projectId: "simple-firebase-2-88996",
  storageBucket: "simple-firebase-2-88996.firebasestorage.app",
  messagingSenderId: "995312283456",
  appId: "1:995312283456:web:7d2c3f8c1c30322ccf14a5",
  measurementId: "G-4F7DSLWL92",
};

const app = initializeApp(firebaseConfig);
// this is most important
const auth = getAuth(app);
export default auth;

// This is old project -----
// 
// // 