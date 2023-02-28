import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR-3-WkZpp30RNBhQd89pMVTxKnB2-lrI",
  authDomain: "crwn-cloth-db-48a63.firebaseapp.com",
  projectId: "crwn-cloth-db-48a63",
  storageBucket: "crwn-cloth-db-48a63.appspot.com",
  messagingSenderId: "335157103430",
  appId: "1:335157103430:web:a05e1eae1881b8eafdb347",
  measurementId: "G-P73VJK4H5T"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
