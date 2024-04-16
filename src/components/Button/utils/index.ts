import { moderateScale, scaledForDevice } from "../../../scale"
import { colorConfig, stlyeConfig } from "../theme/configs";
import { themeColors } from "../theme";
import { 
	defaultColor,
	validTypes,
	validVariants,
	validIconPositions,
	defaultIconPosition,
	defaultType,
	defaultVariant,
	verticalHeights
} from '../constants';
import type { 
	ContainerStyle,
	DirectionStyle,
	LoadingStyle,
	Params,
	ReturnStyles,
	TextStyle
} from "../types";

const containerStyle = ({
	disabled: isDisabled,
	isPressed,
	isLoading,
	color,
	variant,
	type,
	iconPosition
}: ContainerStyle) => {
	const selectedColor = themeColors[color] || themeColors[defaultColor];
	const {main, pressed, disabled} = colorConfig(selectedColor);

	const {container} = stlyeConfig;

	const validType = !!validTypes.includes(type) ? type : defaultType;
	const validVariant = !!validVariants.includes(variant) ? variant : defaultVariant;

	const mainBgColor = main.background[validVariant];
	const mainBorderColor = main.border[validVariant];

	const pressedBgColor = pressed.background[validVariant];
	const pressedBorderColor = pressed.border[validVariant];
	
	const disabledBgColor = disabled.background[validVariant];
	const disabledBorderColor = disabled.border[validType][validVariant];

	const containerHeight = container.height[validType];
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

	const flexCenter = directionWrapper.center;

	const validIconPosition = !!validIconPositions.includes(iconPosition) 
		? iconPosition 
		: defaultIconPosition;
	const flexDirection = directionWrapper.flexDirection[validIconPosition];

	return {
		...flexCenter,
		flexDirection,
	}
};

const baseTextStyle = ({
	disabled: isDisabled,
	type,
	variant,
	color,
	isLoading,
	isPressed
}: TextStyle) => {
	const selectedColor = themeColors[color] || themeColors[defaultColor];
	const {main, pressed, disabled} = colorConfig(selectedColor);
	
	const {text: textStyle} = stlyeConfig;

	const validType = !!validTypes.includes(type) ? type : defaultType;
	const validVariant = !!validVariants.includes(variant) ? variant : defaultVariant;

	const mainTextColor = main.text[validType][validVariant];
	const pressedTextColor = pressed.text[validType][validVariant];
	const disabledTextColor = disabled.text[validType][validVariant];

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
