import {PressableProps, ViewStyle, TextStyle} from 'react-native';
import {moderateScale, scaledForDevice} from '../../../scale';
import {palette} from '../../../theme/palette';

interface layoutButtons extends PressableProps {
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
	variant?: string;
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

const getBackgroundColor = (color: string | undefined) => {
	const validColor = typeof color === 'string' ? color : 'primary';
	const validatedColor = palette[validColor]?.main || validColor;
	return validatedColor;
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

export const parseButtonsStyles = (buttons: Array<layoutButtons>, variant: string) => {
	if (!buttons || !(buttons instanceof Array) || !buttons.length) {
		return [];
	}

	const currentVariant = validVariants[variant] || validVariants.default;

	const newButtons = [...buttons].slice(0, 3);

	const areButtonsRounded = currentVariant === validVariants.rounded;

	if (newButtons.length === 3 && areButtonsRounded) {
		const parsedButtons = newButtons.map((btn, idx) => {
			if (idx === 0) {
				return {
					...btn,
					style: {
						...btn?.style,
						width: '100%',
						backgroundColor: getBackgroundColor(btn.color),
						...buttonVariantStyles(currentVariant),
					},
				};
			}

			return {
				...btn,
				style: {
					...btn?.style,
					width: validWidth(btn.width) ?? '49%',
					backgroundColor: getBackgroundColor(btn.color),
					...buttonVariantStyles(currentVariant),
				},
			};
		});

		return parsedButtons;
	}

	if (newButtons.length === 2 && areButtonsRounded) {
		const parsedButtons = newButtons.map((btn, idx) => {
			if (idx === 0 && btn.width === '100%') {
				return {
					...btn,
					style: {
						...btn?.style,
						width: btn.width,
						backgroundColor: getBackgroundColor(btn.color),
						marginBottom: scaledForDevice(10, moderateScale),
						...buttonVariantStyles(currentVariant),
					},
				};
			}
			return {
				...btn,
				style: {
					...btn?.style,
					width: validWidth(btn.width) ?? '49%',
					backgroundColor: getBackgroundColor(btn.color),
					...buttonVariantStyles(currentVariant),
				},
			};
		});

		return parsedButtons;
	}

	if (newButtons.length === 1 && areButtonsRounded) {
		const parsedButtons = newButtons.map((btn) => {
			return {
				...btn,
				style: {
					...btn?.style,
					width: '100%',
					backgroundColor: getBackgroundColor(btn.color),
					...buttonVariantStyles(currentVariant),
				},
			};
		});

		return parsedButtons;
	}

	const flex = 1 / buttons.length;
	const parsedButtons = newButtons.map((btn) => ({
		...btn,
		flex,
		style: {
			...btn?.style,
			backgroundColor: getBackgroundColor(btn.color),
			...buttonVariantStyles(currentVariant),
		},
	}));

	return parsedButtons;
};
