import { createPinia } from 'pinia';
import { useMainStore, useNotificationStore } from '@/store';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Main Store', () => {
	let store: any;

	beforeEach(() => {
		const pinia = createPinia();
		store = useMainStore(pinia);
	});

	it('should have an initial state of empty object', () => {
		expect(store.$state).toEqual({});
	});
});

describe('Notification Store', () => {
	let store :any;

	beforeEach(() => {
		const pinia = createPinia();
		store = useNotificationStore(pinia);
	});

	it('should have an initial state of empty object', () => {
		expect(store.$state).toEqual({});
	});

});
