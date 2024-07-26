import React from 'react';
import {create} from 'react-test-renderer';
import LoadingSvg from './index';

describe('LoadingSvg component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<LoadingSvg size={20} />);

		expect(toJSON()).toBeTruthy();
	});
});
