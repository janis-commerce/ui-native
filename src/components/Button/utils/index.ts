import { moderateScale, scaledForDevice } from "../../../scale"
import { colorConfig, stlyeConfig } from "../theme/configs";
import { themeColors } from "../theme";
import { defaultColor, defaultIconPosition, defaultType, defaultVariant, verticalHeights } from '../constants';
import type { ContainerStyle, DirectionStyle,  LoadingStyle,  Params, ReturnStyles, TextStyle } from "../types";

const containerStyle = ({isPressed, disabled: isDisabled, isLoading, color, variant, type, iconPosition}: ContainerStyle) => {
	const selectedColor = themeColors[color] || themeColors[defaultColor];
	const {main, pressed, disabled} = colorConfig(selectedColor);
	
	const {container} = stlyeConfig;

	const mainBgColor = main.background[variant] || main.background[defaultVariant];
	const mainBorderColor = main.border[variant] || main.border[defaultVariant];

	const pressedBgColor = pressed.background[variant] || pressed.background[defaultVariant];
	const pressedBorderColor = pressed.border[variant] || pressed.border[defaultVariant];
	
	const disabledBgColor = disabled.background[variant] || disabled.background[defaultVariant];
	const disabledBorderColor = disabled.border[type][variant] || disabled.border[defaultType][defaultVariant];
	
	const containerHeight = container.height[type] || container.height[defaultType];
	const containerShadow = container.shadow;

	// main and pressed button colors
	const mainColor = isPressed ? pressedBgColor : mainBgColor;
	const borderColor = isPressed ? pressedBorderColor : mainBorderColor;

	// validation of height
	const hasVerticalHeight = verticalHeights.includes(iconPosition);

	// validation of shadow
	const hasShadow = type === 'secondary' && variant === 'outlined';

	return {
		borderWidth: 1,
		borderColor: isDisabled || isLoading ? disabledBorderColor : borderColor,
		backgroundColor: isDisabled || isLoading ? disabledBgColor : mainColor,
		paddingHorizontal: scaledForDevice(type === 'main' ? 12 : 8, moderateScale) ,
		...(hasVerticalHeight && {paddingVertical: scaledForDevice(10, moderateScale)}),
		...(!hasVerticalHeight && {height: variant !== 'text' ? containerHeight : scaledForDevice(35, moderateScale)}),
		...(hasShadow && containerShadow)
	}
};

const directionWrapperStyle = ({iconPosition}: DirectionStyle ) => {
	const {directionWrapper} = stlyeConfig;

	const flexDirection = 
		directionWrapper.flexDirection[iconPosition] || directionWrapper.flexDirection[defaultIconPosition];
	const flexCenter = directionWrapper.center || {};

	return {
		...flexCenter,
		flexDirection,
	}
};

const baseTextStyle = ({type, variant, color, disabled: isDisabled, isLoading, isPressed}: TextStyle) => {
	const selectedColor = themeColors[color] || themeColors[defaultColor];
	const {main, pressed, disabled} = colorConfig(selectedColor);
	
	const {text: textStyle} = stlyeConfig;

	const mainTextColor = main.text[type][variant] || main.text[defaultType][defaultVariant];
	const pressedTextColor = pressed.text[type][variant] || pressed.text[defaultType][defaultVariant];
	const disabledTextColor = disabled.text[type][variant] || disabled.text[defaultType][defaultVariant];

	const mainColor = isPressed ? pressedTextColor : mainTextColor;

	return {
		...textStyle,
		color: isDisabled || isLoading ? disabledTextColor : mainColor,
	}
};
const textStyle = (params : TextStyle) => ({
	...baseTextStyle(params),
	fontSize: scaledForDevice(14, moderateScale),
});
const iconStyle  = (params: TextStyle) => {
	const {hasIconAndText, iconPosition} = params;
	const {icon} = stlyeConfig;

	return {
		...baseTextStyle(params),
		...(!!hasIconAndText && icon.margin[iconPosition] || {})
	}
};

const loadingColor = ({color}: LoadingStyle) => {
	const selectedColor = themeColors[color] || themeColors[defaultColor];
	return selectedColor.main;
};


export const getMixedButtonStyles = (params: Params): ReturnStyles  => ({
    container: containerStyle(params),
	direction: directionWrapperStyle(params),
	text: textStyle(params),
	icon: iconStyle(params),
	loadingColor: loadingColor(params),
});
