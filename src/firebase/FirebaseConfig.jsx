// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6lpZrZpAL6NUDKX1unS_W6_9hHIqBaMw",
  authDomain: "ecommerce-bdcba.firebaseapp.com",
  projectId: "ecommerce-bdcba",
  storageBucket: "ecommerce-bdcba.appspot.com",
  messagingSenderId: "82505620581",
  appId: "1:82505620581:web:52f8602f8d5f783a997a8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
