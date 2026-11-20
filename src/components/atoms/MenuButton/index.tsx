import React, {FC} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import Icon from 'atoms/Icon';
import {primary} from 'theme/palette';

export interface MenuButtonProps {
	onPress: () => void;
	color?: string;
	size?: number;
	style?: ViewStyle;
	testID?: string;
}

const MenuButton: FC<MenuButtonProps> = ({
	onPress,
	color = primary.main,
	size = 24,
	style,
	testID,
}) => (
	<Pressable onPress={onPress} style={style} testID={testID}>
		<Icon name="menu" size={size} color={color} />
	</Pressable>
);

export default MenuButton;
