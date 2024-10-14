import React from 'react';
import {create} from 'react-test-renderer';
import BaseCardList from './';
import Text from 'atoms/Text';

describe('BaseCardList component', () => {
	describe('does not render', () => {
		it('as it does not have children', () => {
			const {toJSON} = create(<BaseCardList children={null} />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('renders properly', () => {
		it('as it has children', () => {
			const {root} = create(
				<BaseCardList style={{width: 100}}>
					<Text>Test</Text>
				</BaseCardList>
			);
			expect(root).toBeTruthy();
		});

		it('being selected', () => {
			const {root} = create(
				<BaseCardList isSelected>
					<Text>Test</Text>
				</BaseCardList>
			);
			expect(root).toBeTruthy();
		});
	});
});
