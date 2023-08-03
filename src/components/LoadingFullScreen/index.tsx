import React from 'react';
import {StyleSheet, Modal, ModalProps, Text} from 'react-native';

interface ILoadingFullScreen extends ModalProps {
	text?: string;
}

const LoadingFullScreen = ({text, ...props}: ILoadingFullScreen) => {
	return (
		<Modal
			visible={true}
			transparent
			animationType="fade"
			testID="loading modal"
			style={styles.ModalStyles}
			{...props}>
			<Text style={styles.TextStyles}>{text}</Text>
		</Modal>
	);
};

const styles = StyleSheet.create({
	ModalStyles: {
		width: 100,
		height: 100,
		display: 'flex',
		flexDirection: 'row',
	},
	TextStyles: {
		fontSize: 16,
		fontFamily: 'Roboto',
	},
});

export default LoadingFullScreen;
