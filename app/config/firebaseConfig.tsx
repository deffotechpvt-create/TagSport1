// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkplQw3lREtB5IkFMYunwsbUr7ul8Gnj4",
  authDomain: "chanel-app-95c5a.firebaseapp.com",
  projectId: "chanel-app-95c5a",
  storageBucket: "chanel-app-95c5a.firebasestorage.app",
  messagingSenderId: "549961004054",
  appId: "1:549961004054:web:f04a0eaa918a0660fd7137",
  measurementId: "G-PTEWFQG2KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);