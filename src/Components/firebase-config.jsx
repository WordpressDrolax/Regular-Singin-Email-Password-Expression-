// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVfMnj-mIF2ylo8AX1i7XeEiaL6lV7E1w",
  authDomain: "regular-email-password-ex.firebaseapp.com",
  projectId: "regular-email-password-ex",
  storageBucket: "regular-email-password-ex.appspot.com",
  messagingSenderId: "189970909740",
  appId: "1:189970909740:web:513df748cf6a4987191f89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;