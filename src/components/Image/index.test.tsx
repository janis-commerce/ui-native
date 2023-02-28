import React from 'react';
import {create} from 'react-test-renderer';
import Image from './index';

describe('Image component', () => {
	it('should return null when source is not passed', () => {
		const {toJSON} = create(<Image source={{}} />);

		expect(toJSON()).toStrictEqual(null);
	});

	it('should render correctly when source is passed', () => {
		const {toJSON} = create(<Image source={{uri: 'http://www.janis.in/logo.jpg'}} />);

		expect(toJSON()).toBeTruthy();
	});
});
