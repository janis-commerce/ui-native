import React, {FC} from 'react';
import {Pressable, PressableProps, ViewStyle, StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';
import Text from '../Text';
import Icon from '../Icon';

interface PressableStyleProp {
	pressed: boolean;
}

interface BaseButtonProps extends PressableProps {
	title?: string | null;
	icon?: string;
	iconRight?: boolean;
	disabled?: boolean;
	borderRadius?: number;
	pressedColor?: string;
	style?: ViewStyle;
	iconStyle?: ViewStyle;
	textStyle?: ViewStyle;
	children?: React.Component;
}

const BaseButton: FC<BaseButtonProps> = ({
	title = null,
	icon = null,
	iconRight = false,
	disabled = false,
	borderRadius = 0,
	pressedColor,
	style,
	iconStyle,
	textStyle,
	children = null,
	...props
}) => {
	const bgColor = !disabled ? palette.primary.main : palette.grey[200];
	const iconPaddingLeft = iconRight && title ? 8 : 0;
	const iconPaddingRight = !iconRight && title ? 8 : 0;

	const styles = StyleSheet.create({
		container: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			paddingHorizontal: 16,
			paddingVertical: 10,
			borderRadius,
			backgroundColor: bgColor,
		},
		icon: {
			color: palette.base.white,
			paddingRight: iconPaddingRight,
			paddingLeft: iconPaddingLeft,
		},
		title: {
			fontSize: 14,
			fontWeight: '500',
			textAlign: 'center',
			color: palette.base.white,
		},
	});

	const noChildren = () => (
		<>
			{icon && !iconRight && <Icon name={icon} style={[styles.icon, iconStyle]} size={24} />}
			{title && <Text style={[styles.title, textStyle]}>{title}</Text>}
			{icon && iconRight && <Icon name={icon} style={[styles.icon, iconStyle]} size={24} />}
		</>
	);

	const PressableStyle = ({pressed}: PressableStyleProp) => {
		const backgroundColor = pressedColor ?? palette.primary.dark;
		const pressedBgColor = pressed ? [{backgroundColor}] : [];

		return [styles.container, style, ...pressedBgColor];
	};

	return (
		<Pressable style={PressableStyle} disabled={disabled} {...props}>
			{children ?? noChildren}
		</Pressable>
	);
};

export default BaseButton;
