import {SignedIn, SignedOut, useUser} from "@clerk/clerk-expo";
import {Link, useRouter} from "expo-router";
import {Text, View} from "react-native";
import {
	Button,
	ButtonText,
	ButtonSpinner,
	ButtonIcon,
	ButtonGroup,
} from "@/components/ui/button";

export default function Page() {
	const {user} = useUser();
	const router = useRouter();
	return (
		<View style={{flex: 1, padding: 10, gap: 10, justifyContent: "center"}}>
			<SignedIn>
				<Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
			</SignedIn>
			<SignedOut>
				<Button onPress={() => router.navigate("/(auth)/sign-in")}>
					<ButtonText>Sign In</ButtonText>
				</Button>
				<Button onPress={() => router.navigate("/(auth)/sign-up")}>
					<ButtonText>Sign Up</ButtonText>
				</Button>
				<Button onPress={() => router.navigate("/(tabs)/list")}>
					<ButtonText>Todos</ButtonText>
				</Button>
			</SignedOut>
		</View>
	);
}
