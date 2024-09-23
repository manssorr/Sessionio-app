import React, {useState} from "react";
import {
	AlertDialog,
	AlertDialogBackdrop,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogBody,
	AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import {Box} from "@/components/ui/box";
import {Button, ButtonText} from "@/components/ui/button";
import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";
import {Icon} from "@/components/ui/icon";
import {AlertCircle, Info} from "lucide-react-native";
import {
	Popover,
	PopoverBackdrop,
	PopoverContent,
	PopoverArrow,
	PopoverHeader,
	PopoverCloseButton,
	PopoverBody,
	PopoverFooter,
} from "@/components/ui/popover";
import {Pressable} from "@/components/ui/pressable";
import {Tooltip, TooltipContent, TooltipText} from "@/components/ui/tooltip";
import {Portal} from "@/components/ui/portal";
import {VStack} from "@/components/ui/vstack";
import {HStack} from "@/components/ui/hstack";

interface ErrorModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	errorMessage: string;
	detailsMessage?: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
	isOpen,
	onClose,
	title = "Error",
	errorMessage,
	detailsMessage,
}) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<AlertDialog isOpen={isOpen} onClose={onClose} size="md">
			<AlertDialogBackdrop />
			<AlertDialogContent>
				<AlertDialogHeader>
					<Box className="flex flex-row items-center">
						<Icon as={AlertCircle} className="mr-2 text-red-500" />
						<Heading size="md" className="text-typography-950 font-semibold">
							{title}
						</Heading>
					</Box>
				</AlertDialogHeader>
				<AlertDialogBody className="mt-3 mb-4">
					<Box className="flex flex-row items-center">
						<Text size="sm" className="text-typography-500 flex-1 mr-2">
							{errorMessage}
						</Text>
					</Box>
				</AlertDialogBody>
				{detailsMessage && __DEV__ && (
					<Box className="flex flex-row rounded-md items-center border p-1 my-2 border-typography-200">
						<VStack className="gap-3">
							<HStack className="gap-1 items-center justify-center">
								<Icon as={Info} className="text-typography-500" />
								<HStack className="gap-2 items-center justify-center">
									<Heading size="sm">Details</Heading>
									<Text
										size="sm"
										className="text-typography-100 overflow-hidden bg-slate-900 rounded-md px-1 py-0.5"
									>
										Dev only
									</Text>
								</HStack>
							</HStack>
							<Text size="sm">{detailsMessage}</Text>
						</VStack>
					</Box>
				)}
				<AlertDialogFooter>
					<Button
						onPress={onClose}
						size="sm"
						variant="outline"
						className="mr-2"
					>
						<ButtonText>Cancel</ButtonText>
					</Button>
					<Button onPress={onClose} size="sm" variant="solid">
						<ButtonText>OK</ButtonText>
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
