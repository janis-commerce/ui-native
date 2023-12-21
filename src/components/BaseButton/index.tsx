import React, {FC} from 'react';
import {Pressable, PressableProps, ViewStyle, StyleSheet} from 'react-native';
import {moderateScale, horizontalScale} from '../../scale';
import {palette} from '../../theme/palette';
import Text from '../Text';
import Icon from '../Icon';
import {LOAD_STORYBOOK} from '../../../env.json';

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

	const validatePaddingVertical = !LOAD_STORYBOOK ? moderateScale(10) : 10;
	const validatePaddingHorizontal = !LOAD_STORYBOOK ? horizontalScale(16) : 16;
	const validateBorderRadius = !LOAD_STORYBOOK ? moderateScale(borderRadius) : borderRadius;
	const validateFontSize = !LOAD_STORYBOOK ? moderateScale(14) : 14;
	const validatePaddingRightIcon = !LOAD_STORYBOOK
		? horizontalScale(iconPaddingRight)
		: iconPaddingRight;
	const validatePaddingLeftIcon = !LOAD_STORYBOOK
		? horizontalScale(iconPaddingLeft)
		: iconPaddingLeft;

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
