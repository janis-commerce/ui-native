import {KeyboardType} from 'react-native';

export interface InputBehaviors {
	onChange?: () => void;
	onSubmitEditing?: () => void;
	onFocus?: () => void;
	onBlur?: () => void;
}

export interface InputConfigs {
	disabled?: boolean;
	readOnly?: boolean;
	label?: string;
	placeholder?: string;
	value?: number | string;
	keyboardType?: KeyboardType;
}
