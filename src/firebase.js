//import firebase from 'firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCYw4FxS9kJsFhOolDh3HeByP2zSgyj_Sg",
    authDomain: "react-netflix-clone-462d9.firebaseapp.com",
    projectId: "react-netflix-clone-462d9",
    storageBucket: "react-netflix-clone-462d9.appspot.com",
    messagingSenderId: "308358963100",
    appId: "1:308358963100:web:9dfc6b1936a478d97c3259"
  };

//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
//const auth = firebase.auth();

  //export { auth };
  //export default db;


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };