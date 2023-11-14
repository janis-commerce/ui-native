import React, {FC} from 'react';
import {Pressable, PressableProps, ViewStyle, StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';
import Text from '../Text';
import Icon from '../Icon';

export type CustomComponent = (props: any) => React.Component;

interface BaseButtonProps extends PressableProps {
	title?: string | null;
	icon?: string;
	iconRight?: boolean;
	children?: CustomComponent;
	borderRadius?: number;
	disabled?: boolean;
	pressedStyle?: ViewStyle;
	style?: ViewStyle;
}

const BaseButton: FC<BaseButtonProps> = ({
	title = null,
	icon = null,
	iconRight = false,
	children = null,
	borderRadius = 30,
	disabled = false,
	pressedStyle,
	style,
	...props
}) => {
	const defaultPressedStyle = {backgroundColor: palette.primary.dark};
	const hasPressedStyle = pressedStyle ? pressedStyle : defaultPressedStyle;

	const iconMarginLeft = iconRight && title ? 8 : 0;
	const iconMarginRight = !iconRight && title ? 8 : 0;

	const disabledColor = disabled ? palette.grey[200] : palette.primary.main;

	const styles = StyleSheet.create({
		container: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 16,
			paddingVertical: 10,
			backgroundColor: disabledColor,
			overflow: 'hidden',
			borderRadius,
		},
		icon: {
			color: palette.base.white,
			marginRight: iconMarginRight,
			marginLeft: iconMarginLeft,
		},
		title: {
			fontSize: 14,
			fontWeight: '500',
			textAlign: 'center',
			color: palette.base.white,
		},
	});

	return (
		<Pressable
			style={({pressed}) => [[styles.container, pressed && hasPressedStyle], style]}
			disabled={disabled}
			{...props}>
			{children ?? (
				<>
					{icon && !iconRight && <Icon name={icon} style={[styles.icon, style]} size={24} />}
					{title && <Text style={[styles.title, style]}>{title}</Text>}
					{icon && iconRight && <Icon name={icon} style={[styles.icon, style]} size={24} />}
				</>
			)}
		</Pressable>
	);
};

export default BaseButton;
