// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDYJFEbUoUW-baDPs3mfmtTEIkclyjyoPc',
	authDomain: 'webproject-73f1c.firebaseapp.com',
	projectId: 'webproject-73f1c',
	storageBucket: 'webproject-73f1c.appspot.com',
	messagingSenderId: '998732665482',
	appId: '1:998732665482:web:de353efcafaca6872e5373',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
console.log(app)

const provider = new GoogleAuthProvider()
const auth = getAuth()
signInWithPopup(auth, provider)
	.then((result) => {
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result)
		const token = credential.accessToken
		// The signed-in user info.
		const user = result.user
		return user
		// ...
	})
	.catch((error) => {
		// Handle Errors here.
		const errorCode = error.code
		const errorMessage = error.message
		// The email of the user's account used.
		const email = error.customData.email
		// The AuthCredential type that was used.
		const credential = GoogleAuthProvider.credentialFromError(error)
		// ...
	})

const btnSign = document.getElementById('sign')

btnSign.addEventListener('click', async () => {
	const user =await signInWithPopup(auth, provider)
	console.log(user);
})
