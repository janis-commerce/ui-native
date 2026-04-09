import React, {FC, ReactElement, useEffect, useRef} from 'react';
import {
	View,
	Animated,
	Pressable,
	StyleSheet,
	useWindowDimensions,
	ViewStyle,
} from 'react-native';
import {base} from 'theme/palette';

export type DrawerPosition = 'left' | 'right';

export interface DrawerProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactElement;
	position?: DrawerPosition;
	width?: number;
	overlayColor?: string;
	animationDuration?: number;
	style?: ViewStyle;
	testID?: string;
}

const DEFAULT_WIDTH_RATIO = 0.78;

const Drawer: FC<DrawerProps> = ({
	isOpen,
	onClose,
	children,
	position = 'left',
	width,
	overlayColor = 'rgba(0,0,0,0.5)',
	animationDuration = 250,
	style,
	testID,
}) => {
	const {width: screenWidth} = useWindowDimensions();
	const drawerWidth = width || screenWidth * DEFAULT_WIDTH_RATIO;

	const translateX = useRef(
		new Animated.Value(position === 'left' ? -drawerWidth : screenWidth),
	).current;
	const overlayOpacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const openValue = position === 'left' ? 0 : screenWidth - drawerWidth;
		const closedValue = position === 'left' ? -drawerWidth : screenWidth;

		if (isOpen) {
			Animated.parallel([
				Animated.timing(translateX, {
					toValue: openValue,
					duration: animationDuration,
					useNativeDriver: true,
				}),
				Animated.timing(overlayOpacity, {
					toValue: 1,
					duration: animationDuration,
					useNativeDriver: true,
				}),
			]).start();
		} else {
			Animated.parallel([
				Animated.timing(translateX, {
					toValue: closedValue,
					duration: animationDuration,
					useNativeDriver: true,
				}),
				Animated.timing(overlayOpacity, {
					toValue: 0,
					duration: animationDuration,
					useNativeDriver: true,
				}),
			]).start();
		}
	}, [isOpen, translateX, overlayOpacity, position, drawerWidth, screenWidth, animationDuration]);

	return (
		<View
			style={[StyleSheet.absoluteFill, styles.container, !isOpen && styles.hidden]}
			testID={testID}
			pointerEvents={isOpen ? 'auto' : 'none'}>
			<Animated.View
				style={[
					StyleSheet.absoluteFill,
					styles.overlay,
					{backgroundColor: overlayColor, opacity: overlayOpacity},
				]}>
				<Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
			</Animated.View>

			<Animated.View
				style={[
					styles.drawer,
					{width: drawerWidth, transform: [{translateX}]},
					style,
				]}>
				{children}
			</Animated.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		zIndex: 1000,
		elevation: 1000,
	},
	hidden: {
		zIndex: -1,
	},
	overlay: {},
	drawer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		backgroundColor: base.white,
		shadowColor: base.black,
		shadowOffset: {width: 2, height: 0},
		shadowOpacity: 0.25,
		shadowRadius: 8,
		elevation: 16,
	},
});

export default Drawer;
