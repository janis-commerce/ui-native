import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import Svg from './index';

describe('Svg component', () => {
	describe('return null because name is undefined', () => {
		it('undefined name', () => {
			const {toJSON} = create(<Svg />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correct', () => {
		it('pased a valid name', () => {
			const {toJSON} = create(<Svg name="janis-logo-color" />);
			expect(toJSON()).toMatchSnapshot();
		});

		it('pased size', () => {
			const {toJSON} = create(<Svg name="janis-logo-color" size={120} />);
			expect(toJSON()).toMatchSnapshot();
		});
	});
});
