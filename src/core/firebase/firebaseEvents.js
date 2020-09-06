import root, { IDBOpenDBRequest } from "window-or-global";
// import * as firebase from 'firebase/app';
// var FirebaseContext = require("./FirebaseContext");
// import 'firebase/firestore';
// import firebase from "./firebase";
var firebase = require("firebase/app");
import "firebase/firestore";

const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();






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

const db = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();











export const saveMessage = (messageText) => {
	console.log(db);
	console.log(firestore);
	console.log(FirebaseContext);
    FirebaseContext
	.collection("messages")
	.add({
		name: this.getUserName(),
		text: messageText,
		profilePicUrl: this.getProfilePicUrl(),
		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
	})
	.catch(function (error) {
		console.error("Error writing new message to database", error);
	});
}

export class firebaseEvents {
	constructor() {}

	// Signs-in Friendly Chat.
	signIn() {
		// Sign into Firebase using popup auth & Google as the identity provider.
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	}

	// Signs-out of Friendly Chat.
	signOut() {
		// Sign out of Firebase.
		firebase.auth().signOut();
	}

	// Initiate Firebase Auth.
	initFirebaseAuth() {
		// Listen to auth state changes.
		firebase.auth().onAuthStateChanged(authStateObserver);
	}

	// Returns the signed-in user's profile pic URL.
	getProfilePicUrl() {
		return (
			firebase.auth().currentUser.photoURL || "/images/profile_placeholder.png"
		);
	}

	// Returns the signed-in user's display name.
	getUserName() {
		return firebase.auth().currentUser.displayName;
	}

	// Returns true if a user is signed-in.
	isUserSignedIn() {
		return !!firebase.auth().currentUser;
	}

	// Saves a new message to your Cloud Firestore database.
	saveMessage(messageText) {
		console.log(firebase);
		// console.log(firebase.firestore());
		// Add a new message entry to the database.
		return firebase
			.collection("messages")
			.add({
				name: this.getUserName(),
				text: messageText,
				profilePicUrl: this.getProfilePicUrl(),
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.catch(function (error) {
				console.error("Error writing new message to database", error);
			});
	}

	// Loads chat messages history and listens for upcoming ones.
	loadMessages() {
		// Create the query to load the last 12 messages and listen for new ones.
		var query = firebase
			.firestore()
			.collection("messages")
			.orderBy("timestamp", "desc")
			.limit(12);

		// Start listening to the query.
		query.onSnapshot(function (snapshot) {
			snapshot.docChanges().forEach(function (change) {
				if (change.type === "removed") {
					deleteMessage(change.doc.id);
				} else {
					var message = change.doc.data();
					displayMessage(
						change.doc.id,
						message.timestamp,
						message.name,
						message.text,
						message.profilePicUrl,
						message.imageUrl
					);
				}
			});
		});
	}

	// Saves a new message containing an image in Firebase.
	// This first saves the image in Firebase storage.
	saveImageMessage(file) {
		// 1 - We add a message with a loading icon that will get updated with the shared image.
		firebase
			.firestore()
			.collection("messages")
			.add({
				name: getUserName(),
				imageUrl: LOADING_IMAGE_URL,
				profilePicUrl: getProfilePicUrl(),
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then(function (messageRef) {
				// 2 - Upload the image to Cloud Storage.
				var filePath =
					firebase.auth().currentUser.uid +
					"/" +
					messageRef.id +
					"/" +
					file.name;
				return firebase
					.storage()
					.ref(filePath)
					.put(file)
					.then(function (fileSnapshot) {
						// 3 - Generate a public URL for the file.
						return fileSnapshot.ref.getDownloadURL().then((url) => {
							// 4 - Update the chat message placeholder with the image's URL.
							return messageRef.update({
								imageUrl: url,
								storageUri: fileSnapshot.metadata.fullPath,
							});
						});
					});
			})
			.catch(function (error) {
				console.error(
					"There was an error uploading a file to Cloud Storage:",
					error
				);
			});
	}

	// Saves the messaging device token to the datastore.
	saveMessagingDeviceToken() {
		firebase
			.messaging()
			.getToken()
			.then(function (currentToken) {
				if (currentToken) {
					console.log("Got FCM device token:", currentToken);
					// Saving the Device Token to the datastore.
					firebase
						.firestore()
						.collection("fcmTokens")
						.doc(currentToken)
						.set({ uid: firebase.auth().currentUser.uid });
				} else {
					// Need to request permissions to show notifications.
					requestNotificationsPermissions();
				}
			})
			.catch(function (error) {
				console.error("Unable to get messaging token.", error);
			});
	}

	// Requests permission to show notifications.
	requestNotificationsPermissions() {
		console.log("Requesting notifications permission...");
		firebase
			.messaging()
			.requestPermission()
			.then(function () {
				// Notification permission granted.
				saveMessagingDeviceToken();
			})
			.catch(function (error) {
				console.error("Unable to get permission to notify.", error);
			});
	}

	// Triggered when a file is selected via the media picker.
	onMediaFileSelected(event) {
		event.preventDefault();
		var file = event.target.files[0];

		// Clear the selection in the file picker input.
		imageFormElement.reset();

		// Check if the file is an image.
		if (!file.type.match("image.*")) {
			var data = {
				message: "You can only share images",
				timeout: 2000,
			};
			signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
			return;
		}
		// Check if the user is signed-in
		if (checkSignedInWithMessage()) {
			saveImageMessage(file);
		}
	}

	// Triggered when the send new message form is submitted.
	onMessageFormSubmit(e) {
		e.preventDefault();
		// Check that the user entered a message and is signed in.
		if (messageInputElement.value && checkSignedInWithMessage()) {
			saveMessage(messageInputElement.value).then(function () {
				// Clear message text field and re-enable the SEND button.
				resetMaterialTextfield(messageInputElement);
				toggleButton();
			});
		}
	}

	// Triggers when the auth state change for instance when the user signs-in or signs-out.
	authStateObserver(user) {
		if (user) {
			// User is signed in!
			// Get the signed-in user's profile pic and name.
			var profilePicUrl = getProfilePicUrl();
			var userName = getUserName();

			// Set the user's profile pic and name.
			userPicElement.style.backgroundImage =
				"url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")";
			userNameElement.textContent = userName;

			// Show user's profile and sign-out button.
			userNameElement.removeAttribute("hidden");
			userPicElement.removeAttribute("hidden");
			signOutButtonElement.removeAttribute("hidden");

			// Hide sign-in button.
			signInButtonElement.setAttribute("hidden", "true");

			// We save the Firebase Messaging Device token and enable notifications.
			saveMessagingDeviceToken();
		} else {
			// User is signed out!
			// Hide user's profile and sign-out button.
			userNameElement.setAttribute("hidden", "true");
			userPicElement.setAttribute("hidden", "true");
			signOutButtonElement.setAttribute("hidden", "true");

			// Show sign-in button.
			signInButtonElement.removeAttribute("hidden");
		}
	}

	// Returns true if user is signed-in. Otherwise false and displays a message.
	checkSignedInWithMessage() {
		// Return true if the user is signed in Firebase
		if (isUserSignedIn()) {
			return true;
		}

		// Display a message to the user using a Toast.
		var data = {
			message: "You must sign-in first",
			timeout: 2000,
		};
		signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
		return false;
	}

	// Resets the given MaterialTextField.
	resetMaterialTextfield(element) {
		element.value = "";
		element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
	}

	// Adds a size to Google Profile pics URLs.
	addSizeToGoogleProfilePic(url) {
		if (
			url.indexOf("googleusercontent.com") !== -1 &&
			url.indexOf("?") === -1
		) {
			return url + "?sz=150";
		}
		return url;
	}

	// Delete a Message from the UI.
	deleteMessage(id) {
		var div = document.getElementById(id);
		// If an element for that message exists we delete it.
		if (div) {
			div.parentNode.removeChild(div);
		}
	}

	createAndInsertMessage(id, timestamp) {
		const container = document.createElement("div");
		container.innerHTML = MESSAGE_TEMPLATE;
		const div = container.firstChild;
		div.setAttribute("id", id);

		// If timestamp is null, assume we've gotten a brand new message.
		// https://stackoverflow.com/a/47781432/4816918
		timestamp = timestamp ? timestamp.toMillis() : Date.now();
		div.setAttribute("timestamp", timestamp);

		// figure out where to insert new message
		const existingMessages = messageListElement.children;
		if (existingMessages.length === 0) {
			messageListElement.appendChild(div);
		} else {
			let messageListNode = existingMessages[0];

			while (messageListNode) {
				const messageListNodeTime = messageListNode.getAttribute("timestamp");

				if (!messageListNodeTime) {
					throw new Error(
						`Child ${messageListNode.id} has no 'timestamp' attribute`
					);
				}

				if (messageListNodeTime > timestamp) {
					break;
				}

				messageListNode = messageListNode.nextSibling;
			}

			messageListElement.insertBefore(div, messageListNode);
		}

		return div;
	}

	// Displays a Message in the UI.
	displayMessage(id, timestamp, name, text, picUrl, imageUrl) {
		var div =
			document.getElementById(id) || createAndInsertMessage(id, timestamp);

		// profile picture
		if (picUrl) {
			div.querySelector(".pic").style.backgroundImage =
				"url(" + addSizeToGoogleProfilePic(picUrl) + ")";
		}

		div.querySelector(".name").textContent = name;
		var messageElement = div.querySelector(".message");

		if (text) {
			// If the message is text.
			messageElement.textContent = text;
			// Replace all line breaks by <br>.
			messageElement.innerHTML = messageElement.innerHTML.replace(
				/\n/g,
				"<br>"
			);
		} else if (imageUrl) {
			// If the message is an image.
			var image = document.createElement("img");
			image.addEventListener("load", function () {
				messageListElement.scrollTop = messageListElement.scrollHeight;
			});
			image.src = imageUrl + "&" + new Date().getTime();
			messageElement.innerHTML = "";
			messageElement.appendChild(image);
		}
		// Show the card fading-in and scroll to view the new message.
		setTimeout(function () {
			div.classList.add("visible");
		}, 1);
		messageListElement.scrollTop = messageListElement.scrollHeight;
		messageInputElement.focus();
	}

	// Enables or disables the submit button depending on the values of the input
	// fields.
	toggleButton() {
		if (messageInputElement.value) {
			submitButtonElement.removeAttribute("disabled");
		} else {
			submitButtonElement.setAttribute("disabled", "true");
		}
	}

	// Checks that the Firebase SDK has been correctly setup and configured.
	checkSetup() {
		if (
			!window.firebase ||
			!(firebase.app instanceof Function) ||
			!firebase.app().options
		) {
			window.alert(
				"You have not configured and imported the Firebase SDK. " +
					"Make sure you go through the codelab setup instructions and make " +
					"sure you are running the codelab using `firebase serve`"
			);
		}
	}
}
