// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

import firebase from 'firebase/app';
import 'firebase/firestore';

// const firebaseConfig = {
// 	apiKey: "AIzaSyA6yAHz4XnnhyiSAIvbkuQHOCWGzjE0ZL8",
// 	authDomain: "nodejs-d90f7.firebaseapp.com",
// 	databaseURL: "https://nodejs-d90f7.firebaseio.com",
// 	projectId: "nodejs-d90f7",
// 	storageBucket: "nodejs-d90f7.appspot.com",
// 	messagingSenderId: "1054013133484",
// 	appId: "1:1054013133484:web:0d87abd357ce8425bf8509",
// 	measurementId: "G-S3EV6XCBYZ",
// };

// firebase.initializeApp(firebaseConfig);


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBQ1olf124Vp4ylrrc3eZCvfQUoc2oNBBM",
    authDomain: "live-support-bot.firebaseapp.com",
    databaseURL: "https://live-support-bot.firebaseio.com",
    projectId: "live-support-bot",
    storageBucket: "live-support-bot.appspot.com",
    messagingSenderId: "1074224122035",
    appId: "1:1074224122035:web:0040c4ea47b4d5d710c8c6"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// export default firebase.firestore();
export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();
