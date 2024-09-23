import {useAuth, useUser} from "@clerk/clerk-expo";
import {Box} from "@/components/ui/box";
import {Button, ButtonSpinner} from "@/components/ui/button";
import {ButtonText} from "@/components/ui/button";
import {Heading} from "@/components/ui/heading";
import {Input, InputField} from "@/components/ui/input";
import {VStack} from "@/components/ui/vstack";
import {Text} from "@/components/ui/text";
import {useState} from "react";
import {useRouter} from "expo-router";

export default function TabTwoScreen() {
	const {signOut} = useAuth();
	const {user} = useUser();
	const router = useRouter();
	const [isSigningOut, setIsSigningOut] = useState(false);

	const handleSignOut = async () => {
		setIsSigningOut(true);
		try {
			await signOut();
			router.replace("/");
		} catch (error) {
			console.error("Error signing out:", error);
		} finally {
			setIsSigningOut(false);
		}
	};

	return (
		<Box className="flex-1 justify-center p-5">
			<VStack className="pb-4" space="xs">
				<Heading className="leading-[30px]">User Profile</Heading>
				<Text className="text-sm">
					View and manage your account information.
				</Text>
			</VStack>
			<VStack space="xl" className="py-2">
				<Input>
					<InputField
						value={user?.fullName || ""}
						placeholder="Name"
						editable={false}
						className="py-2"
					/>
				</Input>
				<Input>
					<InputField
						value={user?.primaryEmailAddress?.emailAddress || ""}
						placeholder="Email"
						editable={false}
						className="py-2"
					/>
				</Input>
			</VStack>
			<VStack space="lg" className="pt-4">
				<Button
					size="sm"
					onPress={() => {
						// Handle account settings navigation
					}}
				>
					<ButtonText>Account Settings</ButtonText>
				</Button>
				<Button
					size="sm"
					onPress={() => {
						// Handle privacy settings navigation
					}}
				>
					<ButtonText>Privacy Settings</ButtonText>
				</Button>
				<Button size="sm" onPress={handleSignOut}>
					{isSigningOut ? <ButtonSpinner /> : <ButtonText>Sign Out</ButtonText>}
				</Button>
			</VStack>
		</Box>
	);
}
