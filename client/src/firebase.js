import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfliAapbJtACuaa84XBYm6TCAh_QkSC9I",
    authDomain: "react-chat-u.firebaseapp.com",
    databaseURL: "https://react-chat-u.firebaseio.com",
    projectId: "react-chat-u",
    storageBucket: "react-chat-u.appspot.com",
    messagingSenderId: "127812869631"
};
  firebase.initializeApp(config);
  export default firebase