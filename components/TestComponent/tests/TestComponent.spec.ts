// @vitest-environment nuxt
import TestComponent from '../TestComponent.vue';
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest';


describe('TestComponent', () => {
	it('should render', async () => {
		const wrapper = await renderSuspended(TestComponent);
		expect(wrapper.html()).toMatchSnapshot();
	});
});
