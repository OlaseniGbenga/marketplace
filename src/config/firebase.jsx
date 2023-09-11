// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZxlrwgj7_ML0UdiPkFvBVs5wSngcA-Js",
  authDomain: "marketplace-46085.firebaseapp.com",
  projectId: "marketplace-46085",
  storageBucket: "marketplace-46085.appspot.com",
  messagingSenderId: "844413458685",
  appId: "1:844413458685:web:fea21a23382b8423a54694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);