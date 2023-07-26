import {Animated} from 'react-native';

interface Params {
	duration: number;
	rotationDegree: Animated.Value;
	timingAnimation: (value: number) => number;
}

const startRotationAnimation = ({duration, rotationDegree, timingAnimation}: Params): void =>
	Animated.loop(
		Animated.timing(rotationDegree, {
			duration,
			toValue: 360,
			easing: timingAnimation,
			useNativeDriver: false,
		})
	).start();

export default startRotationAnimation;
