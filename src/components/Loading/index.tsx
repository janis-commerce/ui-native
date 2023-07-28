import React, {useEffect, useRef, FC} from 'react';
import {StyleSheet, View, Animated, Easing, ColorValue} from 'react-native';
import {primary, white} from '../../theme/palette';

interface Params {
	duration: number;
	rotationDegree: Animated.Value;
	timingAnimation: (value: number) => number;
}
interface Props {
	isLoading: boolean;
	color?: ColorValue;
	size?: number;
	duration?: number;
	children?: React.ReactNode | null;
}

const startRotationAnimation = ({duration, rotationDegree, timingAnimation}: Params): void =>
	Animated.loop(
		Animated.timing(rotationDegree, {
			duration,
			toValue: 360,
			easing: timingAnimation,
			useNativeDriver: true,
		})
	).start();

const Loading: FC<Props> = ({
	isLoading,
	color = primary.main,
	size = 64,
	duration = 1000,
	children = null,
	...props
}) => {
	const rotationDegree = useRef(new Animated.Value(0)).current;

	const styles = StyleSheet.create({
		container: {
			position: 'relative',
			justifyContent: 'center',
			alignItems: 'center',
			width: size,
			height: size,
		},
		spinner: {
			position: 'absolute',
			width: size,
			height: size,
			borderTopColor: white.dark,
			borderLeftColor: color,
			borderRightColor: color,
			borderBottomColor: color,
			borderRadius: size / 2,
			borderWidth: 3.5,
		},
	});
	const animationSpinnerStyle = {
		transform: [
			{
				rotateZ: rotationDegree.interpolate({
					inputRange: [0, 360],
					outputRange: ['0deg', '360deg'],
				}),
			},
		],
	};

	useEffect(() => {
		if (isLoading) {
			startRotationAnimation({
				duration,
				rotationDegree,
				timingAnimation: Easing.linear,
			});
		}
	}, [isLoading, duration, rotationDegree]);

	if (!isLoading) {
		return <></>;
	}

	return (
		<View style={styles.container} {...props}>
			<Animated.View style={{...styles.spinner, ...animationSpinnerStyle}} />
			{children}
		</View>
	);
};

export default Loading;
