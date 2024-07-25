import {PressableProps, ViewStyle, TextStyle} from 'react-native';
import {moderateScale, scaledForDevice} from 'scale';
import {palette} from 'theme/palette';

export interface IlayoutButtons extends PressableProps {
	title?: string | null;
	icon?: string;
	iconRight?: boolean;
	disabled?: boolean;
	borderRadius?: number;
	color?: string;
	pressedColor?: string;
	style?: ViewStyle;
	iconStyle?: ViewStyle;
	textStyle?: TextStyle;
	width?: number | string;
	flex?: number;
}

interface IvalidVariants {
	[key: string]: string;
	squared: string;
	rounded: string;
	default: string;
}

export const validVariants: IvalidVariants = {
	squared: 'squared',
	rounded: 'rounded',
	default: 'squared',
};

const buttonVariantStyles = (variant: string | null) => ({
	...(variant === 'rounded' && {
		borderRadius: scaledForDevice(48, moderateScale),
		height: scaledForDevice(48, moderateScale),
	}),
	...(variant === 'squared' && {
		borderRadius: scaledForDevice(1, moderateScale),
		height: scaledForDevice(60, moderateScale),
	}),
});

const getBackgroundColor = ({
	color,
	pressedColor: receivedPressedColor,
	disabled,
}: IlayoutButtons) => {
	const validColor = typeof color === 'string' ? color : 'primary';
	const validPressedColor =
		typeof receivedPressedColor === 'string' ? receivedPressedColor : validColor;
	palette.grey[200];
	const backgroundColor = disabled ? palette.grey[200] : palette[validColor]?.main || validColor;
	const pressedColor = palette[validPressedColor]?.dark || validPressedColor;
	return {backgroundColor, pressedColor};
};

export const buttonWrapperVariantStyles = (variant: string) => ({
	...(variant === 'rounded' && {
		padding: scaledForDevice(16, moderateScale),
	}),
});

const validWidth = (width: string | number | undefined) => {
	if (typeof width === 'number' && !Number.isNaN(width)) {
		return width;
	}
	if (typeof width === 'string' && width.includes('%')) {
		return width;
	}
	return null;
};

export const parseButtonsStyles = (buttons: Array<IlayoutButtons>, variant: string) => {
	if (!buttons || !(buttons instanceof Array) || !buttons.length) {
		return [];
	}

	const currentVariant = validVariants[variant] || validVariants.default;

	const newButtons = [...buttons].slice(0, 3);

	const areButtonsRounded = currentVariant === validVariants.rounded;

	if (newButtons.length === 3 && areButtonsRounded) {
		const parsedButtons = newButtons.map((btn, idx) => {
			const {backgroundColor, pressedColor} = getBackgroundColor(btn);
			if (idx === 0) {
				return {
					...btn,
					pressedColor,
					style: {
						...btn?.style,
						backgroundColor,
						width: '100%',
						...buttonVariantStyles(currentVariant),
					},
				};
			}

			return {
				...btn,
				pressedColor,
				style: {
					...btn?.style,
					backgroundColor,
					width: validWidth(btn.width) ?? '49%',
					...buttonVariantStyles(currentVariant),
				},
			};
		});

		return parsedButtons;
	}

	if (newButtons.length === 2 && areButtonsRounded) {
		const parsedButtons = newButtons.map((btn, idx) => {
			const {backgroundColor, pressedColor} = getBackgroundColor(btn);
			if (idx === 0 && btn.width === '100%') {
				return {
					...btn,
					pressedColor,
					style: {
						...btn?.style,
						backgroundColor,
						width: btn.width,
						marginBottom: scaledForDevice(10, moderateScale),
						...buttonVariantStyles(currentVariant),
					},
				};
			}
			return {
				...btn,
				pressedColor,
				style: {
					...btn?.style,
					backgroundColor,
					width: validWidth(btn.width) ?? '49%',
					...buttonVariantStyles(currentVariant),
				},
			};
		});

		return parsedButtons;
	}

	if (newButtons.length === 1 && areButtonsRounded) {
		const parsedButtons = newButtons.map((btn) => {
			const {backgroundColor, pressedColor} = getBackgroundColor(btn);
			return {
				...btn,
				pressedColor,
				style: {
					...btn?.style,
					backgroundColor,
					width: '100%',
					...buttonVariantStyles(currentVariant),
				},
			};
		});

		return parsedButtons;
	}

	const flex = 1 / buttons.length;
	const parsedButtons = newButtons.map((btn) => {
		const {backgroundColor, pressedColor} = getBackgroundColor(btn);
		return {
			...btn,
			flex,
			pressedColor,
			style: {
				...btn?.style,
				backgroundColor,
				...buttonVariantStyles(currentVariant),
			},
		};
	});

	return parsedButtons;
};
