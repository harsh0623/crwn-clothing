import firebase from "firebase/app";
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "AIzaSyAm9lnmsN9pGdMjpwiqPMg9oRIgK6gqVf0",
    authDomain: "crwn-db-e7c99.firebaseapp.com",
    projectId: "crwn-db-e7c99",
    storageBucket: "crwn-db-e7c99.appspot.com",
    messagingSenderId: "922720829103",
    appId: "1:922720829103:web:f111f364f0fb3c703ede5a",
    measurementId: "G-J4FVPQB7NQ"
};

firebase.initializeApp(config);

export const auth=firebase.auth();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;