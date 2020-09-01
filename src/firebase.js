// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/database");

const firebaseConfig = {
    apiKey: "AIzaSyA6yAHz4XnnhyiSAIvbkuQHOCWGzjE0ZL8",
    authDomain: "nodejs-d90f7.firebaseapp.com",
    databaseURL: "https://nodejs-d90f7.firebaseio.com",
    projectId: "nodejs-d90f7",
    storageBucket: "nodejs-d90f7.appspot.com",
    messagingSenderId: "1054013133484",
    appId: "1:1054013133484:web:0d87abd357ce8425bf8509",
    measurementId: "G-S3EV6XCBYZ"
  };

  var app = firebase.initializeApp(firebaseConfig);
  console.log(firebase);
  console.log(app);

export default firebase.database();
