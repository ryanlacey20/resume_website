import { createApp } from 'vue'

import App from './App.vue'
import router from './router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrFES_R9bWEKLNtg2mp8vbR0t65s7tC1Y",
    authDomain: "resumewebsite-1705006227399.firebaseapp.com",
    projectId: "resumewebsite-1705006227399",
    storageBucket: "resumewebsite-1705006227399.appspot.com",
    messagingSenderId: "885450080597",
    appId: "1:885450080597:web:f471496db9c6e97bddefdc",
    measurementId: "G-FBDF6XP8WN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

createApp(App).use(router).mount('#app');
