import {useSignIn} from "@clerk/clerk-expo";
import {Link, useRouter} from "expo-router";
import {TextInput, View} from "react-native";
import React from "react";
import {Box} from "@/components/ui/box";
import {Heading} from "@/components/ui/heading";
import {VStack} from "@/components/ui/vstack";
import {Text} from "@/components/ui/text";
import {Input, InputField} from "@/components/ui/input";
import {Button, ButtonText, ButtonIcon} from "@/components/ui/button";
import {Center} from "@/components/ui/center";

export default function Page() {
	const {signIn, setActive, isLoaded} = useSignIn();
	const router = useRouter();

	const [emailAddress, setEmailAddress] = React.useState("");
	const [password, setPassword] = React.useState("");

	const onSignInPress = React.useCallback(async () => {
		if (!isLoaded) {
			return;
		}

		try {
			const signInAttempt = await signIn.create({
				identifier: emailAddress,
				password,
			});

			if (signInAttempt.status === "complete") {
				await setActive({session: signInAttempt.createdSessionId});
				router.replace("/");
			} else {
				// See https://clerk.com/docs/custom-flows/error-handling
				// for more info on error handling
				console.error(JSON.stringify(signInAttempt, null, 2));
			}
		} catch (err: any) {
			console.error(JSON.stringify(err, null, 2));
		}
	}, [isLoaded, emailAddress, password]);

	return (
		<Center>
			<Box className="p-5 max-w-96 border border-background-300 rounded-lg">
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
					<Button size="sm" onPress={onSignInPress}>
						<ButtonText>Sign In</ButtonText>
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
			</Box>
		</Center>
	);
}
