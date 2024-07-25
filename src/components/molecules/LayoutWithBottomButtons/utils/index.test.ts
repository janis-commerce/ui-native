import {buttonWrapperVariantStyles, parseButtonsStyles} from './index';
import {moderateScale, scaledForDevice} from '../../../../scale';

const layoutButtons = [
	{
		icon: 'keyboard',
		pressedColor: '#FFFFFF',
		onPress: jest.fn(),
	},
	{
		icon: 'camera',
		color: '#fgfgfg',
		onPress: jest.fn(),
	},
	{
		icon: 'check_light',
		color: 'success',
		disabled: true,
		onPress: jest.fn(),
	},
];

describe('LayoutWithBottomButtons utils', () => {
	describe('buttonWrapperVariantStyles func', () => {
		it.each(['', 'squared', 5, [], {}, jest.fn(), undefined, null, NaN])(
			'return an empty object when variant is not rounded',
			(invalidValue) => {
				expect(buttonWrapperVariantStyles(invalidValue as any)).toEqual({});
			}
		);

		it('return the right styles', () => {
			expect(buttonWrapperVariantStyles('rounded')).toEqual({
				padding: scaledForDevice(16, moderateScale),
			});
		});
	});

	describe('parseButtonsStyles func', () => {
		it.each(['', 'squared', 5, [], {}, jest.fn(), undefined, null, NaN])(
			'return an empty array',
			(invalidValue) => {
				expect(parseButtonsStyles(invalidValue as any, '' as any)).toEqual([]);
			}
		);

		describe('squared variant', () => {
			it('should add the flex prop', () => {
				const response = parseButtonsStyles(layoutButtons, 'squared');
				expect(response[0].flex).toEqual(0.3333333333333333);
			});

			it('when passing an invalid variant, it returns the buttons to the default settings', () => {
				const response = parseButtonsStyles(layoutButtons, 'invalid variant' as any);
				expect(response[0].flex).toEqual(0.3333333333333333);
			});
		});

		describe('rounded variant', () => {
			it('3 buttons - should adjust the size correctly', () => {
				const response = parseButtonsStyles(layoutButtons, 'rounded');
				expect(response[0].style?.width).toEqual('100%');
				expect(response[1].style?.width).toEqual('49%');
				expect(response[2].style?.width).toEqual('49%');
			});

			it('3 buttons - should respect the defined sizes, except the first one that will be 100%', () => {
				const buttons = layoutButtons.map((btn) => ({...btn, width: '30%'}));
				const response = parseButtonsStyles(buttons, 'rounded');
				expect(response[0].style?.width).toEqual('100%');
				expect(response[1].style?.width).toEqual('30%');
				expect(response[2].style?.width).toEqual('30%');
			});

			it('2 buttons - should adjust the size correctly', () => {
				const buttons = layoutButtons.slice(0, 2);
				const response = parseButtonsStyles(buttons, 'rounded');
				expect(response[0].style?.width).toEqual('49%');
				expect(response[1].style?.width).toEqual('49%');
			});

			it('2 buttons - should respect the defined sizes', () => {
				const buttons = layoutButtons.map((btn) => ({...btn, width: 30})).slice(0, 2);
				const response = parseButtonsStyles(buttons, 'rounded');
				expect(response[0].style?.width).toEqual(30);
				expect(response[1].style?.width).toEqual(30);
			});

			it('2 buttons - the first button is full width', () => {
				const buttons = layoutButtons.map((btn) => ({...btn, width: '100%'})).slice(0, 2);
				const response = parseButtonsStyles(buttons, 'rounded');
				expect(response[0].style?.width).toEqual('100%');
				expect(response[1].style?.width).toEqual('100%');
			});

			it('2 buttons - if an invalid width is passed, the default is applied', () => {
				const buttons = layoutButtons.map((btn) => ({...btn, width: '30'})).slice(0, 2);
				const response = parseButtonsStyles(buttons, 'rounded');
				expect(response[0].style?.width).toEqual('49%');
				expect(response[1].style?.width).toEqual('49%');
			});

			it('1 button - should adjust the size correctly', () => {
				const buttons = [layoutButtons[0]];
				const response = parseButtonsStyles(buttons, 'rounded');
				expect(response[0].style?.width).toEqual('100%');
			});
		});
	});
});
