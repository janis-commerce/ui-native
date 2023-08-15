import React from 'react';
import {StyleSheet, Modal, ModalProps, Text, View} from 'react-native';
import Loading from '../Loading';
import Svg from '../Svg';
import {grey, white} from '../../theme/palette';
import {Names} from '../../ts/interfaces/svgs';

interface ILoadingFullScreen extends ModalProps {
	isLoading: boolean;
	text?: string;
	svgName?: Names;
	spinnerDuration?: number;
}

const styles = StyleSheet.create({
	ContainerStyles: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: white.semiTransparent,
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

const LoadingFullScreen = ({
	text,
	isLoading,
	svgName = 'janis-logo',
	spinnerDuration = 2000,
	...props
}: ILoadingFullScreen) => {
	const hasTextPassed = Boolean(text);
	return (
		<Modal visible={isLoading} transparent animationType="fade" testID="loading modal" {...props}>
			<View style={styles.ContainerStyles}>
				<Loading isLoading={isLoading} duration={spinnerDuration}>
					<Svg name={svgName} width={36} height={25} />
				</Loading>
				{hasTextPassed && <Text style={styles.TextStyles}>{text}</Text>}
			</View>
		</Modal>
	);
};

export default LoadingFullScreen;
