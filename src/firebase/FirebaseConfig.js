// Import the functions you need from the SDKs you need

import {initializeApp, firebase} from "firebase/app";

import {getAnalytics} from "firebase/analytics";
import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBTKF79VLuPMyEVjwmGGMj2_k9DlE9FTM8",
  authDomain: "walletapp-d18a0.firebaseapp.com",
  databaseURL: "https://walletapp-d18a0-default-rtdb.firebaseio.com",
  projectId: "walletapp-d18a0",
  storageBucket: "walletapp-d18a0.appspot.com",
  messagingSenderId: "295884745478",
  appId: "1:295884745478:web:62874eedbdd18d5cf30c87",
  measurementId: "G-E4F1RVK62B",
};

// Initialize Firebase
if (firebase.app.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const db = getDatabase();

export {db};
