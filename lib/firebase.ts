
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBeRN0R4WMl6fMYJBasA1XtHf_GL6ChYUI",
  authDomain: "aulamobile-2005.firebaseapp.com",
  databaseURL: "https://aulamobile-2005.firebaseio.com",
  projectId: "aulamobile-2005",
  storageBucket: "aulamobile-2005.firebasestorage.app",
  messagingSenderId: "322588156055",
  appId: "1:322588156055:web:7d703ab6ff1415a97ac9d2",
  measurementId: "G-7FVZM3BZ0R"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
