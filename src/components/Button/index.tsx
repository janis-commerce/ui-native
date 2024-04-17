import React, {FC, useCallback, useState} from 'react';
import {ViewStyle, StyleSheet, TextStyle, View} from 'react-native';
import BaseButton, {BaseButtonProps} from '../BaseButton';
import Loading from '../Loading';
import Text from '../Text';
import Icon from '../Icon';
import {getMixedButtonStyles} from './utils';

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
	secondary: 'secondary',
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

interface ButtonProps extends BaseButtonProps {
	type?: keyType;
	variant?: keyVariant;
	color?: keyColor;
	isLoading?: boolean;
	value?: string | null;
	icon?: string;
	iconPosition?: keyIconPosition;
	disabled?: boolean;
	style?: ViewStyle;
	iconStyle?: TextStyle;
	textStyle?: TextStyle;
	onPressIn?: () => void;
	onPressOut?: () => void;
}

const Button: FC<ButtonProps> = ({
	type = 'main',
	variant = 'contained',
	color = 'primary',
	iconPosition = 'left',
	isLoading = false,
	value = 'Button',
	icon = null,
	disabled = false,
	style,
	iconStyle,
	textStyle,
	onPressIn = () => {},
	onPressOut = () => {},
	...props
}) => {
	const [isPressed, setIsPressed] = useState<Boolean>(false);
	const hasIconAndText = !!icon && !!value;
	const borderRadius = variant === 'text' ? 6 : 50;

	const params = {
		type,
		variant,
		color,
		iconPosition,
		isLoading,
		isPressed,
		disabled,
		hasIconAndText,
	};
	const buttonStyle = getMixedButtonStyles(params);
	const styles = StyleSheet.create(buttonStyle);

	const handleOnPressIn = useCallback(() => {
		setIsPressed(true);
		onPressIn();
	}, [onPressIn]);

	const handleOnPressOut = useCallback(() => {
		setIsPressed(false);
		onPressOut();
	}, [onPressOut]);

	const LoadingCompontent = (
		<Loading isLoading={isLoading} color={buttonStyle.loadingColor} size={24} />
	);

	const WrapperComponent = (
		<View style={styles.direction}>
			{icon && <Icon name={icon} style={[styles.icon, iconStyle]} size={24} />}
			{value && <Text style={[styles.text, textStyle]}>{value}</Text>}
		</View>
	);

	return (
		<BaseButton
			style={[styles.container, style]}
			onPressIn={handleOnPressIn}
			onPressOut={handleOnPressOut}
			disabled={disabled || isLoading}
			borderRadius={borderRadius}
			{...props}>
			{isLoading ? LoadingCompontent : WrapperComponent}
		</BaseButton>
	);
};

export default Button;
