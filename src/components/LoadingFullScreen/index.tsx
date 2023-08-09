import React from 'react';
import {StyleSheet, Modal, ModalProps, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Loading from '../Loading';
import Svg from '../Svg';
import {grey} from '../../theme/palette';

interface ILoadingFullScreen extends ModalProps {
	visible: boolean;
	text?: string;
}

const LoadingFullScreen = ({text, visible, ...props}: ILoadingFullScreen) => {
	const hasTextPassed = Boolean(text);
	return (
		<Modal visible={visible} transparent animationType="fade" testID="loading modal" {...props}>
			<BlurView
				style={styles.Blurstyles}
				blurType="light"
				blurAmount={10}
				reducedTransparencyFallbackColor="white"
			/>
			<View style={styles.ContainerStyles}>
				<Loading isLoading={visible}>
					<Svg name="janis-logo" width={36} height={25} />
				</Loading>
				{hasTextPassed && <Text style={styles.TextStyles}>{text}</Text>}
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	Blurstyles: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	ContainerStyles: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	TextStyles: {
		fontSize: 16,
		lineHeight: 24,
		fontFamily: 'Roboto',
		color: grey[700],
		textAlign: 'center',
		fontWeight: '500',
		width: '50%',
		marginTop: 25,
	},
});

export default LoadingFullScreen;
