import firebase from './firebase';

export default writeUserData = (userId, name, email, imageUrl) => {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }