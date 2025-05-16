// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRkkI_YzmTGisATzo95OC4nvvXQnwtHDU",
  authDomain: "sports-app-7fc79.firebaseapp.com",
  projectId: "sports-app-7fc79",
  storageBucket: "sports-app-7fc79.firebasestorage.app",
  messagingSenderId: "78165604371",
  appId: "1:78165604371:web:9171017c65e13b3db067e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)