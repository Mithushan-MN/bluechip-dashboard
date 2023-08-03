import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxSJtCErQCbpyZJaDvyNK2uoFI3PsSZ9I",
  authDomain: "emailpasswordlogin-a9822.firebaseapp.com",
  projectId: "emailpasswordlogin-a9822",
  storageBucket: "emailpasswordlogin-a9822.appspot.com",
  messagingSenderId: "974969950750",
  appId: "1:974969950750:web:c51299092897f4fee7140f"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const db = getFirestore(app);
