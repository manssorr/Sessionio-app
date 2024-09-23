import {clerkErrorMap} from "@/constants/ClerkErrorMap";
import type {ClerkError, ClerkErrorCode} from "@/types/ClerkErrorTypes";
import {isClerkAPIResponseError} from "@clerk/clerk-expo";

export function handleClerkError(error: Error): {
	code: ClerkErrorCode;
	message: string;
	details?: any;
} {
	if (isClerkAPIResponseError(error)) {
		const clerkError = error.errors[0];
		const errorCode = clerkError.code as ClerkErrorCode;

		return {
			code: errorCode,
			message: clerkErrorMap[errorCode] || clerkError.message,
			details: clerkError.longMessage || clerkError.meta,
		};
	}

	// If it's not a recognized Clerk error, return a generic error
	return {
		code: "unknown_error",
		message: "An unexpected error occurred. Please try again later.",
		details: __DEV__ ? error : undefined,
	};
}
