// Writing data to Firestore
import {doc, getDoc, setDoc} from "firebase/firestore";
import {FIRESTORE_DB} from "@/config/firebase";

const saveUserData = async (userId: string, userData: any) => {
	try {
		// `setDoc` creates or overwrites a document
		await setDoc(doc(FIRESTORE_DB, "users", userId), userData);
		console.log("User data saved");
	} catch (error) {
		console.error("Error saving user data:", error);
	}
};

const getUserData = async (userId: string) => {
	try {
		const docRef = doc(FIRESTORE_DB, "users", userId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log("User Data:", docSnap.data());
		} else {
			console.log("No such document!");
		}
	} catch (error) {
		console.error("Error getting document:", error);
	}
};

export {saveUserData, getUserData};
