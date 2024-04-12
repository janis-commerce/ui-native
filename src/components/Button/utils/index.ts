import { moderateScale, scaledForDevice } from "../../../scale"
import { palette } from "../../../theme/palette"
import { themeColors, mixedColors } from "../theme";
import type { ContainerStyle, Params, ReturnStyles } from "./types";

const containerStyle = ({isPressed, disabled, isLoading, color, variant, type}: ContainerStyle) => {
	const selectedColor = themeColors[color];
	const {
		mainBgColor,
		mainBorderColor,
		pressedBgColor,
		pressedBorderColor,
		disabledBgColor,
		disabledBorderColor
	} = mixedColors(selectedColor);

	// main and pressed button colors
	const mainColor = isPressed ? pressedBgColor[variant] : mainBgColor[variant];
	const borderColor = isPressed ? pressedBorderColor[variant] : mainBorderColor[variant];
	
	// disabled button colors
	const backgroundDisabled = disabledBgColor[variant]
	const borderDisabled = disabledBorderColor[type][variant]

	const selectHeight = {
		main: scaledForDevice(50, moderateScale),
		secondary: scaledForDevice(42, moderateScale),
	}

	const height = variant === 'text' ? scaledForDevice(35, moderateScale) : selectHeight[type]

	return {
		borderWidth: 1,
		borderColor: disabled || isLoading ? borderDisabled : borderColor,
		backgroundColor: disabled || isLoading ? backgroundDisabled : mainColor,
		// elevation: 5,
		height,
	}
}

const directionWrapperStyle = (params = {}) => {


	
	return {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
}

const iconStyle = (params = {}) => {
	return {
		color: palette.base.white,
	}
}

const textStyle = (params = {}) => {
	return  {
		fontSize: scaledForDevice(14, moderateScale),
		fontWeight: '500',
		textAlign: 'center',
		color: palette.base.white,
	}
}


export const getMixedButtonStyles = (params: Params): ReturnStyles  => ({
    container: containerStyle(params),
	direction: directionWrapperStyle(params),
	icon: iconStyle(params),
	text: textStyle(params),
	loadingColor: themeColors[params.color].main,
})
