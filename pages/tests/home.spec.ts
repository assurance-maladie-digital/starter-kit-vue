// @vitest-environment nuxt
import Home from '../home.vue';
import NotFound from '../not-found.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, it, expect, vi } from 'vitest';
import { vuetify } from '@/tests/unit/setup';
import { mount } from '@vue/test-utils';
import {PageContainer, NotFoundPage} from "@cnamts/synapse-bridge";

describe('home page should render', () => {
	const mockRouter = {
		push: vi.fn()
	};

	const mockRoute = {
		path: '/some-path'
	};

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

	it('should call setSupportId method', async () => {
		const wrapper = mount(NotFound,{
			global: {
				plugins: [
					vuetify,
				],
				mocks: {
					PageContainer,
					NotFoundPage,
					$router: mockRouter,
					$route: mockRoute
				},
			},
		});
		wrapper.vm.setSupportId();
		await wrapper.vm.$nextTick();

		expect(mockRouter.push).toHaveBeenCalled();
	});
});
