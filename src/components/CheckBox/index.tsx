import React from 'react';
import {View, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import {base, grey, primary} from '../../theme/palette';
import Icon from './icon/CheckedIcon';

interface CheckBoxProps {
	checked: boolean;
	customSize?: number;
	checkOnColor?: string;
	checkOffColor?: string;
	iconCheckColor?: string;
	borderRadius?: number;
	disabled?: boolean;
	style?: ViewStyle;
	onPress?: () => {};
}

const getCheckBoxScale = (size: number, divisor: number): number => size / divisor;

const CheckBox = ({
	checked,
	customSize = 16,
	checkOnColor = primary.main,
	checkOffColor = grey[500],
	iconCheckColor = base.white,
	borderRadius,
	disabled = false,
	style,
	...props
}: CheckBoxProps) => {
	const hasBorderRadius = !borderRadius ? getCheckBoxScale(customSize, 4) : borderRadius;

	const styles = StyleSheet.create({
		touchableOpacity: {
			width: customSize,
			height: customSize,
			borderRadius: hasBorderRadius,
		},
		checkOn: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: !disabled ? checkOnColor : grey[200],
			width: customSize,
			height: customSize,
			borderRadius: hasBorderRadius,
		},
		checkOff: {
			borderWidth: getCheckBoxScale(customSize, 16),
			borderColor: !disabled ? checkOffColor : grey[200],
			width: customSize,
			height: customSize,
			borderRadius: hasBorderRadius,
		},
	});

	const isChecked = checked ? styles.checkOn : styles.checkOff;

	return (
		<TouchableOpacity
			disabled={disabled}
			activeOpacity={0.6}
			style={[styles.touchableOpacity, style]}
			{...props}>
			<View style={isChecked}>{checked && <Icon color={iconCheckColor} size={customSize} />}</View>
		</TouchableOpacity>
	);
};

export default CheckBox;
