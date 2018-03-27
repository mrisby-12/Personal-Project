import firebase from  '@firebase/app';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyC3yddIjyR5xbxD05mUCkWlZxWrIUcrOE0",
    authDomain: "personal-project-3598c.firebaseapp.com",
    databaseURL: "https://personal-project-3598c.firebaseio.com",
    projectId: "personal-project-3598c",
    storageBucket: "personal-project-3598c.appspot.com",
    messagingSenderId: "384162778727"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;