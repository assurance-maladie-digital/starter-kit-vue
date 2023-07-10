import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import MyTest from '../MyTest.vue';

describe('MyTest', async () => {
	it('is a Vue instance', () => {
		const wrapper = mount(MyTest);
		expect(wrapper).toMatchSnapshot();
	});
});
