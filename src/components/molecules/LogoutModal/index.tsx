import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Modal as NativeModal, Pressable} from 'react-native';
import Typography from 'atoms/Typography';
import Button from 'molecules/Button';
import {base, grey} from 'theme/palette';
import {moderateScale, scaledForDevice} from 'scale';

export interface LogoutModalProps {
	visible: boolean;
	onConfirm: () => void;
	onCancel: () => void;
	title?: string;
	message?: string;
	confirmLabel?: string;
	cancelLabel?: string;
	appName?: string;
	testID?: string;
}

const validPadding = scaledForDevice(24, moderateScale);
const validBorderRadius = scaledForDevice(16, moderateScale);
const validTitleMarginBottom = scaledForDevice(12, moderateScale);
const validMessageMarginBottom = scaledForDevice(24, moderateScale);
const validConfirmMarginBottom = scaledForDevice(12, moderateScale);

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.6)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		backgroundColor: base.white,
		borderRadius: validBorderRadius,
		padding: validPadding,
		width: '80%',
		alignItems: 'center',
	},
	title: {
		marginBottom: validTitleMarginBottom,
		textAlign: 'center',
	},
	message: {
		marginBottom: validMessageMarginBottom,
		textAlign: 'center',
	},
	confirmButton: {
		width: '100%',
		marginBottom: validConfirmMarginBottom,
	},
	cancelButton: {
		width: '100%',
	},
});

const LogoutModal: FC<LogoutModalProps> = ({
	visible,
	onConfirm,
	onCancel,
	title = 'Cerrar Sesión',
	message,
	confirmLabel = 'Cerrar Sesión',
	cancelLabel = 'Cancelar',
	appName = 'Janis',
	testID,
}) => {
	const defaultMessage = `¿Estás seguro que querés cerrar sesión en ${appName}?`;

	return (
		<NativeModal
			visible={visible}
			transparent
			animationType="fade"
			onRequestClose={onCancel}
			testID={testID}>
			<Pressable style={styles.overlay} onPress={onCancel}>
				<Pressable style={styles.content} onPress={() => {}}>
					<Typography type="heading" size="medium" style={styles.title}>
						{title}
					</Typography>
					<Typography type="body" size="medium" color={grey[600]} style={styles.message}>
						{message || defaultMessage}
					</Typography>
					<View style={styles.confirmButton}>
						<Button value={confirmLabel} onPress={onConfirm} variant="contained" color="primary" />
					</View>
					<View style={styles.cancelButton}>
						<Button value={cancelLabel} onPress={onCancel} variant="text" color="primary" />
					</View>
				</Pressable>
			</Pressable>
		</NativeModal>
	);
};

export default LogoutModal;
