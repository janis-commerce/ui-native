import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Easing, ColorValue} from 'react-native';
import startRotationAnimation from './utils/startRotationAnimation';
import {primary, white} from '../../theme/palette';

interface Props {
	isLoading: boolean;
	color?: ColorValue;
	duration?: number;
	children?: React.ReactNode | null;
}

const Loading = ({
	isLoading,
	color = primary.main,
	duration = 1000,
	children = null,
	...props
}: Props) => {
	const rotationDegree = useRef(new Animated.Value(0)).current;
	const {container, spinner} = styles;

	useEffect(() => {
		if (isLoading) {
			startRotationAnimation({
				duration,
				rotationDegree,
				timingAnimation: Easing.linear,
			});
		}
	}, [isLoading, duration, rotationDegree]);

	const dynamicSpinnerStyles = {
		borderLeftColor: color,
		borderRightColor: color,
		borderBottomColor: color,
		transform: [
			{
				rotateZ: rotationDegree.interpolate({
					inputRange: [0, 360],
					outputRange: ['0deg', '360deg'],
				}),
			},
		],
	};

	if (!isLoading) {
		return <></>;
	}

	return (
		<View style={container} {...props}>
			<Animated.View style={{...spinner, ...dynamicSpinnerStyles}} />
			{children}
		</View>
	);
};

const dimentions = {
	width: 64,
	borderWidth: 3.5,
};

const styles = StyleSheet.create({
	container: {
		width: dimentions.width,
		height: dimentions.width,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	spinner: {
		width: dimentions.width,
		height: dimentions.width,
		borderRadius: dimentions.width / 2,
		borderTopColor: white.dark,
		borderWidth: dimentions.borderWidth,
		position: 'absolute',
	},
});

export default Loading;
