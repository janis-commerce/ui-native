import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import Svg from './';

describe('Svg component', () => {
	describe('return null because name is undefined', () => {
		it('undefined name', () => {
			const {toJSON} = create(<Svg />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correct', () => {
		it('pased a valid name', () => {
			const {toJSON} = create(<Svg name="janis-commerce-logo" />);
			expect(toJSON()).toMatchSnapshot();
		});

		it('pased size', () => {
			const {toJSON} = create(<Svg name="janis-commerce-logo" size={120} />);
			expect(toJSON()).toMatchSnapshot();
		});
	});
});
