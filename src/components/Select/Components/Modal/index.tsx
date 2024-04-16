import React, {FC} from 'react';
import {Modal as ModalComponent, StyleSheet, View} from 'react-native';
import {base} from '../../../../theme/palette';
import {DropdownProps} from '../Dropdown';
import {moderateScale, scaledForDevice} from '../../../../scale';
import Button, {Type, Variant} from '../../../Button';

interface ModalProps extends DropdownProps {
	isMulti: boolean;
	modalAcceptText: string;
}

const Modal: FC<ModalProps> = ({show, setShow, isMulti, modalAcceptText, children}) => {
	const validBottom = scaledForDevice(20, moderateScale);
	const validMinWidth = scaledForDevice(270, moderateScale);
	const validPaddingTop = scaledForDevice(24, moderateScale);
	const validPaddingBottom = scaledForDevice(12, moderateScale);
	const validPaddingHorizontal = scaledForDevice(20, moderateScale);
	const validLeft = scaledForDevice(8, moderateScale);
	const validTop = scaledForDevice(4, moderateScale);

	const styles = StyleSheet.create({
		background: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: '100%',
			backgroundColor: '#0009',
		},
		containerModal: {
			justifyContent: 'space-between',
		},
		contentWrapper: {
			bottom: validBottom,
			minWidth: validMinWidth,
			paddingTop: validPaddingTop,
			paddingBottom: validPaddingBottom,
			paddingLeft: validPaddingHorizontal,
			paddingRight: validPaddingHorizontal,
			backgroundColor: base.white,
			elevation: 5,
		},
		buttonWrapper: {
			flexDirection: 'row',
			justifyContent: 'flex-end',
			flexWrap: 'wrap',
			left: validLeft,
			top: validTop,
		},
		buttonText: {
			fontWeight: '700',
			textTransform: 'uppercase',
		},
	});

	return (
		<ModalComponent animationType="fade" transparent visible={show}>
			<View style={styles.background}>
				<View style={styles.contentWrapper}>
					<View style={styles.containerModal}>{children}</View>
					{isMulti && (
						<View style={styles.buttonWrapper}>
							<Button
								value={modalAcceptText}
								variant={Variant.Text}
								type={Type.Secondary}
								textStyle={styles.buttonText}
								onPress={() => setShow(false)}
							/>
						</View>
					)}
				</View>
			</View>
		</ModalComponent>
	);
};

export default Modal;
