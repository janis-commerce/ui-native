import React, {ReactElement, isValidElement} from 'react';
import {StyleSheet, ViewProps, View} from 'react-native';
import {base, grey, primary} from 'theme/palette';
import Text from 'atoms/Text';
import {horizontalScale, moderateScale, scaledForDevice} from 'scale';

interface StatusChipProps extends ViewProps {
	children?: ReactElement | string;
	background?: string;
}

const validHeight = scaledForDevice(24, moderateScale);
const validPadding = scaledForDevice(12, horizontalScale);
const validBorderRadius = scaledForDevice(12, moderateScale);
const validBorderWidth = scaledForDevice(1, moderateScale);
const validFontSize = scaledForDevice(13, moderateScale);
const validLineHeight = scaledForDevice(18, moderateScale);

const styles = ({background}: StatusChipProps) =>
	StyleSheet.create({
		ViewStyles: {
			height: validHeight,
			flexDirection: 'row',
			alignItems: 'center',
			paddingLeft: validPadding,
			paddingRight: validPadding,
			borderRadius: validBorderRadius,
			backgroundColor: background ?? base.white,
			borderWidth: validBorderWidth,
			borderColor: background ?? grey['300'],
		},
		TextStyles: {
			fontSize: validFontSize,
			lineHeight: validLineHeight,
			fontFamily: 'Roboto',
			fontWeight: '900',
			textAlign: 'center',
			color: background ? base.white : primary.main,
		},
	});

const StatusChip = ({children, ...props}: StatusChipProps) => {
	const isChildrenAString = typeof children === 'string';
	const isCustomComponent = isValidElement(children);

	const hasToRenderStatusChip = !children || (!isChildrenAString && !isCustomComponent);

	if (hasToRenderStatusChip) {
		return null;
	}

	return (
		<View style={styles(props).ViewStyles} {...props}>
			{isCustomComponent ? children : <Text style={styles(props).TextStyles}>{children}</Text>}
		</View>
	);
};

export default StatusChip;
