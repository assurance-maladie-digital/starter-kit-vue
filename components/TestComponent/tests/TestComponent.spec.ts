import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest';
import { vuetify } from "../../../tests/unit/setup";

import TestComponent from '../TestComponent.vue';

describe('TestComponent', () => {
	it('should render', async () => {
		const wrapper = mount(TestComponent, {
			global: {
				plugins: [vuetify],
			},
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
