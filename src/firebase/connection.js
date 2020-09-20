import firebase from './firebase';

let db = firebase.database();

var connectedRef = firebase.database().ref(".info/connected");
connectedRef.on("value", function(snap) {
    console.log(snap);
  if (snap.val() === true) {
    console.log("connected");
  } else {
    console.log("not connected");
  }
});