import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA3mrVoWNdJEcb15DHf9I0dUQHVivrcCC0",
  authDomain: "fir-app-65f76.firebaseapp.com",
  projectId: "fir-app-65f76",
  storageBucket: "fir-app-65f76.appspot.com",
  messagingSenderId: "606125560958",
  appId: "1:606125560958:web:7ab0278df42f1ebf0db42f",
  measurementId: "G-LCEH5Z0VME"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
