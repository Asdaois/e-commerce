import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmXEMENnNfqpORsFvlmQPNEdDrggkY9nU",
  authDomain: "crwn-db-8f9b8.firebaseapp.com",
  projectId: "crwn-db-8f9b8",
  storageBucket: "crwn-db-8f9b8.appspot.com",
  messagingSenderId: "193936735657",
  appId: "1:193936735657:web:057ef2e1da00cdbbe998b8",
  measurementId: "G-4J0EH9FFWG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAd = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAd,
        ...additionalData,
      });
    } catch (e) {
      console.log("Error creating user", e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
