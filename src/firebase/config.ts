// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDYJFEbUoUW-baDPs3mfmtTEIkclyjyoPc',
	authDomain: 'webproject-73f1c.firebaseapp.com',
	projectId: 'webproject-73f1c',
	storageBucket: 'webproject-73f1c.appspot.com',
	messagingSenderId: '998732665482',
	appId: '1:998732665482:web:f8cb4fd0e2abb0302e5373',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
