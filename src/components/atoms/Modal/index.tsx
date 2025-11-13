import Icon from 'atoms/Icon';
import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {
	Modal as NativeModal,
	ModalProps as NativeModalProps,
	Pressable,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native';
import {horizontalScale} from 'scale';
import {verticalScale, moderateScale} from 'scale';
import {palette} from 'theme/palette';

export interface UIModalProps extends NativeModalProps {
	oncloseCallback?: () => void;
	showCloseButton?: boolean;
	fullScreen?: boolean;
	modalContainerStyle?: ViewStyle;
	canClose?: boolean;
}

export interface ModalMethods {
	open?: () => void;
	close?: () => void;
}

const styles = StyleSheet.create({
	Overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.6)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	ModalWrapper: {
		backgroundColor: palette.base.white,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 12,
		minWidth: horizontalScale(50),
		marginHorizontal: horizontalScale(24),
		borderRadius: verticalScale(18),
		zIndex: 1,
	},
	Shadow: {
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
	},
	FullScreen: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: palette.base.white,
		zIndex: 2,
	},
	HeaderWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		zIndex: 3,
		minHeight: verticalScale(52),
		backgroundColor: palette.base.white,
	},
	CloseButton: {
		position: 'absolute',
		top: moderateScale(12),
		right: moderateScale(12),
	},
});

const Modal = forwardRef<ModalMethods, UIModalProps>(
	(
		{
			children = null,
			oncloseCallback = undefined,
			showCloseButton = false,
			canClose = true,
			animationType = 'fade',
			transparent = true,
			fullScreen = false,
			modalContainerStyle = {},
			...props
		}: UIModalProps,
		ref
	) => {
		const [isVisible, setIsVisible] = useState(false);
		const renderCloseButton = fullScreen && showCloseButton;

		const handleClose = () => {
			if (oncloseCallback) {
				oncloseCallback();
			}
			setIsVisible(false);
		};

		useImperativeHandle(ref, () => ({
			open: () => setIsVisible(true),
			close: () => setIsVisible(false),
		}));

		return (
			<NativeModal
				visible={isVisible}
				transparent={transparent}
				animationType={animationType}
				{...props}
				{...(canClose && {
					onRequestClose: handleClose,
				})}>
				<View style={styles.Overlay}>
					{!fullScreen && (
						<Pressable style={StyleSheet.absoluteFill} disabled={!canClose} onPress={handleClose} />
					)}
					<View
						style={
							fullScreen
								? styles.FullScreen
								: [styles.ModalWrapper, styles.Shadow, modalContainerStyle]
						}>
						{renderCloseButton && canClose && (
							<Pressable
								onPress={handleClose}
								style={styles.HeaderWrapper}
								accessibilityLabel="Close modal"
								accessibilityRole="button">
								<Icon
									name="cross_light"
									size={24}
									color={palette.black.main}
									style={styles.CloseButton}
								/>
							</Pressable>
						)}
						{children}
					</View>
				</View>
			</NativeModal>
		);
	}
);

export default Modal;
