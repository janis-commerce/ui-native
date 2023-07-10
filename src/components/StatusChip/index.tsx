import React, {ReactElement, isValidElement} from 'react';
import {StyleSheet, Text, ViewProps, View} from 'react-native';
import {base, grey, primary} from '../../theme/palette';

interface StatusChipProps extends ViewProps {
	children?: ReactElement | string;
	color?: string;
}

const StatusChip = ({children, color, ...props}: StatusChipProps) => {
	const isString = typeof children === 'string';
	const isCustomComponent = isValidElement(children);

	if (!children || (!isString && !isCustomComponent)) {
		return null;
	}

	const styles = StyleSheet.create({
		ViewStyles: {
			height: 24,
			flexDirection: 'row',
			alignItems: 'center',
			paddingLeft: 12,
			paddingRight: 12,
			borderRadius: 12,
			backgroundColor: color ?? base.white,
			borderWidth: 1,
			borderColor: color ?? grey['300'],
		},
		TextStyles: {
			fontSize: 15,
			lineHeight: 18,
			fontFamily: 'Roboto',
			fontWeight: '900',
			textAlign: 'center',
			color: color ? base.white : primary.main,
		},
	});

	return (
		<View style={styles.ViewStyles} {...props}>
			{isCustomComponent ? children : <Text style={styles.TextStyles}>{children}</Text>}
		</View>
	);
};

export default StatusChip;
