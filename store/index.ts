import { defineStore } from 'pinia';
import { actions as notificationActions } from '@cnamts/synapse-bridge/modules/notification';

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
		create(payload: any) {
			alert('Create notification')
			notificationActions.addNotification({ commit: () => {}, state: {} }, payload);
		},
		remove() {
			alert('remove notification')
			notificationActions.clearNotification({ commit: () => {} });
		},
	},
	getters: {
	},
});
