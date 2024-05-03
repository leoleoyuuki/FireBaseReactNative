// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc3qwltjhu7TEUPnyrw5clxBeWCLDlKtA",
  authDomain: "authenticacao-pf.firebaseapp.com",
  projectId: "authenticacao-pf",
  storageBucket: "authenticacao-pf.appspot.com",
  messagingSenderId: "540516093273",
  appId: "1:540516093273:web:b4d7ed8d7332551d9cd048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);