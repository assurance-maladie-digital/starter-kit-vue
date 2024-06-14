// @vitest-environment nuxt
import TestInva from '../test-inva.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect } from 'vitest';
import { vuetify } from '@/tests/unit/setup';

describe('test inva page should render', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(TestInva,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find('h1').text();
		expect(h1Text).toContain('Accueil');
	});
});
