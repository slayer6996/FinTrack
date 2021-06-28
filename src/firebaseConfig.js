import firebase from 'firebase/app'
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAHODtXW-uicneQ5dEphQ3E5-rgbWHpgg8",
    authDomain: "fintrackofficial.firebaseapp.com",
    projectId: "fintrackofficial",
    storageBucket: "fintrackofficial.appspot.com",
    messagingSenderId: "679118207111",
    appId: "1:679118207111:web:085a05af5db9f5ec772022",
    measurementId: "G-DNGG9W10G6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();