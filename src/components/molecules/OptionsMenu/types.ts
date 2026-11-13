import {ViewStyle} from 'react-native';

export interface OptionsMenuOption {
	title: string;
	onPress: () => void;
	disabled?: boolean;
}

export interface OptionsMenuProps {
	options: OptionsMenuOption[];
	color?: string;
	style?: ViewStyle;
	testID?: string;
}
