// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyClt7akqWkd3EJETxjYnQ8TsejdX9yL4To",
  authDomain: "chat-react-d5e2d.firebaseapp.com",
  projectId: "chat-react-d5e2d",
  storageBucket: "chat-react-d5e2d.appspot.com",
  messagingSenderId: "272223122536",
  appId: "1:272223122536:web:96ef11f1e0722dbe49b7dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
