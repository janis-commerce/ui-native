import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import palette from 'theme/palette';
import {moderateScale, scaledForDevice} from 'scale';

interface BaseInputProps extends TextInputProps {
	placeholder?: string;
	onChangeText?: (text: string) => void;
	style?: any;
	textAlign?: 'center' | 'left' | 'right' | undefined;
}

const BaseInput = forwardRef<TextInput, BaseInputProps>(
	({value, placeholder, onChangeText, style, textAlign, ...props}, ref) => {
		const styles = StyleSheet.create({
			input: {
				padding: 0,
				height: scaledForDevice(70, moderateScale),
				borderColor: palette.primary.blue.normal,
				borderWidth: 2,
				borderRadius: 8,
				fontSize: scaledForDevice(42, moderateScale),
				backgroundColor: '#F4F5FB',
				color: palette.secondary.black.normal,
			},
		});

		return (
			<TextInput
				style={[styles.input, style]}
				ref={ref}
				value={value}
				placeholder={placeholder}
				textAlign={textAlign || 'center'}
				onChangeText={onChangeText}
				selectionColor={palette.primary.blue.normal}
				placeholderTextColor={palette.greyScale['06']}
				{...props}
			/>
		);
	}
);

export default BaseInput;
