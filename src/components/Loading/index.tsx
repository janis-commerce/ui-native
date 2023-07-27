import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Easing, ColorValue} from 'react-native';
import {primary, white} from '../../theme/palette';

const dimensions = {
	width: 64,
	borderWidth: 3.5,
};

interface Params {
	duration: number;
	rotationDegree: Animated.Value;
	timingAnimation: (value: number) => number;
}
interface Props {
	isLoading: boolean;
	color?: ColorValue;
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

const Loading = ({
	isLoading,
	color = primary.main,
	duration = 1000,
	children = null,
	...props
}: Props) => {
	const rotationDegree = useRef(new Animated.Value(0)).current;

	const styles = StyleSheet.create({
		container: {
			width: dimensions.width,
			height: dimensions.width,
			justifyContent: 'center',
			alignItems: 'center',
			position: 'relative',
		},
		spinner: {
			width: dimensions.width,
			height: dimensions.width,
			borderRadius: dimensions.width / 2,
			borderTopColor: white.dark,
			borderWidth: dimensions.borderWidth,
			position: 'absolute',
			borderLeftColor: color,
			borderRightColor: color,
			borderBottomColor: color,
		},
	});
	const spinnerAnimation = {
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
		return null;
	}

	return (
		<View style={styles.container} {...props}>
			<Animated.View style={{...styles.spinner, ...spinnerAnimation}} />
			{children}
		</View>
	);
};

export default Loading;
