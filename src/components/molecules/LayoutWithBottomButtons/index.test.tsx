import {View, Text} from 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {create} from 'react-test-renderer';
import Button from 'molecules/Button';
import LayoutWithBottomButtons from './index';
import * as utils from './utils';
import {keyColor} from 'molecules/Button';

describe('LayoutWithBottomButtons Layout', () => {
	const parseButtonsStyles = jest.spyOn(utils, 'parseButtonsStyles');
	describe('return errors', () => {
		it('return null when children is undefined', () => {
			const LayoutWithBottomButtonsComponent = render(
				<LayoutWithBottomButtons buttons={[{}]}>{null as any}</LayoutWithBottomButtons>
			).toJSON();
			expect(LayoutWithBottomButtonsComponent).toBeNull();
		});

		it.each(['test', 5, true, {}, [], null, undefined, NaN])(
			'return null when an invalid buttons prop is passed',
			(invalidButtons) => {
				const testText = 'Some Content';
				const {queryByText} = render(
					<LayoutWithBottomButtons buttons={invalidButtons as any}>
						<View>
							<Text>{testText}</Text>
						</View>
					</LayoutWithBottomButtons>
				);

				expect(queryByText(testText)).toBeNull();
			}
		);

		it('parseButtonsStyles return []', () => {
			parseButtonsStyles.mockReturnValueOnce([]);
			const LayoutWithBottomButtonsComponent = render(
				<LayoutWithBottomButtons buttons={[{}, {}]}>
					<View>
						<Text>testText</Text>
					</View>
				</LayoutWithBottomButtons>
			).toJSON();
			expect(LayoutWithBottomButtonsComponent).toBeNull();
		});
	});

	describe('renders correctly', () => {
		it('render childrens correctly', () => {
			const testText = 'Some Content';
			const testButton = [
				{
					icon: 'home',
					color: 'success' as keyColor,
					onPressHandler: jest.fn(),
				},
			];

			const {getByText} = render(
				<LayoutWithBottomButtons buttons={testButton}>
					<View>
						<Text>{testText}</Text>
					</View>
				</LayoutWithBottomButtons>
			);
			const {children} = getByText(testText).props;

			expect(children).toBe(testText);
		});

		it('render one button correctly', () => {
			const testText = 'Some Content';
			const testColor = 'success' as keyColor;
			const testButton = [
				{
					icon: 'home',
					color: testColor,
					onPressHandler: jest.fn(),
				},
			];

			const LayoutInstance = create(
				<LayoutWithBottomButtons buttons={testButton}>
					<View>
						<Text>{testText}</Text>
					</View>
				</LayoutWithBottomButtons>
			).root;

			const Buttons = LayoutInstance.findAllByType(Button);
			const {color} = Buttons[0].props;

			expect(Buttons.length).toBe(1);
			expect(color).toBe(testColor);
		});

		it('render two buttons correctly', () => {
			const testText = 'Some Content';
			const testColor1 = 'success' as keyColor;
			const testColor2 = 'warning' as keyColor;
			const testButtons = [
				{
					icon: 'home',
					color: testColor1,
					onPressHandler: jest.fn(),
				},
				{
					icon: 'camera',
					color: testColor2,
					onPressHandler: jest.fn(),
				},
			];

			const LayoutInstance = create(
				<LayoutWithBottomButtons buttons={testButtons}>
					<View>
						<Text>{testText}</Text>
					</View>
				</LayoutWithBottomButtons>
			).root;

			const Buttons = LayoutInstance.findAllByType(Button);
			const {color: firstButtonColor} = Buttons[0].props;
			const {color: secondButtonColor} = Buttons[1].props;

			expect(Buttons.length).toBe(2);
			expect(firstButtonColor).toBe(testColor1);
			expect(secondButtonColor).toBe(testColor2);
		});

		it('render two buttons with only icons correctly - variant roundedOnTop', () => {
			const testText = 'Some Content';
			const testColor1 = 'success' as keyColor;
			const testColor2 = 'warning' as keyColor;
			const testButtons = [
				{
					icon: 'home',
					color: testColor1,
					onPressHandler: jest.fn(),
					width: 20,
				},
				{
					icon: 'camera',
					color: testColor2,
					onPressHandler: jest.fn(),
				},
			];

			const LayoutInstance = create(
				<LayoutWithBottomButtons variant="roundedOnTop" buttons={testButtons}>
					<View>
						<Text>{testText}</Text>
					</View>
				</LayoutWithBottomButtons>
			).root;

			const Buttons = LayoutInstance.findAllByType(Button);
			const {color: firstButtonColor} = Buttons[0].props;
			const {color: secondButtonColor} = Buttons[1].props;

			expect(Buttons.length).toBe(2);
			expect(firstButtonColor).toBe(testColor1);
			expect(secondButtonColor).toBe(testColor2);
		});

		it('render two buttons correctly - variant roundedOnTop', () => {
			const testText = 'Some Content';
			const testColor1 = 'success' as keyColor;
			const testColor2 = 'warning' as keyColor;
			const testButtons = [
				{
					icon: 'home',
					value: 'Button',
					color: testColor1,
					onPressHandler: jest.fn(),
					width: 20,
				},
				{
					icon: 'camera',
					value: 'Button',
					color: testColor2,
					onPressHandler: jest.fn(),
				},
			];

			const LayoutInstance = create(
				<LayoutWithBottomButtons variant="roundedOnTop" buttons={testButtons}>
					<View>
						<Text>{testText}</Text>
					</View>
				</LayoutWithBottomButtons>
			).root;

			const Buttons = LayoutInstance.findAllByType(Button);
			const {color: firstButtonColor} = Buttons[0].props;
			const {color: secondButtonColor} = Buttons[1].props;

			expect(Buttons.length).toBe(2);
			expect(firstButtonColor).toBe(testColor1);
			expect(secondButtonColor).toBe(testColor2);
		});

		it('render two icon buttons correctly - variant rounded', () => {
			const testText = 'Some Content';
			const testColor1 = 'success' as keyColor;
			const testColor2 = 'warning' as keyColor;
			const testButtons = [
				{
					icon: 'home',
					color: testColor1,
					onPressHandler: jest.fn(),
				},
				{
					icon: 'camera',
					color: testColor2,
					onPressHandler: jest.fn(),
				},
			];

			const LayoutInstance = create(
				<LayoutWithBottomButtons buttons={testButtons} variant="rounded">
					<View>
						<Text>{testText}</Text>
					</View>
				</LayoutWithBottomButtons>
			).root;

			const Buttons = LayoutInstance.findAllByType(Button);
			const {color: firstButtonColor} = Buttons[0].props;
			const {color: secondButtonColor} = Buttons[1].props;

			expect(Buttons.length).toBe(2);
			expect(firstButtonColor).toBe(testColor1);
			expect(secondButtonColor).toBe(testColor2);
		});

		it('render two buttons correctly - variant rounded', () => {
			const testText = 'Some Content';
			const testColor1 = 'success' as keyColor;
			const testColor2 = 'warning' as keyColor;
			const testButtons = [
				{
					icon: 'home',
					value: 'Button',
					color: testColor1,
					onPressHandler: jest.fn(),
				},
				{
					icon: 'camera',
					value: 'Button',
					color: testColor2,
					onPressHandler: jest.fn(),
				},
			];

			const LayoutInstance = create(
				<LayoutWithBottomButtons buttons={testButtons} variant="rounded">
					<View>
						<Text>{testText}</Text>
					</View>
				</LayoutWithBottomButtons>
			).root;

			const Buttons = LayoutInstance.findAllByType(Button);
			const {color: firstButtonColor} = Buttons[0].props;
			const {color: secondButtonColor} = Buttons[1].props;

			expect(Buttons.length).toBe(2);
			expect(firstButtonColor).toBe(testColor1);
			expect(secondButtonColor).toBe(testColor2);
		});

		it('render three buttons correctly - variant rounded', () => {
			const testText = 'Some Content';
			const testColor1 = 'success' as keyColor;
			const testColor2 = 'warning' as keyColor;
			const testColor3 = 'error' as keyColor;
			const testButtons = [
				{
					icon: 'home',
					color: testColor1,
					onPressHandler: jest.fn(),
				},
				{
					icon: 'camera',
					color: testColor2,
					onPressHandler: jest.fn(),
					width: 25,
				},
				{
					icon: 'box',
					color: testColor3,
					onPressHandler: jest.fn(),
				},
			];

			const LayoutInstance = create(
				<LayoutWithBottomButtons buttons={testButtons} variant="rounded">
					<View>
						<Text>{testText}</Text>
					</View>
				</LayoutWithBottomButtons>
			).root;

			const Buttons = LayoutInstance.findAllByType(Button);
			const {color: firstButtonColor} = Buttons[0].props;
			const {color: secondButtonColor} = Buttons[1].props;
			const {color: thirdButtonColor} = Buttons[2].props;

			expect(Buttons.length).toBe(3);
			expect(firstButtonColor).toBe(testColor1);
			expect(secondButtonColor).toBe(testColor2);
			expect(thirdButtonColor).toBe(testColor3);
		});
	});
});
