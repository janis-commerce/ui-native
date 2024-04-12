import React, {FC, useCallback, useState} from 'react';
import {ViewStyle, StyleSheet, TextStyle, View} from 'react-native';
import {moderateScale, scaledForDevice} from '../../scale';
import BaseButton, { BaseButtonProps } from '../BaseButton';
import Loading from '../Loading';
import {palette} from '../../theme/palette';
import Text from '../Text';
import Icon from '../Icon';
import { getMixedButtonStyles } from './utils';

export enum Types {
	Main = 'main',
	Secondary = 'secondary',
}

export enum Variants {
	Contained = 'contained',
	Outlined = 'outlined',
	Text ='text',
}

export enum Colors {
	Primary = 'primary',
	Secondary = 'secondary',
	Black = 'black',
	Success = 'success',
	Error = 'error',
	Warning = 'warning',
	Alert = 'alert',
}

export enum IconPosition {
	Left = 'left',
	Right = 'rigth',
	Top = 'top',
	Bottom = 'bottom',
}

interface ButtonProps extends BaseButtonProps {
	type: Types,
	variant: Variants;
	color: Colors;
	isLoading?: boolean;
	value?: string | null;
	icon?: string;
	iconPosition?: IconPosition;
	disabled?: boolean;
	borderRadius?: number;
	style?: ViewStyle;
	iconStyle?: ViewStyle;
	textStyle?: TextStyle;
	pressedColor?: string;
	onPressIn?:  () => void;
	onPressOut?:  () => void;
}

const Button: FC<ButtonProps> = ({
	type = Types.Main,
	variant = Variants.Contained,
	color = Colors.Primary,
	iconPosition = IconPosition.Left,
	isLoading = false,
	value = null,
	icon = null,
	disabled = false,
	style,
	iconStyle,
	textStyle,
	pressedColor,
	onPressIn = () => {},
	onPressOut = () => {},
	...props
}) => {
	const [isPressed, setIsPressed] = useState<Boolean>(false);

	const params = {
		type,
		variant,
		color,
		iconPosition,
		isLoading,
		disabled,
	};
	const buttonStyle = getMixedButtonStyles(params)

	const pressedStyle = isPressed ? palette.primary.dark : palette.primary.main;
	const bgColor = !disabled ? pressedStyle : palette.grey[200];
	
	const validateFontSize = scaledForDevice(14, moderateScale);	


	const styles = StyleSheet.create({
		container: {
			backgroundColor: bgColor,
		},
		wrapperDirection: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center'
		},
		icon: {
			color: palette.base.white,
		},
		text: {
			fontSize: validateFontSize,
			fontWeight: '500',
			textAlign: 'center',
			color: palette.base.white,
		},
	});		
	
	const handleOnPressIn = () => {
		setIsPressed(true)
		onPressIn();
	}

	const handleOnPressOut = () => {
		setIsPressed(false);
		onPressOut();
	};

	const LoadingCompontent = (
		<Loading  
			isLoading={isLoading}
			color = {palette.primary.light}
			size = {24}
		/> 
	);

	const ButtonWrapper = (
		<View style={styles.wrapperDirection}>
			{icon && <Icon name={icon} style={[styles.icon, iconStyle]} size={24} />}
			{value && <Text style={[styles.text, textStyle]}>{value}</Text>}
		</View>
	);

	return (
		<BaseButton 
			style={[styles.container, style]}
			onPressIn={useCallback(handleOnPressIn, [setIsPressed, isPressed])}
			onPressOut={useCallback(handleOnPressOut, [setIsPressed, isPressed])}
			{...props}>
			{isLoading ? LoadingCompontent : ButtonWrapper}
		</BaseButton>
	);
};

export default Button;