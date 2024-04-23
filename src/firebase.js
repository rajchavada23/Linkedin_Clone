import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXZS4CE2B4iS0jd798MEhjIa-GZOV1efM",
  authDomain: "linkedin-clone-290df.firebaseapp.com",
  projectId: "linkedin-clone-290df",
  storageBucket: "linkedin-clone-290df.appspot.com",
  messagingSenderId: "681343441754",
  appId: "1:681343441754:web:7ce97e644779d7ca633163",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};