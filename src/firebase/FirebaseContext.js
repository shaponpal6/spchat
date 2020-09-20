// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// import root from 'window-or-global'
var firebase = require("@firebase/app");
// import "firebase/app";
// import "firebase/database";
// import "firebase/firestore";
// import "firebase/auth";
//require("firebase/database");


// import * as firebase from 'firebase/app'
import '@firebase/firestore';

// Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

const firebaseConfig = {
	apiKey: "AIzaSyCFk8e3Zgxj1xtOUfSK5o2kVxtV5EdyWgg",
	authDomain: "friendlychat-21b46.firebaseapp.com",
	databaseURL: "https://friendlychat-21b46.firebaseio.com",
	projectId: "friendlychat-21b46",
	storageBucket: "friendlychat-21b46.appspot.com",
	messagingSenderId: "943752361579",
	appId: "1:943752361579:web:f0f879766cb8026d3ee32e",
	measurementId: "G-Y4QEG4SVQE",
};

// firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();
