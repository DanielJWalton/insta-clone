// Import the functions you need from the SDKs you need
import {initializeApp, getApps, getApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC2oqN7-rJM0CCwYkLbPOoUA4hIfQKiUxc',
	authDomain: 'insta-clone-dw.firebaseapp.com',
	projectId: 'insta-clone-dw',
	storageBucket: 'insta-clone-dw.appspot.com',
	messagingSenderId: '66350250848',
	appId: '1:66350250848:web:7c915e7d13857daa43fc05',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};
