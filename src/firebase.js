// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBW2_iDmiui_U4iPVE6e8wZNWbEMcp31uE",
    authDomain: "e-commerce-clone-2.firebaseapp.com",
    projectId: "e-commerce-clone-2",
    storageBucket: "e-commerce-clone-2.appspot.com",
    messagingSenderId: "96925646877",
    appId: "1:96925646877:web:9b0a6591f66f59550a46f4",
    measurementId: "G-40PQTG6HRY"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};