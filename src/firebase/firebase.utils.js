import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCMkbceU2xauXoDeWI0lRtCiWzkkIe-ccY",
    authDomain: "crwn-db-beb72.firebaseapp.com",
    projectId: "crwn-db-beb72",
    storageBucket: "crwn-db-beb72.appspot.com",
    messagingSenderId: "396437353657",
    appId: "1:396437353657:web:6a5f8adfe4f5cb39f8d768",
    measurementId: "G-5QVCEBYGLK"
  };

export const createUserProfileDocument = async (userAuth, extraData) => {
  if(!userAuth) return; // get out quickly

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      })
    }
    catch(err) {
      console.log('uh-oh! error creating user', err.message);
    }
  }

  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;