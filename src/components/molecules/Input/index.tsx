import React, {forwardRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import BaseInput, {BaseInputProps} from 'atoms/BaseInput';
import {palette} from 'theme/palette';
import {moderateScale, scaledForDevice} from 'scale';

enum InputType {
	currency = 'numeric',
	number = 'numeric',
	text = 'default',
	email = 'email-address',
	phone = 'phone-pad',
}

interface InputProps extends BaseInputProps {
	type: 'currency' | 'number' | 'text' | 'email' | 'phone';
}

const Input = forwardRef<TextInput, InputProps>(({style, type, ...props}, ref) => {
	const styles = StyleSheet.create({
		input: {
			padding: 0,
			height: scaledForDevice(70, moderateScale),
			borderColor: palette.primary.main,
			borderWidth: 2,
			borderRadius: 8,
			fontSize: scaledForDevice(42, moderateScale),
			backgroundColor: palette.white.light,
			color: palette.black.main,
		},
	});

	return (
		<BaseInput style={[styles.input, style]} ref={ref} keyboardType={InputType[type]} {...props} />
	);
});

export default Input;
