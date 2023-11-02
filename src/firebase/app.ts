// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKxSWSrzBuFmRlRgfRcdhbnLoIX1-q7Z4",
    authDomain: "pokemon-notebook.firebaseapp.com",
    projectId: "pokemon-notebook",
    storageBucket: "pokemon-notebook.appspot.com",
    messagingSenderId: "38905964123",
    appId: "1:38905964123:web:8374c1f3046d20cb78017e",
    measurementId: "G-4TZVFYJ8GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app