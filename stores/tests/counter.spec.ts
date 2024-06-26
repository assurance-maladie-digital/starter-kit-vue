import { createPinia } from 'pinia';
import { useCounterStore } from '../counter';
import { describe, it, expect, beforeEach } from 'vitest';

describe('Counter Store', () => {
	let store: any;

	beforeEach(() => {
		const pinia = createPinia();
		store = useMainStore(pinia);
	});

	it('should have an initial state of empty object', () => {
		expect(store.$state).toEqual({});
	});
});
