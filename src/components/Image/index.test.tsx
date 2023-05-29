import React from 'react';
import {create} from 'react-test-renderer';
import Image from './index';

describe('Image component', () => {
	it('should return null when source is not a valid object', () => {
		const {toJSON} = create(<Image source={{}} />);

		expect(toJSON()).toStrictEqual(null);
	});

	it("should return null when source not contain uri'key", () => {
		const {toJSON} = create(<Image source={{width: 50, height: 50}} />);

		expect(toJSON()).toStrictEqual(null);
	});

	it('should render correctly when source is passed', () => {
		const {toJSON} = create(<Image source={{uri: 'http://www.janis.in/logo.jpg'}} />);

		expect(toJSON()).toBeTruthy();
	});
});
