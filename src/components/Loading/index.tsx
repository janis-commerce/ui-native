import React, {useEffect, useRef, FC} from 'react';
import {StyleSheet, View, Animated, Easing, ViewStyle} from 'react-native';
import LoadingSvg from './LoadingSvg';
import {primary} from '../../theme/palette';
import {moderateScale} from '../../scale';

interface Params {
	duration: number;
	rotationDegree: Animated.Value;
	timingAnimation: (value: number) => number;
}
interface Props {
	isLoading: boolean;
	color?: string;
	size?: number;
	duration?: number;
	children?: React.ReactNode | null;
	style?: ViewStyle;
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
	style,
	...props
}) => {
	const rotationDegree = useRef(new Animated.Value(0)).current;

	const styles = StyleSheet.create({
		container: {
			position: 'relative',
			justifyContent: 'center',
			alignItems: 'center',
			width: moderateScale(size),
			height: moderateScale(size),
		},
		spinner: {
			position: 'absolute',
			width: size,
			height: size,
			justifyContent: 'center',
			alignItems: 'center',
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
		<View style={[styles.container, style]} {...props}>
			<LoadingSvg
				style={[styles.spinner, {...animationSpinnerStyle}]}
				size={moderateScale(size)}
				color={color}
			/>
			{children}
		</View>
	);
};

export default Loading;
