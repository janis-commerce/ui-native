import React, {FC, ReactNode} from 'react';
import {Pressable, PressableProps, StyleSheet, ViewStyle} from 'react-native';
import {moderateScale, horizontalScale, scaledForDevice} from '../../scale';

export interface BaseButtonProps extends PressableProps {
	borderRadius?: number;
	children?: ReactNode | null;
	style?: any;
}

const BaseButton: FC<BaseButtonProps> = ({
	borderRadius = 50,
	children = null,
	style,
	...props
}) => {
	if(!children) return null;

	const validatePaddingVertical = scaledForDevice(10, moderateScale);
	const validatePaddingHorizontal = scaledForDevice(16, horizontalScale);
	const validateBorderRadius = scaledForDevice(borderRadius, moderateScale);

	const styles = StyleSheet.create({
		container: {
			alignItems: 'center',
			justifyContent: 'center',
			paddingHorizontal: validatePaddingHorizontal,
			paddingVertical: validatePaddingVertical,
			borderRadius: validateBorderRadius,
		},
	});

	return (
		<Pressable style={[styles.container, style]} {...props}>{children}</Pressable>
	);
};

export default BaseButton;
