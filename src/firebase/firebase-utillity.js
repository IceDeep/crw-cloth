import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

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
export const db = getFirestore(app);

export const createUserProfileDocument = async (
  userAuth,
  ...additionalData
) => {
  if (!userAuth) return;

  const userRef = doc(db, `newUser/${userAuth.uid}`);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
