import {useSignUp} from "@clerk/clerk-react";
import {handleClerkError} from "@/utils/ClerkErrorHandler";

export const useClerkSignUp = () => {
	const {signUp, setActive, isLoaded} = useSignUp();

	const signUpWithClerk = async (email: string, password: string) => {
		if (!isLoaded) {
			throw new Error("Sign-up resource not loaded");
		}

		console.log(`signUpWithClerk`);
		try {
			const signUpAttempt = await signUp.create({
				emailAddress: email,
				password,
			});

			if (signUpAttempt.status === "complete") {
				await setActive({session: signUpAttempt.createdSessionId});
			} else {
				throw new Error("Sign-up attempt failed");
			}
		} catch (error) {
			throw handleClerkError(error as Error);
		}
	};

	return {signUpWithClerk, isLoaded};
};
