import React, {FC, ReactNode} from 'react';
import {Pressable as RNPressable, PressableProps, StyleSheet} from 'react-native';
import {Pressable as GHPressable} from 'react-native-gesture-handler';
import {moderateScale, scaledForDevice} from 'scale';

// Opt-in via `isGestureHandler` for cases where RN core Pressable loses `onPress` inside Modalize/Swipeable/native-stack on Android with new architecture (RN 0.74+).
// Cast to RN Pressable's type so the public API of BaseButton/Button stays compatible — consumers keep typing `onPress` with GestureResponderEvent.
const GestureHandlerPressable = GHPressable as unknown as typeof RNPressable;

export interface BaseButtonProps extends PressableProps {
	borderRadius?: number;
	children?: ReactNode | null;
	pressedStyle?: ReactNode;
	style?: any;
	isGestureHandler?: boolean;
}

const BaseButton: FC<BaseButtonProps> = ({
	borderRadius = 0,
	children = null,
	style,
	pressedStyle,
	isGestureHandler = false,
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

	const Pressable = isGestureHandler ? GestureHandlerPressable : RNPressable;

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
