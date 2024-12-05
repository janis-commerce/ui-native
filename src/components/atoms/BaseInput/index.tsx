import React, {forwardRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {palette} from 'theme/palette';

export interface BaseInputProps extends TextInputProps {
	placeholder?: string;
	onChangeText?: (text: string) => void;
	style?: any;
	textAlign?: 'center' | 'left' | 'right' | undefined;
}

const BaseInput = forwardRef<TextInput, BaseInputProps>(
	({value, placeholder, onChangeText, style, textAlign, ...props}, ref) => {
		return (
			<TextInput
				style={[style]}
				ref={ref}
				value={value}
				placeholder={placeholder}
				textAlign={textAlign || 'center'}
				onChangeText={onChangeText}
				selectionColor={palette.primary.main}
				placeholderTextColor={palette.grey[500]}
				{...props}
			/>
		);
	}
);

export default BaseInput;
