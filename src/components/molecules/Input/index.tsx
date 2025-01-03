import React, {forwardRef, useState, useRef} from 'react';
import {StyleSheet, TextInput, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import BaseInput, {BaseInputProps} from 'atoms/BaseInput';
import {palette} from 'theme/palette';
import {moderateScale, scaledForDevice} from 'scale';
import handleChangeText from './utils/handleChangeText';
import Typography from 'atoms/Typography';

enum InputType {
	currency = 'numeric',
	number = 'numeric',
	text = 'default',
	email = 'email-address',
	phone = 'phone-pad',
}

export type InputVariant = 'default' | 'weightable' | 'amountTotal' | 'currency' | 'numeric';

interface BaseInputPropsExtended extends BaseInputProps {
	type: 'currency' | 'number' | 'text' | 'email' | 'phone';
	variant?: InputVariant;
	onChangeText?: (text: string) => void;
}

type InputProps =
	| (BaseInputPropsExtended & {variant: 'amountTotal'; totalValue: number})
	| (BaseInputPropsExtended & {variant?: Exclude<InputVariant, 'amountTotal'>; totalValue?: never});

function setRef<T>(ref: React.Ref<T>, value: T | null) {
	if (typeof ref === 'function') {
		ref(value);
	} else if (ref && 'current' in ref) {
		(ref as React.MutableRefObject<T | null>).current = value;
	}
}

const Input = forwardRef<TextInput, InputProps>(
	({style, type, variant = 'default', totalValue, onChangeText, ...props}, ref) => {
		const [value, setValue] = useState('');
		const isAmountTotalVariant = variant === 'amountTotal';

		const inputRef = useRef<TextInput>(null);

		if (isAmountTotalVariant && typeof totalValue !== 'number') {
			return null;
		}

		const styles = StyleSheet.create({
			container: {
				padding: 0,
				height: scaledForDevice(70, moderateScale),
				borderColor: palette.primary.main,
				borderWidth: 2,
				borderRadius: 8,
				backgroundColor: palette.white.light,
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'row',
			},
			input: {
				color: palette.black.main,
				fontSize: scaledForDevice(42, moderateScale),
			},
			totalValue: {
				color: palette.primary.main,
			},
		});

		const changeTextCb = (text: string) => handleChangeText(text, setValue, variant, onChangeText);

		const handlePress = () => {
			// istanbul ignore next
			if (inputRef.current) {
				Keyboard.dismiss();
				inputRef.current.focus();
			}
		};

		return (
			<TouchableWithoutFeedback onPress={handlePress}>
				<View style={styles.container}>
					<BaseInput
						editable
						style={[styles.input, style]}
						ref={(instance) => {
							setRef(inputRef, instance);
							setRef(ref, instance);
						}}
						value={value}
						keyboardType={InputType[type]}
						onChangeText={changeTextCb}
						{...props}
					/>
					{isAmountTotalVariant && (
						<Typography style={styles.totalValue} type="display" size="medium">
							{`/${totalValue?.toString()}`}
						</Typography>
					)}
				</View>
			</TouchableWithoutFeedback>
		);
	}
);

export default Input;
