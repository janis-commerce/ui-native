import React from 'react';
import {create} from 'react-test-renderer';
import EmptyIllustration from './index';

describe('EmptyIllustration Svg component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<EmptyIllustration width={20} height={20} />);

		expect(toJSON()).toBeTruthy();
	});
});
