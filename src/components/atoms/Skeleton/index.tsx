import React, {FC, useEffect, useRef} from 'react';
import {Animated, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {grey} from 'theme/palette';

export interface SkeletonProps {
	style?: StyleProp<ViewStyle>;
	testID?: string;
}

const SKELETON_MIN_OPACITY = 0.4;
const SKELETON_PULSE_DURATION_MS = 800;

const styles = StyleSheet.create({
	skeleton: {
		backgroundColor: grey[200],
	},
});

const pulseTo = (opacity: Animated.Value, toValue: number) =>
	Animated.timing(opacity, {toValue, duration: SKELETON_PULSE_DURATION_MS, useNativeDriver: true});

const Skeleton: FC<SkeletonProps> = ({style, testID}) => {
	const opacity = useRef(new Animated.Value(SKELETON_MIN_OPACITY)).current;

	useEffect(() => {
		const animation = Animated.loop(
			Animated.sequence([pulseTo(opacity, 1), pulseTo(opacity, SKELETON_MIN_OPACITY)])
		);
		animation.start();
		return () => animation.stop();
	}, [opacity]);

	return <Animated.View testID={testID} style={[styles.skeleton, style, {opacity}]} />;
};

export default Skeleton;
