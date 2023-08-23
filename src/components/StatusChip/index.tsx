import React, {ReactElement, isValidElement} from 'react';
import {StyleSheet, ViewProps, View} from 'react-native';
import {base, grey, primary} from '../../theme/palette';
import Text from '../Text';

interface StatusChipProps extends ViewProps {
	children?: ReactElement | string;
	background?: string;
}

const styles = ({background}: StatusChipProps) =>
	StyleSheet.create({
		ViewStyles: {
			height: 24,
			flexDirection: 'row',
			alignItems: 'center',
			paddingLeft: 12,
			paddingRight: 12,
			borderRadius: 12,
			backgroundColor: background ?? base.white,
			borderWidth: 1,
			borderColor: background ?? grey['300'],
		},
		TextStyles: {
			fontSize: 13,
			lineHeight: 18,
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
