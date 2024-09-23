import {handleSignInError} from "@/services/clark";
import {handleClerkError} from "@/utils/ClerkErrorHandler";
import {useSignIn} from "@clerk/clerk-react";

// Custom hook to get Clerk sign-in functions
export const useClerkSignIn = () => {
	const {signIn, setActive, isLoaded} = useSignIn();

	const loginWithClerk = async (email: string, password: string) => {
		if (!isLoaded) {
			throw new Error("Sign-in resource not loaded");
		}

		console.log(`loginWithClerk`);
		try {
			const signInAttempt = await signIn.create({
				identifier: email,
				password,
			});

			if (signInAttempt.status === "complete") {
				await setActive({session: signInAttempt.createdSessionId});
			} else {
				throw new Error("Sign-in attempt failed");
			}
		} catch (error) {
			throw handleClerkError(error as Error);
		}
	};

	return {loginWithClerk, isLoaded};
};
