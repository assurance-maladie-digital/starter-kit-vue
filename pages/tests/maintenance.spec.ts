// @vitest-environment nuxt
import Maintenance from '../maintenance.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest';
import { vuetify } from '@/tests/unit/setup';

describe('home page should render', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(Maintenance,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
