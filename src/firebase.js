import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsFjvMU23UKAb2ohRKg_Z8EyPXUz6GwpQ",
  authDomain: "slack-clone-7ac71.firebaseapp.com",
  projectId: "slack-clone-7ac71",
  storageBucket: "slack-clone-7ac71.appspot.com",
  messagingSenderId: "637831382311",
  appId: "1:637831382311:web:af2d4bba9192121143d502"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth,provider};