import React, {FC} from 'react';
import {Pressable, PressableProps, ViewStyle, StyleSheet} from 'react-native';
import {moderateScale, horizontalScale, scaledForDevice} from '../../scale';
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
	children?: React.ReactNode;
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
	if (!title && !icon && !children) {
		return null;
	}

	const bgColor = !disabled ? palette.primary.main : palette.grey[200];
	const iconPaddingLeft = iconRight && title ? 8 : 0;
	const iconPaddingRight = !iconRight && title ? 8 : 0;

	const validatePaddingVertical = scaledForDevice(10, moderateScale);
	const validatePaddingHorizontal = scaledForDevice(16, horizontalScale);
	const validateFontSize = scaledForDevice(14, moderateScale);
	const validateBorderRadius = scaledForDevice(borderRadius, moderateScale);
	const validatePaddingRightIcon = scaledForDevice(iconPaddingRight, horizontalScale);
	const validatePaddingLeftIcon = scaledForDevice(iconPaddingLeft, horizontalScale);

	const styles = StyleSheet.create({
		container: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			paddingHorizontal: validatePaddingHorizontal,
			paddingVertical: validatePaddingVertical,
			borderRadius: validateBorderRadius,
			backgroundColor: bgColor,
		},
		icon: {
			color: palette.base.white,
			paddingRight: validatePaddingRightIcon,
			paddingLeft: validatePaddingLeftIcon,
		},
		title: {
			fontSize: validateFontSize,
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

	/* istanbul ignore next */
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
