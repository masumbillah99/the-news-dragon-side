// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("environment variable", import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKey: "AIzaSyBPLJR_HTsq7aBJZiBYa42hJl8a2EkRrdQ",
  authDomain: "news-dragon-client-e9a1a.firebaseapp.com",
  projectId: "news-dragon-client-e9a1a",
  storageBucket: "news-dragon-client-e9a1a.appspot.com",
  messagingSenderId: "1003371894222",
  appId: "1:1003371894222:web:43bcc912e93a5b9c47079f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
