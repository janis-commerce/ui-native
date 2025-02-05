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
	default = 'default',
	text = 'default',
	email = 'email-address',
	phone = 'phone-pad',
	weightable = 'numeric',
	amountTotal = 'numeric',
	numeric = 'numeric',
}

export type InputVariant = 'default' | 'weightable' | 'amountTotal' | 'currency' | 'numeric';

interface BaseInputPropsExtended extends BaseInputProps {
	type?: 'currency' | 'number' | 'text' | 'email' | 'phone';
	variant?: InputVariant;
	onChangeText?: (text: string) => void;
	totalValue?: number;
}

type AmountTotalProps = BaseInputPropsExtended & {
	variant: 'amountTotal';
	totalValue: number;
};

type OtherVariantProps = BaseInputPropsExtended & {
	variant: Exclude<InputVariant, 'amountTotal'>;
	totalValue?: never;
};

type DefaultProps = BaseInputPropsExtended & {
	variant?: never;
	type: 'currency' | 'number' | 'text' | 'email' | 'phone';
	totalValue?: never;
};

export type InputProps = AmountTotalProps | OtherVariantProps | DefaultProps;

const Input = forwardRef<TextInput, InputProps>(
	({style, type, variant = 'default', totalValue, onChangeText, ...props}, ref) => {
		const [value, setValue] = useState('');
		const isAmountTotalVariant = variant === 'amountTotal';

		const internalRef = useRef<TextInput>(null);
		const inputRef = ref ?? internalRef;

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

		const changeTextCb = (text: string) => {
			const transformedText = handleChangeText(text, variant);
			setValue(transformedText);
			if (onChangeText) {
				onChangeText(transformedText);
			}
		};

		const handlePress = () => {
			// istanbul ignore next
			if (inputRef && 'current' in inputRef && inputRef.current) {
				Keyboard.dismiss();
				inputRef.current.focus();
			}
		};

		const resolvedKeyboardType = (() => {
			if (type && type in InputType) {
				return InputType[type];
			}
			if (variant && variant in InputType) {
				return InputType[variant];
			}
			return InputType.default;
		})();

		return (
			<TouchableWithoutFeedback onPress={handlePress}>
				<View style={styles.container}>
					<BaseInput
						style={[styles.input, style]}
						ref={inputRef}
						value={value}
						keyboardType={resolvedKeyboardType}
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
