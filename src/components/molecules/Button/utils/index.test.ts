import {horizontalScale, scaledForDevice, verticalScale} from 'scale';
import {palette} from 'theme/palette';
import getButtonStyles, {labelSize, resolveAppearance, ButtonStyleParams} from './';
import {ButtonAppearance} from '../types';

const hScale = (size: number) => scaledForDevice(size, horizontalScale);
const vScale = (size: number) => scaledForDevice(size, verticalScale);

const baseParams: ButtonStyleParams = {
	type: 'text',
	size: 'large',
	variant: 'contained',
	color: 'primary',
	shape: 'oval',
	iconPosition: 'left',
	disabled: false,
};

const colorFamilies = {
	primary: palette.primary,
	black: palette.black,
	success: palette.success,
	error: palette.error,
} as const;

const buttonColors = ['primary', 'black', 'success', 'error'] as const;

describe('getButtonStyles', () => {
	describe.each(buttonColors)('palette mapping for color %s', (color) => {
		it('contained: family main background, white content, pressed goes to family dark', () => {
			const {container, pressed, contentColor} = getButtonStyles({...baseParams, color});

			expect(container.backgroundColor).toBe(colorFamilies[color].main);
			expect(container.borderWidth).toBeUndefined();
			expect(pressed).toEqual({backgroundColor: colorFamilies[color].dark});
			expect(contentColor).toBe(palette.base.white);
		});

		it('contained disabled: grey background, white content', () => {
			const {container, contentColor} = getButtonStyles({...baseParams, color, disabled: true});

			expect(container.backgroundColor).toBe(palette.grey[200]);
			expect(contentColor).toBe(palette.base.white);
		});

		it('outlined: transparent background, grey border, family content, grey pill on press', () => {
			const {container, pressed, contentColor} = getButtonStyles({
				...baseParams,
				color,
				variant: 'outlined',
			});

			expect(container.backgroundColor).toBe('transparent');
			expect(container.borderWidth).toBe(1);
			expect(container.borderColor).toBe(palette.grey[200]);
			expect(pressed).toEqual({backgroundColor: palette.white.main});
			expect(contentColor).toBe(colorFamilies[color].main);
		});

		it('outlined disabled: transparent background, grey border and content', () => {
			const {container, contentColor} = getButtonStyles({
				...baseParams,
				color,
				variant: 'outlined',
				disabled: true,
			});

			expect(container.backgroundColor).toBe('transparent');
			expect(container.borderColor).toBe(palette.grey[200]);
			expect(contentColor).toBe(palette.grey[200]);
		});

		it('cleaned: transparent background without border, family content, grey pill on press', () => {
			const {container, pressed, contentColor} = getButtonStyles({
				...baseParams,
				color,
				variant: 'cleaned',
			});

			expect(container.backgroundColor).toBe('transparent');
			expect(container.borderWidth).toBeUndefined();
			expect(pressed).toEqual({backgroundColor: palette.white.main});
			expect(contentColor).toBe(colorFamilies[color].main);
		});

		it('cleaned disabled: transparent background, grey content', () => {
			const {container, contentColor} = getButtonStyles({
				...baseParams,
				color,
				variant: 'cleaned',
				disabled: true,
			});

			expect(container.backgroundColor).toBe('transparent');
			expect(contentColor).toBe(palette.grey[200]);
		});
	});

	describe('dimensions', () => {
		it('text large: height 48, base horizontal padding, pill radius', () => {
			const {container, borderRadius} = getButtonStyles(baseParams);

			expect(container.height).toBe(vScale(48));
			expect(container.paddingHorizontal).toBe(hScale(24));
			expect(container.flexDirection).toBe('row');
			expect(borderRadius).toBe(48);
		});

		it('text small: height 36, base horizontal padding, pill radius', () => {
			const {container, borderRadius} = getButtonStyles({...baseParams, size: 'small'});

			expect(container.height).toBe(vScale(36));
			expect(container.paddingHorizontal).toBe(hScale(16));
			expect(borderRadius).toBe(36);
		});

		it('iconText large: asymmetric padding, icon side 16 and text side 24', () => {
			const {container} = getButtonStyles({...baseParams, type: 'iconText'});

			expect(container.paddingLeft).toBe(hScale(16));
			expect(container.paddingRight).toBe(hScale(24));
			expect(container.paddingHorizontal).toBeUndefined();
		});

		it('iconText large with icon on the right: mirrored padding', () => {
			const {container} = getButtonStyles({
				...baseParams,
				type: 'iconText',
				iconPosition: 'right',
			});

			expect(container.paddingLeft).toBe(hScale(24));
			expect(container.paddingRight).toBe(hScale(16));
		});

		it('iconText small: asymmetric padding, icon side 12 and text side 16', () => {
			const {container} = getButtonStyles({...baseParams, type: 'iconText', size: 'small'});

			expect(container.paddingLeft).toBe(hScale(12));
			expect(container.paddingRight).toBe(hScale(16));
		});

		it('iconText small with icon on the right: mirrored padding', () => {
			const {container} = getButtonStyles({
				...baseParams,
				type: 'iconText',
				size: 'small',
				iconPosition: 'right',
			});

			expect(container.paddingLeft).toBe(hScale(16));
			expect(container.paddingRight).toBe(hScale(12));
		});

		it('icon-only oval: base horizontal padding, no fixed width', () => {
			const large = getButtonStyles({...baseParams, type: 'icon'});
			const small = getButtonStyles({...baseParams, type: 'icon', size: 'small'});

			expect(large.container.paddingHorizontal).toBe(hScale(24));
			expect(large.container.width).toBeUndefined();
			expect(small.container.paddingHorizontal).toBe(hScale(16));
		});

		it('icon-only circle: width equals height, no horizontal padding', () => {
			const large = getButtonStyles({...baseParams, type: 'icon', shape: 'circle'});
			const small = getButtonStyles({...baseParams, type: 'icon', shape: 'circle', size: 'small'});

			expect(large.container.width).toBe(vScale(48));
			expect(large.container.paddingHorizontal).toBeUndefined();
			expect(small.container.width).toBe(vScale(36));
		});

		it('circle shape does not apply outside icon-only buttons', () => {
			const {container} = getButtonStyles({...baseParams, shape: 'circle'});

			expect(container.width).toBeUndefined();
			expect(container.paddingHorizontal).toBe(hScale(24));
		});
	});

	describe('icon gap margin', () => {
		it('iconText with icon on the left: margin on the right of the icon', () => {
			const {iconMargin} = getButtonStyles({...baseParams, type: 'iconText'});

			expect(iconMargin).toEqual({marginRight: hScale(8)});
		});

		it('iconText with icon on the right: margin on the left of the icon', () => {
			const {iconMargin} = getButtonStyles({
				...baseParams,
				type: 'iconText',
				iconPosition: 'right',
			});

			expect(iconMargin).toEqual({marginLeft: hScale(8)});
		});

		it('text and icon-only buttons have no icon margin', () => {
			expect(getButtonStyles(baseParams).iconMargin).toBeUndefined();
			expect(getButtonStyles({...baseParams, type: 'icon'}).iconMargin).toBeUndefined();
		});
	});

	it('labelSize maps button sizes to Typography sizes', () => {
		expect(labelSize).toEqual({large: 'large', small: 'medium'});
	});
});

describe('resolveAppearance', () => {
	const defaultAppearance: ButtonAppearance = {
		size: 'large',
		variant: 'contained',
		color: 'primary',
		shape: 'oval',
		iconPosition: 'left',
	};

	it('omitted props take their default', () => {
		expect(resolveAppearance({})).toEqual(defaultAppearance);
	});

	it('values outside the API fall back to the default, as JS apps can pass them', () => {
		const legacyAppearance = {
			size: 'medium',
			variant: 'text',
			color: 'warning',
			shape: 'square',
			iconPosition: 'top',
		} as unknown as Partial<ButtonAppearance>;

		expect(resolveAppearance(legacyAppearance)).toEqual(defaultAppearance);
	});

	it('keeps the values of the API', () => {
		const appearance: ButtonAppearance = {
			size: 'small',
			variant: 'outlined',
			color: 'error',
			shape: 'circle',
			iconPosition: 'right',
		};

		expect(resolveAppearance(appearance)).toEqual(appearance);
	});
});
