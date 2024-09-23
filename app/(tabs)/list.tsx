import React, {useEffect, useState} from "react";
import {View, SafeAreaView, FlatList, Pressable} from "react-native";
import {FIRESTORE_DB} from "../../config/firebase";
import {
	collection,
	onSnapshot,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import {Box} from "@/components/ui/box";
import {HStack} from "@/components/ui/hstack";
import {Text} from "@/components/ui/text";
import {VStack} from "@/components/ui/vstack";
import {Input, InputField, InputIcon, InputSlot} from "@/components/ui/input";
import {Button, ButtonIcon} from "@/components/ui/button";
import {
	AddIcon,
	CheckCircleIcon,
	CircleIcon,
	Icon,
	TrashIcon,
} from "@/components/ui/icon";

export interface Todo {
	done: boolean;
	id: string;
	title: string;
}

const List = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [todo, setTodo] = useState("");

	// useEffect(() => {
	// 	const todoRef = collection(FIRESTORE_DB, "todos");

	// 	const subscriber = onSnapshot(todoRef, {
	// 		next: (snapshot) => {
	// 			const todos: Todo[] = [];
	// 			snapshot.docs.forEach((doc) => {
	// 				todos.push({
	// 					id: doc.id,
	// 					...doc.data(),
	// 				} as Todo);
	// 			});

	// 			setTodos(todos);
	// 		},
	// 	});

	// 	return () => subscriber();
	// }, []);

	const addTodo = async () => {
		try {
			await addDoc(collection(FIRESTORE_DB, "todos"), {
				title: todo,
				done: false,
			});
			setTodo("");
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	const renderTodo = ({item}: {item: Todo}) => {
		const ref = doc(FIRESTORE_DB, `todos/${item.id}`);

		const toggleDone = async () => {
			updateDoc(ref, {done: !item.done});
		};

		const deleteItem = async () => {
			deleteDoc(ref);
		};

		return (
			<Box className="bg-red-400 p-3 mb-2 rounded-sm">
				<HStack className="space-x-2 items-center">
					<Pressable onPress={toggleDone} className="flex-1">
						<HStack className="bg-red-400 space-x-2 items-center">
							<Icon
								as={item.done ? CheckCircleIcon : CircleIcon}
								size="md"
								className={item.done ? "text-green-500" : "text-black"}
							/>
							<Text
								className={` ${item.done ? "line-through text-gray-400" : "text-black"}`}
							>
								{item.title}
							</Text>
						</HStack>
					</Pressable>
					<Pressable onPress={deleteItem}>
						<Icon as={TrashIcon} size="sm" className="text-red-500" />
					</Pressable>
				</HStack>
			</Box>
		);
	};

	return (
		<SafeAreaView className="flex-1  bg-gray-100">
			<VStack className="space-y-4 p-4">
				<Input variant="outline" size="md" className="px-2">
					<InputField
						placeholder="Add new todo"
						value={todo}
						onChangeText={setTodo}
					/>
					<InputSlot onPress={addTodo} disabled={todo === ""}>
						<Button size="sm">
							<ButtonIcon as={AddIcon} />
						</Button>
					</InputSlot>
				</Input>

				{/* {todos.length > 0 && (
					<FlatList
						data={todos}
						renderItem={renderTodo}
						keyExtractor={(todo) => todo.id}
					/>
				)} */}
			</VStack>
		</SafeAreaView>
	);
};

export default List;
