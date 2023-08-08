import React from 'react';
import {create} from 'react-test-renderer';
import LoginIllustration from './index';

describe('LoginIllustration component', () => {
	it('LoginIllustration Svg correctly', () => {
		const {toJSON} = create(<LoginIllustration width={20} height={20} />);

		expect(toJSON()).toBeTruthy();
	});
});
