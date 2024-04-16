import React, {FC, useCallback, useState} from 'react';
import {ViewStyle, StyleSheet, TextStyle, View} from 'react-native';
import BaseButton, { BaseButtonProps } from '../BaseButton';
import Loading from '../Loading';
import Text from '../Text';
import Icon from '../Icon';
import { getMixedButtonStyles } from './utils';

export enum Type {
	Main = 'main',
	Secondary = 'secondary',
}

export enum Variant {
	Contained = 'contained',
	Outlined = 'outlined',
	Text ='text',
}

export enum Color {
	Primary = 'primary',
	Secondary = 'secondary',
	Success = 'success',
	Error = 'error',
	Warning = 'warning',
	Alert = 'alert',
}

export enum IconPosition {
	Left = 'left',
	Right = 'right',
	Top = 'top',
	Bottom = 'bottom',
}

interface ButtonProps extends BaseButtonProps {
	type?: Type,
	variant?: Variant;
	color?: Color;
	isLoading?: boolean;
	value?: string | null;
	icon?: string;
	iconPosition?: IconPosition;
	disabled?: boolean;
	style?: ViewStyle;
	iconStyle?: TextStyle;
	textStyle?: TextStyle;
	onPressIn?:  () => void;
	onPressOut?:  () => void;
}

const Button: FC<ButtonProps> = ({
	type = Type.Main,
	variant = Variant.Contained,
	color = Color.Primary,
	iconPosition = IconPosition.Left,
	isLoading = false,
	value = null,
	icon = null,
	disabled = false,
	style,
	iconStyle,
	textStyle,
	onPressIn = () => {},
	onPressOut = () => {},
	...props
}) => {
	if(!icon && !value) return null;

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
	const buttonStyle = getMixedButtonStyles(params)
	const styles = StyleSheet.create(buttonStyle);		
	
	const handleOnPressIn = () => {
		setIsPressed(true);
		onPressIn();
	}

	const handleOnPressOut = () => {
		setIsPressed(false);
		onPressOut();
	};

	const LoadingCompontent = (
		<Loading  
			isLoading={isLoading}
			color = {buttonStyle.loadingColor}
			size = {24}
		/> 
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
			onPressIn={useCallback(handleOnPressIn, [setIsPressed, isPressed])}
			onPressOut={useCallback(handleOnPressOut, [setIsPressed, isPressed])}
			disabled={disabled || isLoading}
			borderRadius={borderRadius}
			{...props}>
			{isLoading ? LoadingCompontent : WrapperComponent}
		</BaseButton>
	);
};

export default Button;