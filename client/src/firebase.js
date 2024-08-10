// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-p28.firebaseapp.com",
  projectId: "mern-estate-p28",
  storageBucket: "mern-estate-p28.appspot.com",
  messagingSenderId: "74889618318",
  appId: "1:74889618318:web:2eb42cbf7f4b1be260fadf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
