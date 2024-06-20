// @vitest-environment nuxt
import Home from '../home.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect } from 'vitest';
import { vuetify } from '@/tests/unit/setup';
import Tokens from "~/pages/tokens.vue";

describe('home page should render', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(Home,{
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
