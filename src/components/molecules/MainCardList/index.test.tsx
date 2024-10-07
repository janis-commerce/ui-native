import React from 'react';
import {create} from 'react-test-renderer';
import MainCardList from './';
import Text from 'atoms/Text';
import {View} from 'react-native';

describe('MainCardList component', () => {
	describe('does not render', () => {
		it('as it does not have a displayId', () => {
			const {toJSON} = create(<MainCardList displayId={null as unknown as string} />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('renders properly', () => {
		it('as it has a displayId', () => {
			const {root} = create(<MainCardList displayId="123456" />);
			expect(root).toBeTruthy();
		});

		it('with children', () => {
			const {root} = create(
				<MainCardList displayId="123456">
					<Text>Test</Text>
				</MainCardList>
			);
			expect(root).toBeTruthy();
		});

		it('with blocks', () => {
			const blocks = [
				{
					component: (
						<View>
							<Text>Test 1</Text>
						</View>
					),
				},
				{
					component: (
						<View>
							<Text>Test 2</Text>
						</View>
					),
					hasSeparator: false,
				},
			];

			const {root} = create(<MainCardList displayId="123456" blocks={blocks} />);
			expect(root).toBeTruthy();
		});

		it('being selected', () => {
			const {root} = create(<MainCardList displayId="123456" isSelected />);
			expect(root).toBeTruthy();
		});
	});
});
