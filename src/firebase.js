// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6d0lj1dFG5IAO4u0uepp4ooYSlMeZbj4",
  authDomain: "boba-movies.firebaseapp.com",
  projectId: "boba-movies",
  storageBucket: "boba-movies.appspot.com",
  messagingSenderId: "1062516264766",
  appId: "1:1062516264766:web:5afcadc7a996c09748e66f",
  measurementId: "G-TJ0G4PH0HF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
