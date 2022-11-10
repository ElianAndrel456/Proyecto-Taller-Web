import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserState } from '../types/UserType'

export const useUserStore = defineStore('authUser', () => {
	const user = ref<UserState>({
		id: '',
		name: '',
		email: '',
		auth: false,
	})

	const setUser = (userProvider: UserState) => {
		user.value = userProvider
	}

	return {
		user,
		setUser,
	}
})
