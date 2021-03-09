import  firebase from "firebase";
import "firebase/storage";
var firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyDHtIkGkF8GAk5iNunB5LidioUE7bzIsdo",
  authDomain: "saaps-7fa9e.firebaseapp.com",
  projectId: "saaps-7fa9e",
  storageBucket: "saaps-7fa9e.appspot.com",
  messagingSenderId: "21021741622",
  appId: "1:21021741622:web:be828acf56ea9cc3ff3e97",
  measurementId: "G-N70RR8RSP2"
});
  // Initialize Firebase
  
 var db= firebaseApp.firestore();
 export{db};
 const storage = firebase.storage()
 export  {
    storage, firebase as default
  };
  export const app= firebaseApp;