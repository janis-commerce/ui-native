import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from './icon/CheckedIcon';

interface CheckBoxProps {
	value: boolean;
	onValueChange?: () => void;
	customSize?: number;
	checkOnColor?: string;
	checkOffColor?: string;
	iconCheckColor?: string;
	disabled?: boolean;
}

export const getCheckBoxScale = (size: number): number => size / 9;

const CheckBox = ({
	value,
	onValueChange = () => {},
	customSize = 18,
	checkOnColor = '#2979FF',
	checkOffColor = '#939598',
	iconCheckColor = '#FFF',
	disabled = false,
	...props
}: CheckBoxProps) => {
	const isDisabled = disabled ? 0.6 : 1;

	const styles = StyleSheet.create({
		checkOn: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: checkOnColor,
			width: customSize,
			height: customSize,
			borderRadius: getCheckBoxScale(customSize),
			opacity: isDisabled,
		},
		checkOff: {
			borderWidth: getCheckBoxScale(customSize),
			borderColor: checkOffColor,
			width: customSize,
			height: customSize,
			borderRadius: getCheckBoxScale(customSize),
			opacity: isDisabled,
		},
	});

	const isChecked = value ? styles.checkOn : styles.checkOff;

	return (
		<TouchableOpacity onPress={() => onValueChange()} disabled={disabled} activeOpacity={0.6}>
			<View style={isChecked} {...props}>
				{value && <Icon color={iconCheckColor} size={customSize} />}
			</View>
		</TouchableOpacity>
	);
};

export default CheckBox;
