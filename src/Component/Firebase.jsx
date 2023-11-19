// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { isValidMotionProp } from "framer-motion";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgS29oWpU8zbt9giSXwt6a6Q9NOo01FYA",
  authDomain: "travel-app-7a353.firebaseapp.com",
  projectId: "travel-app-7a353",
  storageBucket: "travel-app-7a353.appspot.com",
  messagingSenderId: "183797560589",
  appId: "1:183797560589:web:8a19e263a17fb1fa006c44",
  measurementId: "G-0XLC15343H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth,app}