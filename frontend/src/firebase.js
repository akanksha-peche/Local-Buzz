// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "local-buzz-c51f5.firebaseapp.com",
  projectId: "local-buzz-c51f5",
  storageBucket: "local-buzz-c51f5.firebasestorage.app",
  messagingSenderId: "384019048486",
  appId: "1:384019048486:web:d8a8fa921daa7f7d98dee7"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

