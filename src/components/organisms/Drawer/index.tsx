import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';
import {Animated, Modal, Pressable, StyleSheet, useWindowDimensions, ViewStyle} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {base} from 'theme/palette';
import {composeTestID} from 'utils';

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
	const [isRendered, setIsRendered] = useState(isOpen);

	const translateX = useRef(
		new Animated.Value(position === 'left' ? -drawerWidth : screenWidth)
	).current;
	const overlayOpacity = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const openValue = position === 'left' ? 0 : screenWidth - drawerWidth;
		const closedValue = position === 'left' ? -drawerWidth : screenWidth;

		const slideTo = (translateTarget: number, opacityTarget: number) =>
			Animated.parallel([
				Animated.timing(translateX, {
					toValue: translateTarget,
					duration: animationDuration,
					useNativeDriver: true,
				}),
				Animated.timing(overlayOpacity, {
					toValue: opacityTarget,
					duration: animationDuration,
					useNativeDriver: true,
				}),
			]);

		if (isOpen) {
			setIsRendered(true);
		}

		const animation = isOpen ? slideTo(openValue, 1) : slideTo(closedValue, 0);
		animation.start(({finished}) => {
			if (finished && !isOpen) {
				setIsRendered(false);
			}
		});

		return () => animation.stop();
	}, [isOpen, translateX, overlayOpacity, position, drawerWidth, screenWidth, animationDuration]);

	return (
		<Modal
			visible={isRendered}
			transparent
			animationType="none"
			onRequestClose={onClose}
			testID={testID}>
			<SafeAreaProvider>
				<Animated.View
					style={[
						StyleSheet.absoluteFill,
						{backgroundColor: overlayColor, opacity: overlayOpacity},
					]}>
					<Pressable
						style={StyleSheet.absoluteFill}
						onPress={onClose}
						testID={composeTestID(testID, 'overlay')}
					/>
				</Animated.View>

				<Animated.View
					style={[styles.drawer, {width: drawerWidth, transform: [{translateX}]}, style]}
					testID={composeTestID(testID, 'panel')}>
					<SafeAreaView edges={['bottom']} style={styles.content}>
						{children}
					</SafeAreaView>
				</Animated.View>
			</SafeAreaProvider>
		</Modal>
	);
};

const styles = StyleSheet.create({
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
	content: {
		flex: 1,
	},
});

export default Drawer;
