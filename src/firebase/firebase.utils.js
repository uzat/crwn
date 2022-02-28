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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;