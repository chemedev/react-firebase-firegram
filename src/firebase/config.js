import * as firebase from 'firebase/app';
import 'firebase/storage'; //STRG FOR IMAGES
import 'firebase/firestore'; //DATABASE

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAVw3CQglvcpVKJXxSR5ND8a-5sGsqTVuk',
  authDomain: 'mechegram.firebaseapp.com',
  databaseURL: 'https://mechegram.firebaseio.com',
  projectId: 'mechegram',
  storageBucket: 'mechegram.appspot.com',
  messagingSenderId: '944014992038',
  appId: '1:944014992038:web:852c1b1fa702abea35ca67',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
