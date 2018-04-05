import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyC3yddIjyR5xbxD05mUCkWlZxWrIUcrOE0",
    authDomain: "personal-project-3598c.firebaseapp.com",
    databaseURL: "https://personal-project-3598c.firebaseio.com",
    projectId: "personal-project-3598c",
    storageBucket: "personal-project-3598c.appspot.com",
    messagingSenderId: "384162778727"
};

firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();