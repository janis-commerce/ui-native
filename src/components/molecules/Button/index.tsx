import React, {FC} from 'react';
import {ViewStyle, StyleSheet, TextStyle, View} from 'react-native';
import BaseButton, {BaseButtonProps} from 'atoms/BaseButton';
import getButtonStyles from './utils/getButtonStyles';
import Loading from 'atoms/Loading';
import Typography from 'atoms/Typography';
import Icon from 'atoms/Icon';

export const types = {
	main: 'main',
	secondary: 'secondary',
};

export const variant = {
	contained: 'contained',
	outlined: 'outlined',
	text: 'text',
};

export const color = {
	primary: 'primary',
	black: 'black',
	success: 'success',
	error: 'error',
	warning: 'warning',
	alert: 'alert',
};

export const iconPosition = {
	top: 'top',
	bottom: 'bottom',
	left: 'left',
	right: 'right',
};

export type buttonType = typeof types;
export type keyType = keyof buttonType;

export type buttonVariant = typeof variant;
export type keyVariant = keyof buttonVariant;

export type buttonColor = typeof color;
export type keyColor = keyof buttonColor;

export type buttonIconPosition = typeof iconPosition;
export type keyIconPosition = keyof buttonIconPosition;

export interface ButtonProps extends BaseButtonProps {
	type?: keyType;
	variant?: keyVariant;
	color?: keyColor;
	isLoading?: boolean;
	value?: string | null;
	icon?: string;
	iconPosition?: keyIconPosition;
	disabled?: boolean;
	style?: ViewStyle;
	pressedStyle?: ViewStyle;
	iconStyle?: TextStyle;
	textStyle?: TextStyle;
}

const Button: FC<ButtonProps> = ({
	type = 'main',
	variant = 'contained',
	color = 'primary',
	iconPosition = 'left',
	isLoading = false,
	value = '',
	icon = null,
	disabled = false,
	style,
	iconStyle,
	textStyle,
	...props
}) => {
	if (!value && !icon) {
		return null;
	}

	const validDisabled = disabled || isLoading;
	const hasIconAndText = !!icon && !!value;
	const borderRadius = variant === 'text' ? 6 : 50;

	const buttonStyles = getButtonStyles({
		type,
		variant,
		color,
		iconPosition,
		isLoading,
		isDisabled: disabled,
		hasIconAndText,
	});
	const styles = StyleSheet.create(buttonStyles);

	const LoadingComponent = <Loading isLoading={isLoading} color={styles.loadingColor} size={24} />;

	const WrapperComponent = (
		<View style={styles.direction}>
			{icon && <Icon name={icon} style={[styles.icon, iconStyle]} size={24} />}
			{!!value && <Typography style={[styles.text, textStyle]}>{value}</Typography>}
		</View>
	);

	return (
		<BaseButton
			style={[styles.container, style]}
			pressedStyle={!validDisabled && styles.pressed}
			borderRadius={borderRadius}
			disabled={validDisabled}
			{...props}>
			{isLoading ? LoadingComponent : WrapperComponent}
		</BaseButton>
	);
};

export default Button;
