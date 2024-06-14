// @vitest-environment nuxt
import Tokens from '../tokens.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect } from 'vitest';
import { vuetify } from '@/tests/unit/setup';

describe('home page should render', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(Tokens,{
			global: {
				plugins: [
					vuetify,
				],
			},
		});
		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find('h1').text();
		expect(h1Text).toContain('Tokens');
	});
});
