// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1kUCI74P1AaFk5nUaK3uN2fzE5AIT1eU",
    authDomain: "lookbook-483a4.firebaseapp.com",
    databaseURL: "https://lookbook-483a4.firebaseio.com",
    projectId: "lookbook-483a4",
    storageBucket: "lookbook-483a4.appspot.com",
    messagingSenderId: "809870872678",
    appId: "1:809870872678:web:00fa902a81ea63f303dda7"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;
	const userRef = store.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const { displayName, email} = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}catch(error){
			 console.log('error creating user', error.message);
		}
	}
	return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
