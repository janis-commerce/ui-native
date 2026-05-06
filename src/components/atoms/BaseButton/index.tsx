import React, {FC, ReactNode} from 'react';
import {Pressable as RNPressable, PressableProps, StyleSheet} from 'react-native';
import {Pressable as GHPressable} from 'react-native-gesture-handler';
import {moderateScale, scaledForDevice} from 'scale';

// Use gesture-handler's Pressable to fix `onPress` not firing inside Modalize/Swipeable/native-stack on Android with new architecture (RN 0.74+).
// Cast back to RN Pressable's type so the public API of BaseButton/Button stays compatible — consumers keep typing `onPress` with GestureResponderEvent.
const Pressable = GHPressable as unknown as typeof RNPressable;

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
