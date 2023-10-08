// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwOzVj2HPublFvTeJRZiQ9qJSa0LtYWo8",
  authDomain: "netflixgpt-962b7.firebaseapp.com",
  projectId: "netflixgpt-962b7",
  storageBucket: "netflixgpt-962b7.appspot.com",
  messagingSenderId: "637989097824",
  appId: "1:637989097824:web:05b9dc6cfe4fb9c189ce05",
  measurementId: "G-9LJ9TTZQSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
