import React from 'react';
import {StyleSheet, Modal, ModalProps, Text, View, ViewStyle} from 'react-native';
import Loading from '../Loading';
import Svg from '../Svg';
import {grey, white} from '../../theme/palette';
import {Names} from '../../ts/interfaces/svgs';
import {moderateScale} from '../../scale';

interface ILoadingFullScreen extends ModalProps {
	isLoading: boolean;
	text?: string;
	svgName?: Names;
	spinnerDuration?: number;
	style?: ViewStyle;
}

const styles = StyleSheet.create({
	ContainerStyles: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: white.semiTransparent,
	},
	TextStyles: {
		fontSize: moderateScale(16),
		lineHeight: moderateScale(24),
		fontFamily: 'Roboto',
		color: grey[700],
		textAlign: 'center',
		fontWeight: '500',
		width: '50%',
		marginTop: moderateScale(25),
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
					<Svg name={svgName} width={moderateScale(36)} height={moderateScale(25)} />
				</Loading>
				{hasTextPassed && <Text style={styles.TextStyles}>{text}</Text>}
			</View>
		</Modal>
	);
};

export default LoadingFullScreen;
