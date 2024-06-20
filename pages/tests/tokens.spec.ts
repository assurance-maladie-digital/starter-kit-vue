import Tokens from '../tokens.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest';

describe('home page should render', () => {
	it('should render', async () => {
		const wrapper = await mountSuspended(Tokens);
		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find('h1').text();
		expect(h1Text).toContain('Tokens');
	});

	it('should return true for dark color', async () => {
		const wrapper = await mountSuspended(Tokens);
		expect(Tokens.methods.isDarkColor('#000000')).toBe(true);
	})

	it('should return true for light color', async () => {
		const wrapper = await mountSuspended(Tokens);
		expect(Tokens.methods.isDarkColor('#ffffff')).toBe(false);
	})
});



