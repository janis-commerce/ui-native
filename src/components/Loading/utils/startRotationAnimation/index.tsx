import {Animated} from 'react-native';

interface Props {
	duration: number;
	rotationDegree: Animated.Value;
	timingAnimation: (value: number) => number;
}

const startRotationAnimation = ({duration, rotationDegree, timingAnimation}: Props): void =>
	Animated.loop(
		Animated.timing(rotationDegree, {
			duration,
			toValue: 360,
			easing: timingAnimation,
			useNativeDriver: true,
		})
	).start();

export default startRotationAnimation;
