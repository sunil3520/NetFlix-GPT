// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe5hmMLB3DMuAN7hCefNvh2zQOhYt88Gs",
  authDomain: "netflix-gpt-c1d56.firebaseapp.com",
  projectId: "netflix-gpt-c1d56",
  storageBucket: "netflix-gpt-c1d56.appspot.com",
  messagingSenderId: "722941610838",
  appId: "1:722941610838:web:b98c0f168cc0b30e3e24f7",
  measurementId: "G-NT6K9QH0RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();