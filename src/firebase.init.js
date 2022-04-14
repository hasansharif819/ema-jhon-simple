// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Y6rEkcRZ8fRMT25eJ7I29bPELFHGeSA",
  authDomain: "ema-jhon-simple-bb883.firebaseapp.com",
  projectId: "ema-jhon-simple-bb883",
  storageBucket: "ema-jhon-simple-bb883.appspot.com",
  messagingSenderId: "629121674915",
  appId: "1:629121674915:web:404cb7588a513664e2d916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;