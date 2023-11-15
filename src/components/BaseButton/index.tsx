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
	children = null,
	...props
}) => {
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

	const PressableStyle = ({pressed}: PressableStyleProp) => {
		const selectBgColor = style?.backgroundColor ?? palette.primary.main;
		const activeBgColor = !disabled ? selectBgColor : palette.grey[200];
		const pressedBgColor = pressedColor ?? palette.primary.dark;
		const backgroundColor = pressed ? pressedBgColor : activeBgColor;

		return [styles.container, style, {backgroundColor}];
	};

	return (
		<Pressable style={PressableStyle} disabled={disabled} {...props}>
			{children ?? (
				<>
					{icon && !iconRight && <Icon name={icon} style={styles.icon} size={24} />}
					{title && <Text style={styles.title}>{title}</Text>}
					{icon && iconRight && <Icon name={icon} style={styles.icon} size={24} />}
				</>
			)}
		</Pressable>
	);
};

export default BaseButton;
