// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAjUsVFzDSmMKASsfxTR7_Plvbm8SpV_Uw',
  authDomain: 'education-app-demo.firebaseapp.com',
  projectId: 'education-app-demo',
  storageBucket: 'education-app-demo.appspot.com',
  messagingSenderId: '973186874545',
  appId: '1:973186874545:web:de5f3e502b36fd79343690',
  measurementId: 'G-8F4CKMG7ZH',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};
