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
import {verticalScale} from 'scale';
import {palette} from 'theme/palette';

interface UIModalProps extends NativeModalProps {
	customClose?: () => void;
	showCloseButton?: boolean;
	fullScreen?: boolean;
	modalContainerStyle?: ViewStyle;
}

interface RefProps {
	isOpen?: boolean;
	showModal?: () => void;
	closeModal?: () => void;
}

const Modal = forwardRef<RefProps, UIModalProps>(
	(
		{
			children = null,
			customClose = undefined,
			showCloseButton = false,
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
			if (!customClose) {
				return setIsVisible(false);
			}

			customClose();
		};

		useImperativeHandle(ref, () => ({
			get isOpen() {
				return isVisible;
			},
			openModal: () => setIsVisible(true),
			closeModal: () => setIsVisible(false),
		}));

		const styles = StyleSheet.create({
			Overlay: {
				flex: 1,
				backgroundColor: fullScreen ? 'transparent' : 'rgba(0,0,0,0.6)',
				justifyContent: 'center',
				alignItems: 'center',
			},
			ModalWrapper: {
				backgroundColor: palette.base.white,
				alignItems: 'center',
				justifyContent: 'center',
				elevation: 12,
				minWidth: horizontalScale(50),
				width: horizontalScale(280),
				marginHorizontal: horizontalScale(20),
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
			CloseButton: {
				position: 'absolute',
				top: verticalScale(5),
				right: horizontalScale(5),
				zIndex: 3,
			},
		});

		return (
			<NativeModal
				visible={isVisible}
				transparent={transparent}
				onRequestClose={handleClose}
				animationType={animationType}
				{...props}>
				<View style={styles.Overlay}>
					{!fullScreen && <Pressable style={StyleSheet.absoluteFill} onPress={handleClose} />}
					<View
						style={
							fullScreen
								? styles.FullScreen
								: [styles.ModalWrapper, styles.Shadow, modalContainerStyle]
						}>
						{renderCloseButton && (
							<Pressable onPress={handleClose} style={styles.CloseButton}>
								<Icon name="cross_light" size={24} color={palette.black.main} />
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
