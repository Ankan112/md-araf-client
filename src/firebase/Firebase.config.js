// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyCGipbKXO0UnfhvvKs4d_0LeU7U_4hPTUk",
    authDomain: "md-araf.firebaseapp.com",
    projectId: "md-araf",
    storageBucket: "md-araf.appspot.com",
    messagingSenderId: "370666955385",
    appId: "1:370666955385:web:3f2fc3e81908a1a19c2aa8"
};

// Initialize Firebase
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);

export default app;