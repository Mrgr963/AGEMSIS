// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAerQk9nLT5F_tMI8JUrHKaxHPopcXB-I8",
  authDomain: "agemsis.firebaseapp.com",
  projectId: "agemsis",
  storageBucket: "agemsis.appspot.com",
  messagingSenderId: "438527417548",
  appId: "1:438527417548:web:840c217e61981d18cd3669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig