// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2N-LzdD0dVCaR-nAYuBCLebavVGCodic",
  authDomain: "social-media-project-42177.firebaseapp.com",
  projectId: "social-media-project-42177",
  storageBucket: "social-media-project-42177.appspot.com",
  messagingSenderId: "608397651276",
  appId: "1:608397651276:web:1a4099f1fe385bcc0c73e9",
  measurementId: "G-YVVC0PYP4M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
