import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import StatusChip from './index';
import Text from '../Text';
import {primary} from '../../theme/palette';

describe('StatusChip component', () => {
	describe('return error because is not a valid children', () => {
		it('undefined children', () => {
			const {toJSON} = create(<StatusChip />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correct', () => {
		it('text is passed', () => {
			const {toJSON} = create(<StatusChip>Partially delivered</StatusChip>);
			expect(toJSON()).toMatchSnapshot();
		});

		it('if a color is passed', () => {
			const {toJSON} = create(<StatusChip color={primary.main}>Delivered</StatusChip>);
			expect(toJSON()).toMatchSnapshot();
		});

		it('a valid component is passed', () => {
			const {toJSON} = create(
				<StatusChip>
					<Text>Custom component</Text>
				</StatusChip>
			);
			expect(toJSON()).toMatchSnapshot();
		});
	});
});
