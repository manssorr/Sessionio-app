import {useClerkSignUp} from "@/hooks/useClerkSignUp";
import {useRouter} from "expo-router";
import React, {useCallback, useEffect, useState} from "react";
import {Box} from "@/components/ui/box";
import {Heading} from "@/components/ui/heading";
import {VStack} from "@/components/ui/vstack";
import {Text} from "@/components/ui/text";
import {Input, InputField} from "@/components/ui/input";
import {
	Button,
	ButtonIcon,
	ButtonSpinner,
	ButtonText,
} from "@/components/ui/button";
import {Center} from "@/components/ui/center";
import {ArrowLeftIcon} from "lucide-react-native";
import {ErrorModal} from "@/components/ErrorModal";

export default function Page() {
	const {signUpWithClerk, isLoaded} = useClerkSignUp();
	const router = useRouter();

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState<ErrorResponse>({
		message: "",
		details: "",
	});
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onSignUpPress = useCallback(async () => {
		if (!isLoaded) return;

		setIsLoading(true);
		try {
			await signUpWithClerk(emailAddress, password);
			// Navigate to the next screen or home screen after successful sign-up
			router.replace("/");
		} catch (err: any) {
			console.log("Unexpected error during sign-up:", err);
			setErrorMessage(err);
		} finally {
			setIsLoading(false);
		}
	}, [emailAddress, password, isLoaded, signUpWithClerk, router]);

	useEffect(() => {
		if (errorMessage.details) {
			setShowErrorModal(true);
		}
	}, [errorMessage]);

	return (
		<Box className="flex-1 justify-center p-5 ">
			<Box className="flex flex-row">
				<Button
					onPress={() => router.back()}
					variant="link"
					size="sm"
					className="p-0"
				>
					<ButtonIcon as={ArrowLeftIcon} />
					{/* ArrowLeftIcon is imported from 'lucide-react-native' */}
					<ButtonText>Back to home</ButtonText>
				</Button>
			</Box>
			<VStack className="pb-4" space="xs">
				<Heading className="leading-[30px]">Create an account</Heading>
				<Text className="text-sm">Sign up to get started with our app.</Text>
			</VStack>
			<VStack space="xl" className="py-2">
				<Input>
					<InputField
						autoCapitalize="none"
						value={emailAddress}
						placeholder="Email..."
						onChangeText={(email) => setEmailAddress(email)}
						className="py-2"
					/>
				</Input>
				<Input>
					<InputField
						value={password}
						placeholder="Password..."
						secureTextEntry={true}
						onChangeText={(pwd) => setPassword(pwd)}
						className="py-2"
					/>
				</Input>
			</VStack>
			<VStack space="lg" className="pt-4">
				<Button disabled={isLoading} size="sm" onPress={onSignUpPress}>
					{isLoading ? <ButtonSpinner /> : <ButtonText>Sign Up</ButtonText>}
				</Button>
				<Box className="flex flex-row">
					<Button
						onPress={() => router.replace("/sign-in")}
						variant="link"
						size="sm"
						className="p-0"
					>
						<ButtonText>Already have an account?</ButtonText>
					</Button>
				</Box>
			</VStack>
			<ErrorModal
				isOpen={showErrorModal}
				onClose={() => {
					setShowErrorModal(false);
					setErrorMessage({
						message: "",
						details: "",
					});
				}}
				title={"Sign Up Error"}
				errorMessage={errorMessage?.message}
				detailsMessage={errorMessage?.details}
			/>
		</Box>
	);
}
