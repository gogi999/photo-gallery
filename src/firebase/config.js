import 'firebase/storage';
import 'firebase/firestore';

import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAoqpWA523jdow2cZ80iOj7NCQbrIevsDk",
    authDomain: "g9-photo-gallery.firebaseapp.com",
    projectId: "g9-photo-gallery",
    storageBucket: "g9-photo-gallery.appspot.com",
    messagingSenderId: "1046387625145",
    appId: "1:1046387625145:web:55a9ae811f360e401d5f68"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
