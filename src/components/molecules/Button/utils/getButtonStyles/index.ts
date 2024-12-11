import {moderateScale, scaledForDevice} from 'scale';
import palette from 'theme/palette';
import {colorConfig, styleConfig} from './utils/styleConfigs';
import {validTypes, validVariants, validIconPositions, verticalHeights} from './utils/constants';
import {defaultIconPosition, defaultType, defaultVariant} from './utils/defaultValues';

import type {ContainerStyle, DirectionStyle, Params, ReturnStyles, TextStyle} from '../../types';
import parseColor from './utils/parseColor';

const containerStyle = ({
	isDisabled,
	isLoading,
	color,
	variant,
	type,
	iconPosition,
}: ContainerStyle) => {
	const selectedColor = parseColor[color] || palette.primary.blue;
	const {main, disabled} = colorConfig(selectedColor);

	const {container} = styleConfig;

	const validType = validTypes.includes(type) ? type : defaultType;
	const validVariant = validVariants.includes(variant) ? variant : defaultVariant;

	const mainBgColor = main.background[validVariant];
	const mainBorderColor = main.border[validVariant];

	const disabledBgColor = disabled.background[validVariant];
	const disabledBorderColor = disabled.border[validType][validVariant];

	const containerHeight = container.height[validType];

	// validation of height
	const hasVerticalHeight = verticalHeights.includes(iconPosition);

	return {
		borderWidth: 1,
		borderColor: isDisabled || isLoading ? disabledBorderColor : mainBorderColor,
		backgroundColor: isDisabled || isLoading ? disabledBgColor : mainBgColor,
		paddingHorizontal: scaledForDevice(type === 'main' ? 12 : 8, moderateScale),
		...(hasVerticalHeight && {paddingVertical: scaledForDevice(10, moderateScale)}),
		...(!hasVerticalHeight && {
			height: variant !== 'text' ? containerHeight : scaledForDevice(35, moderateScale),
		}),
	};
};

const pressedStyle = ({variant, color}: ContainerStyle) => {
	const selectedColor = parseColor[color] || palette.primary.blue;
	const {pressed} = colorConfig(selectedColor);

	const validVariant = validVariants.includes(variant) ? variant : defaultVariant;

	return {
		borderColor: pressed.border[validVariant],
		backgroundColor: pressed.background[validVariant],
	};
};

const directionWrapperStyle = ({iconPosition}: DirectionStyle) => {
	const {directionWrapper} = styleConfig;

	const flexCenter = directionWrapper.center;

	const validIconPosition = validIconPositions.includes(iconPosition)
		? iconPosition
		: defaultIconPosition;
	const flexDirection = directionWrapper.flexDirection[validIconPosition];

	return {
		...flexCenter,
		flexDirection,
	};
};

const baseTextStyle = ({isDisabled, type, variant, color, isLoading}: TextStyle) => {
	const selectedColor = parseColor[color] || palette.primary.blue;
	const {main, disabled} = colorConfig(selectedColor);

	const {text: textStyle} = styleConfig;

	const validType = validTypes.includes(type) ? type : defaultType;
	const validVariant = validVariants.includes(variant) ? variant : defaultVariant;

	const mainTextColor = main.text[validType][validVariant];
	const disabledTextColor = disabled.text[validType][validVariant];

	return {
		...textStyle,
		color: isDisabled || isLoading ? disabledTextColor : mainTextColor,
	};
};

const textStyle = (params: TextStyle) => ({
	...baseTextStyle(params),
	fontSize: scaledForDevice(14, moderateScale),
});

const iconStyle = (params: TextStyle) => {
	const {hasIconAndText, iconPosition} = params;
	const {icon} = styleConfig;

	return {
		...baseTextStyle(params),
		...((!!hasIconAndText && icon.margin[iconPosition]) || {}),
	};
};

const getButtonStyles = (params: Params): ReturnStyles => ({
	container: containerStyle(params),
	pressed: pressedStyle(params),
	direction: directionWrapperStyle(params),
	text: textStyle(params),
	icon: iconStyle(params),
	loadingColor: palette.primary.blue.normal,
});

export default getButtonStyles;
