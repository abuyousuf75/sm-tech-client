// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6SIiErKl_0BFSib27AFM_lW1tTZ1P528",
  authDomain: "sm-tech-f3940.firebaseapp.com",
  projectId: "sm-tech-f3940",
  storageBucket: "sm-tech-f3940.appspot.com",
  messagingSenderId: "12653646131",
  appId: "1:12653646131:web:a97e1eff6cc6b6b8c52e46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;




