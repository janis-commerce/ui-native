import React, {LegacyRef, useEffect, useState} from 'react';
import {TextInput, StyleSheet, View, Text, KeyboardType} from 'react-native';
import {
	Status,
	getBorderColor,
	getInputColor,
	getInputInitialState,
	getLabelColor,
	getStatusMessageColor,
	raiseLabel,
	showStatusMessage,
} from './utils';

// eslint-disable-next-line no-shadow
export enum keyboardTypes {
	default = 'default',
	numberPad = 'number-pad',
	decimalPad = 'decimal-pad',
	numeric = 'numeric',
	emailAdress = 'email-adress',
	phonePad = 'phone-pad',
	url = 'url',
}

interface CommonProps<T extends boolean> {
	disabled?: boolean;
	label?: T extends false ? string : string | undefined;
	placeholder?: T extends false ? string : string | undefined;
	value?: number | string;
	inputColor?: string;
	valueColor?: string;
	status?: Status;
	statusMessage?: string;
	keyboardType?: KeyboardType;
	onChange?: () => void;
	onSubmitEditing?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
	props?: any;
}

export interface EditableProps extends CommonProps<false> {
	readOnly?: false;
	label: string;
	placeholder: string;
}

export interface ReadOnlyProps extends CommonProps<true> {
	readOnly?: true;
	label?: string | undefined;
	placeholder?: string | undefined;
}

const Input = React.forwardRef<TextInput, EditableProps | ReadOnlyProps>(
	(
		{
			disabled = false,
			readOnly = false,
			label,
			placeholder,
			value = '',
			inputColor = '#2979FF',
			valueColor = '#2F2F2F',
			status = 'error',
			statusMessage = '',
			keyboardType = keyboardTypes.default,
			onChange = () => {},
			onSubmitEditing = () => {},
			onFocus = () => {},
			onBlur = () => {},
			...props
		}: EditableProps | ReadOnlyProps,
		ref: LegacyRef<TextInput>
	) => {
		const [inputState, setInputState] = useState('incomplete');

		useEffect(() => {
			setInputState(getInputInitialState(value.toString()));
		}, [value]);

		if (!readOnly && (!label || !placeholder)) {
			return null;
		}

		const onFocusHandler = () => {
			setInputState('focus');
			return onFocus();
		};

		const onBlurHandler = () => {
			if (value) {
				setInputState('complete');
				return onBlur();
			}

			setInputState('incomplete');
			return onBlur();
		};

		const hasMessage = !!statusMessage;
		const isLabelVisible = inputState === 'focus' && !value;

		const validBorderColor = getBorderColor({inputState, hasMessage, status, inputColor});
		const validLabelColor = getLabelColor({
			disabled,
			readOnly,
			inputColor,
			inputState,
			statusMessage,
		});
		const validInputTextColor = getInputColor({hasMessage, inputState, status, valueColor});
		const validStatusMessageColor = getStatusMessageColor(status);

		const styles = StyleSheet.create({
			container: {
				width: '100%',
			},
			inputWrapper: {
				height: 50,
				borderBottomColor: validBorderColor,
				borderBottomWidth: 1,
				justifyContent: 'flex-end',
			},
			label: {
				color: validLabelColor,
				fontSize: 16,
				letterSpacing: 0,
				lineHeight: 19,
				position: 'absolute',
				bottom: raiseLabel({disabled, hasMessage, inputState}) ? 25 : 5,
			},
			input: {
				color: validInputTextColor,
				fontSize: 16,
				letterSpacing: 0,
				lineHeight: 19,
				padding: 0,
			},
			statusMessage: {
				color: validStatusMessageColor,
				marginTop: 5,
			},
		});

		return (
			<View style={styles.container}>
				<View style={styles.inputWrapper}>
					{isLabelVisible && <Text style={styles.label}>{label}</Text>}
					<TextInput
						style={styles.input}
						ref={ref}
						onFocus={onFocusHandler}
						onBlur={onBlurHandler}
						onChange={onChange}
						onSubmitEditing={onSubmitEditing}
						placeholder={placeholder}
						editable={!(readOnly || disabled)}
						selectionColor={inputColor}
						keyboardType={keyboardType}
						{...props}
					/>
				</View>
				{showStatusMessage(hasMessage, inputState) && (
					<View>
						<Text style={styles.statusMessage}>{statusMessage}</Text>
					</View>
				)}
			</View>
		);
	}
);

export default Input;
