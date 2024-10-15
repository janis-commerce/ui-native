import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import Text from './index';
import Typography from './index';

describe('Typography component', () => {
	describe('return error because children is undefined', () => {
		it('undefined children', () => {
			const {toJSON} = create(<Text />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correct', () => {
		it('match snapshot with default typography', () => {
			const {toJSON} = create(<Typography>Janis Picking</Typography>);
			expect(toJSON()).toMatchSnapshot();
		});
	});
});
