// @vitest-environment nuxt
import TestComponent from '../TestComponent.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest';

describe('TestComponent', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(TestComponent);
		expect(wrapper.html()).toMatchSnapshot();
	});
});
