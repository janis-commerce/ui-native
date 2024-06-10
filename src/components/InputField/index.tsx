//istanbul ignore file
import React, {LegacyRef} from 'react';
import {InputBehaviors, InputConfigs} from '../../ts/interfaces/inputs';
import {keyboardTypes} from '../../ts/enums/commons';
import {BasicError} from '../../ts/interfaces/commons';
import {TextInput} from 'react-native';

type IconProps = {
	name: string;
	color?: string;
	size?: number;
	onPress?: () => {};
};

type labelPositions = 'left' | 'right';

interface InputFieldProps extends InputConfigs, InputBehaviors, BasicError {
	fontSize?: number;
	labelPosition?: labelPositions;
	maxQuantity?: number;
	rightIcon?: IconProps;
	leftIcon?: IconProps;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const InputField = React.forwardRef<TextInput, InputFieldProps>(
	(
		{
			error = false,
			disabled = false,
			readOnly = false,
			label = '',
			placeholder = '',
			value = '',
			errorMessage = '',
			fontSize = 16,
			maxQuantity = 0,
			rightIcon = {name: ''},
			leftIcon = {name: ''},
			labelPosition = 'left',
			onChange = () => {},
			onSubmitEditing = () => {},
			onFocus = () => {},
			onBlur = () => {},
			keyboardType = keyboardTypes.default,
		}: InputFieldProps,
		ref: LegacyRef<TextInput>
	) => {
		return <></>;
	}
);

export default InputField;
