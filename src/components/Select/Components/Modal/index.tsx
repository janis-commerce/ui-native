import {FC} from 'react';
import {Modal as ModalComponent, StyleSheet, View} from 'react-native';
import {base, primary, white} from '../../../../theme/palette';
import BaseButton from '../../../BaseButton';
import {DropdownProps} from '../Dropdown';
import React from 'react';

interface ModalProps extends DropdownProps {
	isMulti: boolean;
	modalAcceptText: string;
}

const Modal: FC<ModalProps> = ({show, setShow, isMulti, modalAcceptText, children}) => {
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
			bottom: 20,
			minWidth: 270,
			paddingTop: 24,
			paddingBottom: 12,
			paddingLeft: 20,
			paddingRight: 20,
			backgroundColor: base.white,
			elevation: 5,
		},
		buttonWrapper: {
			flexDirection: 'row',
			justifyContent: 'flex-end',
			flexWrap: 'wrap',
			left: 8,
			top: 4,
		},
		button: {
			backgroundColor: base.white,
		},
		buttonText: {
			color: primary.main,
			fontSize: 13,
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
							<BaseButton
								title={modalAcceptText}
								iconRight={false}
								pressedColor={white.main}
								style={styles.button}
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
