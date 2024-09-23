import {isClerkAPIResponseError, useSignIn} from "@clerk/clerk-expo";
import {Link, useRouter} from "expo-router";
import {TextInput, View} from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import {Box} from "@/components/ui/box";
import {Heading} from "@/components/ui/heading";
import {VStack} from "@/components/ui/vstack";
import {Text} from "@/components/ui/text";
import {Input, InputField} from "@/components/ui/input";
import {
	Button,
	ButtonText,
	ButtonIcon,
	ButtonSpinner,
} from "@/components/ui/button";

import {useClerkSignIn} from "@/hooks/useClerkSignIn";
import {ErrorModal} from "@/components/ErrorModal";
import {ArrowLeftIcon} from "@/components/ui/icon";

export default function Page() {
	const {loginWithClerk, isLoaded} = useClerkSignIn();
	const router = useRouter();

	const [emailAddress, setEmailAddress] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<ErrorResponse>({
		message: "",
		details: "",
	});
	const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSignInPress = useCallback(async () => {
		if (!isLoaded) return;

		setIsLoading(true);
		try {
			await loginWithClerk(emailAddress, password);
		} catch (err: any) {
			console.log("Unexpected error during sign-in:", err);
			setErrorMessage(err);
		} finally {
			setIsLoading(false);
		}
	}, [emailAddress, password]);

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
				<Heading className="leading-[30px]">Set new password</Heading>
				<Text className="text-sm">
					Almost done. Enter your new password and you are all set.
				</Text>
			</VStack>
			<VStack space="xl" className="py-2">
				<Input>
					<InputField
						autoCapitalize="none"
						value={emailAddress}
						placeholder="Email..."
						onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
						className="py-2"
					/>
				</Input>
				<Input>
					<InputField
						value={password}
						placeholder="Password..."
						secureTextEntry={true}
						onChangeText={(password) => setPassword(password)}
						className="py-2"
					/>
				</Input>
			</VStack>
			<VStack space="lg" className="pt-4">
				<Button disabled={isLoading} size="sm" onPress={onSignInPress}>
					{isLoading ? <ButtonSpinner /> : <ButtonText>Sign In</ButtonText>}
				</Button>
				<Box className="flex flex-row">
					<Button
						onPress={() => router.replace("/sign-up")}
						variant="link"
						size="sm"
						className="p-0"
					>
						{/* ArrowLeftIcon is imported from 'lucide-react-native' */}
						<ButtonText>Don't have an account?</ButtonText>
					</Button>
				</Box>
			</VStack>
			<Box className="flex flex-row">
				<Button
					onPress={() => {
						setEmailAddress("12345678@gmail.com");
						setPassword("12345678");
					}}
					variant="link"
					size="sm"
					className="p-0"
				>
					{/* ArrowLeftIcon is imported from 'lucide-react-native' */}
					<ButtonText>Skip</ButtonText>
				</Button>
			</Box>
			<ErrorModal
				isOpen={showErrorModal}
				onClose={() => {
					setShowErrorModal(false);
					setErrorMessage({
						message: "",
						details: "",
					});
				}}
				title={"Sign In Error"}
				errorMessage={errorMessage?.message}
				detailsMessage={errorMessage?.details}
			/>
		</Box>
	);
}
