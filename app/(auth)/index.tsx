import {SignedIn, SignedOut, useUser} from "@clerk/clerk-expo";
import {Link, Redirect, useRouter} from "expo-router";
import {Text, View} from "react-native";
import {
	Button,
	ButtonText,
	ButtonSpinner,
	ButtonIcon,
	ButtonGroup,
} from "@/components/ui/button";

export default function Page() {
	const router = useRouter();

	return (
		<View style={{flex: 1, padding: 10, gap: 10, justifyContent: "center"}}>
			<Button onPress={() => router.navigate("/(auth)/sign-in")}>
				<ButtonText>Sign In</ButtonText>
			</Button>
			<Button onPress={() => router.navigate("/(auth)/sign-up")}>
				<ButtonText>Sign Up</ButtonText>
			</Button>
		</View>
	);
}
