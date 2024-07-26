import React from 'react';
import {create} from 'react-test-renderer';
import Notification from './index';

describe('Notification Svg component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<Notification width={20} height={20} />);

		expect(toJSON()).toBeTruthy();
	});
});
