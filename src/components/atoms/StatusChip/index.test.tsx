import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import StatusChip from './index';
import Typography from 'atoms/Typography';
import palette from 'theme/palette';

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

		it('if a background is passed', () => {
			const {toJSON} = create(
				<StatusChip background={palette.primary.blue.normal}>Delivered</StatusChip>
			);
			expect(toJSON()).toMatchSnapshot();
		});

		it('a valid component is passed', () => {
			const {toJSON} = create(
				<StatusChip>
					<Typography>Custom component</Typography>
				</StatusChip>
			);
			expect(toJSON()).toMatchSnapshot();
		});
	});
});
