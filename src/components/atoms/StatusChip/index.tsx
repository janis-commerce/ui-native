import React, {ReactElement, isValidElement} from 'react';
import {StyleSheet, ViewProps, View} from 'react-native';
import palette from 'theme/palette';
import Typography from 'atoms/Typography';
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
			backgroundColor: background ?? palette.greyScale.white,
			borderWidth: validBorderWidth,
			borderColor: background ?? palette.greyScale['04'],
		},
		TextStyles: {
			fontSize: validFontSize,
			lineHeight: validLineHeight,
			fontFamily: 'Roboto',
			fontWeight: '900',
			textAlign: 'center',
			color: background ? palette.greyScale.white : palette.primary.blue.normal,
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
			{isCustomComponent ? (
				children
			) : (
				<Typography style={styles(props).TextStyles}>{children}</Typography>
			)}
		</View>
	);
};

export default StatusChip;
