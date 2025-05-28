import React from 'react';
import {create} from 'react-test-renderer';
import NewJanisLogo from './index';

describe('NewJanisLogo Svg component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<NewJanisLogo width={20} height={20} />);

		expect(toJSON()).toBeTruthy();
	});
});
