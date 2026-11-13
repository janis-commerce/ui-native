import {StyleProp, ViewStyle} from 'react-native';

export interface OptionsMenuOption {
	/** React key of the option. Takes precedence over `id`; without either, the option's index is used (same as FlatList). */
	key?: string;
	/** Used as React key when there is no `key`; without either, the option's index is used. */
	id?: string;
	title: string;
	onPress: () => void;
	disabled?: boolean;
}

export interface OptionsMenuProps {
	options: OptionsMenuOption[];
	color?: string;
	style?: StyleProp<ViewStyle>;
	testID?: string;
}
