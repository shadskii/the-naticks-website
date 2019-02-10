import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCSehYvyBicba0IRAI7aDF6Tg1CLsxIfKU',
  authDomain: 'naticks-dc3bf.firebaseapp.com',
  databaseURL: 'https://naticks-dc3bf.firebaseio.com',
  projectId: 'naticks-dc3bf',
  storageBucket: 'naticks-dc3bf.appspot.com',
  messagingSenderId: '1017506953750',
};
firebase.initializeApp(config);

export const db = firebase.firestore();
