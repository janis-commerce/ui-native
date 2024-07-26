import React from 'react';
import {create} from 'react-test-renderer';
import {View, Text} from 'react-native';
import BaseButton from './';

const validData = {
	borderRadius: 15,
	children: (
		<View>
			<Text>Button</Text>
		</View>
	),
};

describe('BaseButton Component', () => {
	describe('return null when', () => {
		it('when hasnt minimum props needed', () => {
			const {toJSON} = create(<BaseButton />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correctly when has minimum props needed', () => {
		it('when hasnt minimum props needed', () => {
			const {root} = create(
				<BaseButton borderRadius={validData.borderRadius}>{validData.children}</BaseButton>
			);
			expect(root).toBeTruthy();
		});
	});
});
