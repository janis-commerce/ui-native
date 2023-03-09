import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from './icon/CheckedIcon';

interface CheckBoxProps {
	checked: boolean;
	onValueChange?: () => void;
	customSize?: number;
	checkOnColor?: string;
	checkOffColor?: string;
	iconCheckColor?: string;
	borderRadius?: number;
	disabled?: boolean;
}

export const getCheckBoxScale = (size: number): number => size / 9;

const CheckBox = ({
	checked,
	onValueChange = () => {},
	customSize = 18,
	checkOnColor = '#2979FF',
	checkOffColor = '#939598',
	iconCheckColor = '#FFF',
	borderRadius,
	disabled = false,
	...props
}: CheckBoxProps) => {
	const isDisabled = disabled ? 0.6 : 1;
	const hasBorderRadius = borderRadius ? borderRadius : getCheckBoxScale(customSize);

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
			backgroundColor: checkOnColor,
			width: customSize,
			height: customSize,
			borderRadius: hasBorderRadius,
			opacity: isDisabled,
		},
		checkOff: {
			borderWidth: getCheckBoxScale(customSize),
			borderColor: checkOffColor,
			width: customSize,
			height: customSize,
			borderRadius: hasBorderRadius,
			opacity: isDisabled,
		},
	});

	const isChecked = checked ? styles.checkOn : styles.checkOff;

	return (
		<TouchableOpacity
			onPress={() => onValueChange()}
			disabled={disabled}
			activeOpacity={0.6}
			style={styles.touchableOpacity}>
			<View style={isChecked} {...props}>
				{checked && <Icon color={iconCheckColor} size={customSize} />}
			</View>
		</TouchableOpacity>
	);
};

export default CheckBox;
