import React from 'react';
import {create} from 'react-test-renderer';
import {Text, View} from 'react-native';
import {palette} from '../../theme/palette';
import BaseButton from './';

const validData = {
	title: 'test title',
	icon: 'plus_circle',
	iconRight: true,
	disabled: true,
	borderRadius: 15,
	pressedColor: palette.success.main,
	style: {backgroundColor: palette.black.main},
	iconStyle: {backgroundColor: palette.black.main},
	textStyle: {color: palette.black.main},
};

describe('BaseButton Component', () => {
	describe('return null when', () => {
		it('when hasnt minimum props needed', () => {
			const {toJSON} = create(<BaseButton />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render correctly when has minimum props needed, example', () => {
		it('title', () => {
			const {toJSON} = create(<BaseButton title={validData.title} />);
			expect(toJSON()).toBeTruthy();
		});

		it('icon', () => {
			const {toJSON} = create(<BaseButton icon={validData.icon} />);
			expect(toJSON()).toBeTruthy();
		});

		it('children', () => {
			const {toJSON} = create(
				<BaseButton>
					<View>
						<Text>Valid Children</Text>
					</View>
				</BaseButton>
			);
			expect(toJSON()).toBeTruthy();
		});
	});

	describe('Icon', () => {
		it('is renders right icon when iconRight prop is true', () => {
			const {toJSON} = create(
				<BaseButton title={validData.title} icon={validData.icon} iconRight={validData.iconRight} />
			);
			expect(toJSON()).toBeTruthy();
		});

		it('is renders left icon when iconRight prop is not passed', () => {
			const {toJSON} = create(<BaseButton title={validData.title} icon={validData.icon} />);
			expect(toJSON()).toBeTruthy();
		});
	});

	describe('pressedColor', () => {
		it('it changes when pressedColor props is an string color format', () => {
			const {toJSON} = create(
				<BaseButton title={validData.title} pressedColor={validData.pressedColor} />
			);
			expect(toJSON()).toBeTruthy();
		});
	});

	describe('is disabled', () => {
		it('when disabled props is true', () => {
			const {toJSON} = create(<BaseButton title={validData.title} disabled={validData.disabled} />);
			expect(toJSON()).toBeTruthy();
		});
	});
});
