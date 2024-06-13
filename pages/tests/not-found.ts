// @vitest-environment nuxt
import NotFound from '../not-found.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest';
import { vuetify } from '@/tests/unit/setup';

describe('home page should render', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(NotFound,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
