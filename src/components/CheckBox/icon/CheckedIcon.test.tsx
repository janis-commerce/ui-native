import React from 'react';
import {create} from 'react-test-renderer';
import CheckedIcon from './CheckedIcon';

describe('CheckedIcon component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<CheckedIcon color="red" size={18} />);

		expect(toJSON()).toBeTruthy();
	});
});
