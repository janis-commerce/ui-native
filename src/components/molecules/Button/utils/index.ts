import {TextStyle, ViewStyle} from 'react-native';
import {TypographySize} from 'atoms/Typography';
import {horizontalScale, scaledForDevice, verticalScale} from 'scale';
import {palette} from 'theme/palette';
import styleVariants from 'utils/styleVariants';
import {
	ButtonAppearance,
	ButtonColor,
	ButtonIconPosition,
	ButtonShape,
	ButtonSize,
	ButtonType,
	ButtonVariant,
} from '../types';

const vScale = (size: number) => scaledForDevice(size, verticalScale);
const hScale = (size: number) => scaledForDevice(size, horizontalScale);

/** Figma: alto nominal; también es el cornerRadius (pill) — lo escala BaseButton. */
const buttonHeight: Record<ButtonSize, number> = {large: 48, small: 36};

const iconTextGap = 8;

/** paddingH de text-only e icon-only oval (comparten valores en Figma: 24/16). */
const basePaddingH: Record<ButtonSize, number> = {large: 24, small: 16};

// Figma: icn-text es asimétrico — el lado del texto usa el padding base y el del icono, base - 8
// (large 16/24, small 12/16; nodos 2953:49608 y 0:344).
const iconTextPaddingH: Record<ButtonSize, {iconSide: number; textSide: number}> = {
	large: {iconSide: 16, textSide: 24},
	small: {iconSide: 12, textSide: 16},
};

/** Eje `color` de la API → familia de la palette. Figma publica la variante azul; el resto extrapola por familia. */
const colorFamily: Record<ButtonColor, {main: string; dark: string}> = {
	primary: palette.primary,
	black: palette.black,
	success: palette.success,
	error: palette.error,
};

const containerVariants = styleVariants({
	base: {flexDirection: 'row'},
	variants: {
		size: {
			large: {height: vScale(buttonHeight.large)},
			small: {height: vScale(buttonHeight.small)},
		},
		variant: {
			contained: {},
			outlined: {borderWidth: 1, borderColor: palette.grey[200]},
			cleaned: {},
		},
	},
});

const statePalette = (variant: ButtonVariant, color: ButtonColor) => {
	if (variant === 'contained') {
		return {
			background: colorFamily[color].main,
			pressedBackground: colorFamily[color].dark,
			disabledBackground: palette.grey[200],
			content: palette.base.white,
			disabledContent: palette.base.white,
		};
	}

	return {
		background: 'transparent',
		pressedBackground: palette.white.main,
		disabledBackground: 'transparent',
		content: colorFamily[color].main,
		disabledContent: palette.grey[200],
	};
};

const iconTextPadding = (size: ButtonSize, iconPosition: ButtonIconPosition): ViewStyle => {
	const {iconSide, textSide} = iconTextPaddingH[size];

	return iconPosition === 'left'
		? {paddingLeft: hScale(iconSide), paddingRight: hScale(textSide)}
		: {paddingLeft: hScale(textSide), paddingRight: hScale(iconSide)};
};

const horizontalDimensions = (
	size: ButtonSize,
	type: ButtonType,
	shape: ButtonShape,
	iconPosition: ButtonIconPosition
): ViewStyle => {
	// width = height garantiza círculo 1:1 aunque horizontalScale ≠ verticalScale; el icono centra solo.
	if (type === 'icon' && shape === 'circle') {
		return {width: vScale(buttonHeight[size])};
	}

	if (type === 'iconText') {
		return iconTextPadding(size, iconPosition);
	}

	return {paddingHorizontal: hScale(basePaddingH[size])};
};

const iconGapMargin = (iconPosition: ButtonIconPosition): TextStyle =>
	iconPosition === 'left' ? {marginRight: hScale(iconTextGap)} : {marginLeft: hScale(iconTextGap)};

export const labelSize: Record<ButtonSize, TypographySize> = {large: 'large', small: 'medium'};

const validOrDefault = <Value extends string>(
	received: Value | undefined,
	validValues: readonly Value[],
	fallback: Value
): Value => (received !== undefined && validValues.includes(received) ? received : fallback);

/**
 * Las apps en JS pueden pasar valores que el tipo no admite (como los de `DeprecatedButton`):
 * cada uno cae en su default.
 */
export const resolveAppearance = ({
	size,
	variant,
	color,
	shape,
	iconPosition,
}: Partial<ButtonAppearance>): ButtonAppearance => ({
	size: validOrDefault(size, ['large', 'small'], 'large'),
	variant: validOrDefault(variant, ['contained', 'outlined', 'cleaned'], 'contained'),
	color: validOrDefault(color, ['primary', 'black', 'success', 'error'], 'primary'),
	shape: validOrDefault(shape, ['oval', 'circle'], 'oval'),
	iconPosition: validOrDefault(iconPosition, ['left', 'right'], 'left'),
});

export interface ButtonStyleParams extends ButtonAppearance {
	type: ButtonType;
	disabled: boolean;
}

export interface ButtonStyles {
	container: ViewStyle;
	pressed: ViewStyle;
	contentColor: string;
	iconMargin?: TextStyle;
	borderRadius: number;
}

const getButtonStyles = ({
	type,
	size,
	variant,
	color,
	shape,
	iconPosition,
	disabled,
}: ButtonStyleParams): ButtonStyles => {
	const stateColors = statePalette(variant, color);

	return {
		container: {
			...containerVariants({size, variant}),
			...horizontalDimensions(size, type, shape, iconPosition),
			backgroundColor: disabled ? stateColors.disabledBackground : stateColors.background,
		},
		pressed: {backgroundColor: stateColors.pressedBackground},
		contentColor: disabled ? stateColors.disabledContent : stateColors.content,
		iconMargin: type === 'iconText' ? iconGapMargin(iconPosition) : undefined,
		borderRadius: buttonHeight[size],
	};
};

export default getButtonStyles;
