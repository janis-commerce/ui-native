import React from 'react';
import {StyleSheet, Modal, ModalProps, Text, View, ViewStyle} from 'react-native';
import Loading from 'atoms/Loading';
import Svg from 'atoms/Svg';
import {grey, white} from 'theme/palette';
import {Names} from 'ts/interfaces/svgs';
import {moderateScale, horizontalScale, scaledForDevice} from 'scale';

interface ILoadingFullScreen extends ModalProps {
	isLoading: boolean;
	text?: string;
	svgName?: Names;
	spinnerDuration?: number;
	style?: ViewStyle;
}

const validFontSize = scaledForDevice(16, moderateScale);
const validLineHeight = scaledForDevice(24, moderateScale);
const validMarginTop = scaledForDevice(25, moderateScale);
const validWidth = scaledForDevice(36, horizontalScale);
const validHeight = scaledForDevice(25, moderateScale);

const styles = StyleSheet.create({
	ContainerStyles: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: white.semiTransparent,
	},
	TextStyles: {
		fontSize: validFontSize,
		lineHeight: validLineHeight,
		fontFamily: 'Roboto',
		color: grey[700],
		textAlign: 'center',
		fontWeight: '500',
		width: '50%',
		marginTop: validMarginTop,
	},
});

const LoadingFullScreen = ({
	text,
	isLoading,
	svgName = 'janis-logo',
	spinnerDuration = 2000,
	style,
	...props
}: ILoadingFullScreen) => {
	const hasTextPassed = typeof text === 'string' && Boolean(text);
	return (
		<Modal visible={isLoading} transparent animationType="fade" testID="loading modal" {...props}>
			<View style={[styles.ContainerStyles, style]}>
				<Loading isLoading={isLoading} duration={spinnerDuration}>
					<Svg name={svgName} width={validWidth} height={validHeight} />
				</Loading>
				{hasTextPassed && <Text style={styles.TextStyles}>{text}</Text>}
			</View>
		</Modal>
	);
};

export default LoadingFullScreen;
