// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDYMNCaIbC2_xUZNISffSTC-X7wIv5Rdj0",
  authDomain: "blogproject-773fc.firebaseapp.com",
  projectId: "blogproject-773fc",
  storageBucket: "blogproject-773fc.appspot.com",
  messagingSenderId: "778710987243",
  appId: "1:778710987243:web:1a74fc22966441d80869ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();