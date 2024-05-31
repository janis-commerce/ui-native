import React, {FC, ReactNode} from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {moderateScale, scaledForDevice} from '../../scale';

export interface BaseButtonProps extends PressableProps {
	borderRadius?: number;
	children?: ReactNode | null;
	pressedStyle?: ReactNode;
	style?: any;
}

const BaseButton: FC<BaseButtonProps> = ({
	borderRadius = 0,
	children = null,
	style,
	pressedStyle,
	...props
}) => {
	if (!children) {
		return null;
	}

	const validateBorderRadius = scaledForDevice(borderRadius, moderateScale);

	const styles = StyleSheet.create({
		container: {
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: validateBorderRadius,
		},
	});

	return (
		<Pressable
			style={({pressed}) => [
				styles.container,
				style,
				pressed && /* istanbul ignore next */ pressedStyle,
			]}
			{...props}>
			{children}
		</Pressable>
	);
};

export default BaseButton;
