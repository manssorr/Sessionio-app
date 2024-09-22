import {initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Initialize Firebase with your config
const firebaseConfig = {
	apiKey: "AIzaSyCHJx8uacgtHMg6DjrJYBhjiE_uMhLOtMI",
	authDomain: "sessionio-b05eb.firebaseapp.com",
	projectId: "sessionio-b05eb",
	storageBucket: "sessionio-b05eb.appspot.com",
	messagingSenderId: "425887155935",
	appId: "1:425887155935:web:a21730a01bc91659884b6a",
	measurementId: "G-YM47P7LNVS",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
