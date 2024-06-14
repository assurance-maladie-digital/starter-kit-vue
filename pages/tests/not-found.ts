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

		const h2Text = wrapper.find('h2').text();
		expect(h2Text).toContain('Page non trouvée');
	});
});
