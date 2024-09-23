import {Redirect, Stack} from "expo-router";
import {useAuth} from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
	const {isSignedIn} = useAuth();

	if (isSignedIn) {
		return <Redirect href={"/(tabs)/list"} />;
	}

	return (
		<Stack>
			<Stack.Screen name="index" options={{headerShown: false}} />
			<Stack.Screen
				name="sign-in"
				options={{
					presentation: "card",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="sign-up"
				options={{
					presentation: "containedModal",
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
