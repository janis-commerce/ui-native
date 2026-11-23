import {PressableProps, StyleProp, ViewStyle} from 'react-native';

export interface SwitchProps extends Omit<PressableProps, 'onPress' | 'children' | 'style'> {
	checked: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
}
