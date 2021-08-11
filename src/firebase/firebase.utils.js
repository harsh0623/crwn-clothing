import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAm9lnmsN9pGdMjpwiqPMg9oRIgK6gqVf0",
    authDomain: "crwn-db-e7c99.firebaseapp.com",
    projectId: "crwn-db-e7c99",
    storageBucket: "crwn-db-e7c99.appspot.com",
    messagingSenderId: "922720829103",
    appId: "1:922720829103:web:f111f364f0fb3c703ede5a",
    measurementId: "G-J4FVPQB7NQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createdAT = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAT,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }

    }
    return userRef;

}

firebase.initializeApp(config);

export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase