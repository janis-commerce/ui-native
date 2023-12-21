import React, {ReactElement, isValidElement} from 'react';
import {StyleSheet, ViewProps, View} from 'react-native';
import {base, grey, primary} from '../../theme/palette';
import Text from '../Text';
import {horizontalScale, moderateScale} from '../../scale';
import {LOAD_STORYBOOK} from '../../../env.json';

interface StatusChipProps extends ViewProps {
	children?: ReactElement | string;
	background?: string;
}

const validHeight = !LOAD_STORYBOOK ? moderateScale(24) : 24;
const validPadding = !LOAD_STORYBOOK ? horizontalScale(12) : 12;
const validBorderRadius = !LOAD_STORYBOOK ? moderateScale(12) : 12;
const validBorderWidth = !LOAD_STORYBOOK ? moderateScale(1) : 1;
const validFontSize = !LOAD_STORYBOOK ? moderateScale(13) : 13;
const validLineHeight = !LOAD_STORYBOOK ? moderateScale(18) : 18;

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
