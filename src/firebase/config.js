import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6m60kFxjPEmt8EassdEssqo-EDWAqmy8",
    authDomain: "olx-clone-501e4.firebaseapp.com",
    projectId: "olx-clone-501e4",
    storageBucket: "olx-clone-501e4.appspot.com",
    messagingSenderId: "45694217449",
    appId: "1:45694217449:web:5a6c3530745caf5ec8d478",
    measurementId: "G-2Z9KQ04TDG"
  };

export default firebase.initializeApp(firebaseConfig)