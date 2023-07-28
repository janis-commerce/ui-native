import React from 'react';
import {create} from 'react-test-renderer';
import JanisLogoColor from './index';

describe('JanisLogoColor Svg component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<JanisLogoColor width={20} height={20} />);

		expect(toJSON()).toBeTruthy();
	});
});
