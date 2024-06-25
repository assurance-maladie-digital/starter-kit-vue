import { defineStore } from 'pinia';
import { notification } from '@cnamts/synapse-bridge/modules/notification';

export const useMainStore = defineStore({
	id: 'main',
	state: () => ({}),
	actions: {
	},
	getters: {
	},
});

export const useNotificationStore = defineStore({
	id: 'notification',
	state: () => ({
	}),
	actions: {
	},
	getters: {
	},
});
