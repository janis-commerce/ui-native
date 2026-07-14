import {TextStyle, ViewStyle} from 'react-native';
import {TypographySize} from 'atoms/Typography';
import {horizontalScale, scaledForDevice, verticalScale} from 'scale';
import {colors} from 'theme/colors';
import styleVariants from 'utils/styleVariants';
import {
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

/** Eje `color` de la API → familia de tokens. Figma publica la variante azul; el resto extrapola por familia. */
const colorFamily: Record<ButtonColor, {normal: string; pressed: string}> = {
	primary: colors.primary.blue,
	black: colors.secondary.black,
	success: colors.status.green,
	error: colors.status.red,
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
			outlined: {borderWidth: 1, borderColor: colors.greyScale['03']},
			cleaned: {},
		},
	},
});

const statePalette = (variant: ButtonVariant, color: ButtonColor) => {
	if (variant === 'contained') {
		return {
			background: colorFamily[color].normal,
			pressedBackground: colorFamily[color].pressed,
			disabledBackground: colors.greyScale['03'],
			content: colors.greyScale.white,
			disabledContent: colors.greyScale.white,
		};
	}

	return {
		background: 'transparent',
		pressedBackground: colors.secondary.grey.normal,
		disabledBackground: 'transparent',
		content: colorFamily[color].normal,
		disabledContent: colors.greyScale['03'],
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

export interface ButtonStyleParams {
	type: ButtonType;
	size: ButtonSize;
	variant: ButtonVariant;
	color: ButtonColor;
	shape: ButtonShape;
	iconPosition: ButtonIconPosition;
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
	const palette = statePalette(variant, color);

	return {
		container: {
			...containerVariants({size, variant}),
			...horizontalDimensions(size, type, shape, iconPosition),
			backgroundColor: disabled ? palette.disabledBackground : palette.background,
		},
		pressed: {backgroundColor: palette.pressedBackground},
		contentColor: disabled ? palette.disabledContent : palette.content,
		iconMargin: type === 'iconText' ? iconGapMargin(iconPosition) : undefined,
		borderRadius: buttonHeight[size],
	};
};

export default getButtonStyles;
