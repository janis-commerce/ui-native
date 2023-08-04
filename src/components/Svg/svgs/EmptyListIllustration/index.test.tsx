import React from 'react';
import {create} from 'react-test-renderer';
import EmptyListIllustration from './index';

describe('EmptyListIllustration Svg component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<EmptyListIllustration width={20} height={20} />);

		expect(toJSON()).toBeTruthy();
	});
});
