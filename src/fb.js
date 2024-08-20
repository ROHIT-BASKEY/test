import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js'
import { collection, getFirestore, getDocs, onSnapshot, doc } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-functions.js'

const app = initializeApp({
	apiKey: 'AIzaSyDX6zYmTkCIT8YonEw1Ginm3Jz935-GRWE',
	authDomain: 'sih-a7673.firebaseapp.com',
	projectId: 'sih-a7673',
	storageBucket: 'sih-a7673.appspot.com',
	messagingSenderId: '277065565804',
	appId: '1:277065565804:web:694ce3cf697b54df4b7a49'
})

const firestore = getFirestore(app)
const functions = getFunctions(app)
const f = httpsCallable(functions, 'f')

export { f }