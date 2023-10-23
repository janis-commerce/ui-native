import React from 'react';
import Icon from './index';
import {create} from 'react-test-renderer';

describe('Icon component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<Icon name="iso_janis" />);

		expect(toJSON()).toBeTruthy();
	});

	it('return null when name no exist', () => {
		const {toJSON} = create(<Icon name={''} />);

		expect(toJSON()).toBeNull();
	});
});
