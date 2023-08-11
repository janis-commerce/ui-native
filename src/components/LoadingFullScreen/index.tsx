import React from 'react';
import {StyleSheet, Modal, ModalProps, Text, View} from 'react-native';
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
	ContainerStyles: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.75)',
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
