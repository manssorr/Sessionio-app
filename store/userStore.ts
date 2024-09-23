import {create} from "zustand";

interface User {
	// Define user properties here, for example:
	id: string;
	name?: string;
	email: string;
}

interface UserStore {
	user: User | null;
	setUser: (userData: User) => void;
	clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
	user: null, // initially, no user is logged in
	setUser: (userData: User) => set({user: userData}),
	clearUser: () => set({user: null}),
}));
