import React, {LegacyRef, useEffect, useState} from 'react';
import {
	TextInput,
	StyleSheet,
	View,
	Text,
	KeyboardType,
	TextStyle,
	NativeSyntheticEvent,
	TextInputEndEditingEventData,
} from 'react-native';
import {
	Status,
	getBorderColor,
	getInputInitialState,
	getLabelColor,
	getStatusMessageColor,
	raiseLabel,
	showStatusMessage,
} from './utils';
import {moderateScale, horizontalScale, scaledForDevice} from '../../scale';

export enum keyboardTypes {
	default = 'default',
	numberPad = 'number-pad',
	decimalPad = 'decimal-pad',
	numeric = 'numeric',
	emailAddress = 'email-address',
	phonePad = 'phone-pad',
	url = 'url',
}

interface InputProps {
	disabled?: boolean;
	readOnly?: boolean;
	label: string;
	placeholder: string;
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
	style?: TextStyle;
}

type InputState = 'incomplete' | 'complete' | 'focus';

const Input = React.forwardRef<TextInput, InputProps>(
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
			style,
			...props
		}: InputProps,
		ref: LegacyRef<TextInput>
	) => {
		const [inputState, setInputState] = useState<InputState>('incomplete');

		useEffect(() => {
			setInputState(getInputInitialState(value?.toString()));
		}, [value]);

		if (!label || !placeholder) {
			return null;
		}

		const onFocusHandler = () => {
			setInputState('focus');
			return onFocus();
		};

		const onEndEditingHandler = ({
			nativeEvent,
		}: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
			const {text = ''} = nativeEvent;

			if (text) {
				setInputState('complete');
				return onBlur();
			}

			setInputState('incomplete');
			return onBlur();
		};

		const hasMessage = !!statusMessage;
		const isLabelVisible = !disabled && !readOnly && (inputState !== 'incomplete' || hasMessage);

		const validBorderColor = getBorderColor({inputState, hasMessage, status, inputColor});
		const validLabelColor = getLabelColor({
			disabled,
			readOnly,
			inputColor,
			inputState,
			statusMessage,
			status,
		});

		const validStatusMessageColor = getStatusMessageColor(status);
		const validBottom = scaledForDevice(25, moderateScale);
		const validHeight = scaledForDevice(50, moderateScale);
		const validBorderBottomWidth = scaledForDevice(1, horizontalScale);
		const validLineHeight = scaledForDevice(19, moderateScale);
		const validFontSize = scaledForDevice(16, moderateScale);
		const validateMarginTop = scaledForDevice(5, moderateScale);

		const styles = StyleSheet.create({
			container: {
				width: '100%',
			},
			inputWrapper: {
				height: validHeight,
				borderBottomColor: validBorderColor,
				borderBottomWidth: validBorderBottomWidth,
				justifyContent: 'flex-end',
			},
			label: {
				color: validLabelColor,
				fontSize: validFontSize,
				letterSpacing: 0,
				lineHeight: validLineHeight,
				position: 'absolute',
				bottom: raiseLabel({disabled, hasMessage, inputState}) ? validBottom : 0,
			},
			input: {
				color: valueColor,
				fontSize: validFontSize,
				letterSpacing: 0,
				lineHeight: validLineHeight,
				padding: 0,
			},
			statusMessage: {
				color: validStatusMessageColor,
				marginTop: validateMarginTop,
			},
		});

		return (
			<View style={styles.container}>
				<View style={styles.inputWrapper}>
					{isLabelVisible && <Text style={styles.label}>{label}</Text>}
					<TextInput
						style={[styles.input, style]}
						ref={ref}
						onFocus={onFocusHandler}
						onEndEditing={onEndEditingHandler}
						onChange={onChange}
						onSubmitEditing={onSubmitEditing}
						placeholder={placeholder}
						editable={!(readOnly || disabled)}
						selectionColor={inputColor}
						keyboardType={keyboardType}
						value={value?.toString()}
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
