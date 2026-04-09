import React, {FC} from 'react';
import {Pressable, ViewStyle} from 'react-native';
import Icon from 'atoms/Icon';
import {primary} from 'theme/palette';
import {moderateScale, scaledForDevice} from 'scale';

export interface MenuButtonProps {
	onPress: () => void;
	color?: string;
	size?: number;
	style?: ViewStyle;
	testID?: string;
}

const validIconSize = scaledForDevice(24, moderateScale);

const MenuButton: FC<MenuButtonProps> = ({
	onPress,
	color = primary.main,
	size = validIconSize,
	style,
	testID,
}) => (
	<Pressable onPress={onPress} style={style} testID={testID}>
		<Icon name="menu" size={size} color={color} />
	</Pressable>
);

export default MenuButton;
