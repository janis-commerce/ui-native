import React, {forwardRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import BaseInput, {BaseInputProps} from 'atoms/BaseInput';
import {palette} from 'theme/palette';
import {moderateScale, scaledForDevice} from 'scale';
import handleChangeText from './utils/handleChangeText';

enum InputType {
	currency = 'numeric',
	number = 'numeric',
	text = 'default',
	email = 'email-address',
	phone = 'phone-pad',
}

export type InputVariant = 'default' | 'weightable' | 'amountTotal' | 'currency' | 'numeric';

interface InputProps extends BaseInputProps {
	type: 'currency' | 'number' | 'text' | 'email' | 'phone';
	variant?: InputVariant;
	onChangeText?: (text: string) => void;
}

const Input = forwardRef<TextInput, InputProps>(
	({style, type, variant = 'default', onChangeText, ...props}, ref) => {
		const [value, setValue] = useState('');

		const styles = StyleSheet.create({
			container: {
				padding: 0,
				height: scaledForDevice(70, moderateScale),
				borderColor: palette.primary.main,
				borderWidth: 2,
				borderRadius: 8,
				backgroundColor: palette.white.light,
			},
			input: {
				color: palette.black.main,
				fontSize: scaledForDevice(42, moderateScale),
			},
		});

		const changeTextCb = (text: string) => handleChangeText(text, setValue, variant, onChangeText);

		return (
			<View style={styles.container}>
				<BaseInput
					style={[styles.input, style]}
					ref={ref}
					value={value}
					keyboardType={InputType[type]}
					onChangeText={changeTextCb}
					{...props}
				/>
			</View>
		);
	}
);

export default Input;
