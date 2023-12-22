/* istanbul ignore file */
import React, {FC, useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing, ViewStyle} from 'react-native';
import {palette} from '../../theme/palette';
import {getBarColor, getPercentage} from './utils';
import {moderateScale, scaledForDevice} from '../../scale';

interface ProgressBarProps {
	value: number;
	totalValue: number;
	isAnimated?: boolean;
	duration?: number;
	style?: ViewStyle;
}

const ProgressBar: FC<ProgressBarProps> = ({
	value,
	totalValue,
	isAnimated = false,
	duration = 300,
	style,
	...props
}) => {
	const {white} = palette;

	const widthAnimation = useRef(new Animated.Value(0)).current;

	const availableTimeDuration = isAnimated && typeof duration === 'number';
	const timeDuration = availableTimeDuration ? duration : 0;

	const percentValue = getPercentage(value, totalValue);
	const colorValue = getBarColor(percentValue);

	useEffect(() => {
		if (isAnimated) {
			Animated.timing(widthAnimation, {
				toValue: percentValue,
				duration: timeDuration,
				easing: Easing.linear,
				useNativeDriver: false,
			}).start();
		} else {
			widthAnimation.setValue(percentValue);
		}
	}, [isAnimated, percentValue, timeDuration, widthAnimation]);

	const validHeight = scaledForDevice(4, moderateScale);
	const validBorderRadius = scaledForDevice(2, moderateScale);
	const validMarginTop = scaledForDevice(12, moderateScale);

	const styles = StyleSheet.create({
		container: {
			position: 'relative',
			width: '100%',
			height: validHeight,
			marginTop: validMarginTop,
			borderRadius: validBorderRadius,
			backgroundColor: white.main,
		},
		fill: {
			position: 'absolute',
			left: 0,
			height: validHeight,
			borderRadius: validBorderRadius,
			zIndex: 10,
			backgroundColor: colorValue,
		},
	});
	const animationProgress = {
		width: widthAnimation.interpolate({
			inputRange: [0, 100],
			outputRange: ['0%', '100%'],
		}),
	};

	return (
		<View style={[styles.container, style]} {...props}>
			<Animated.View style={[styles.fill, animationProgress]} />
		</View>
	);
};

export default ProgressBar;
