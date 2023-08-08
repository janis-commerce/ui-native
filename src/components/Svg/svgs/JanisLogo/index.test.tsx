import React from 'react';
import {create} from 'react-test-renderer';
import JanisLogo from './index';

describe('JanisLogo Svg component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<JanisLogo width={20} height={20} />);

		expect(toJSON()).toBeTruthy();
	});
});
