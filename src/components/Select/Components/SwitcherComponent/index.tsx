import React, {FC, ReactNode} from 'react';
import {Modal, Pressable, StyleSheet, View} from 'react-native';
import {DropdownMeasures, VariantOptions} from '../..';

interface SwitcherProps {
	variant: VariantOptions;
	show: boolean;
	setShow: (isShowed: boolean) => void;
	children: ReactNode;
	measures: DropdownMeasures;
}
interface DropdownProps {
	show: boolean;
	setShow: (isShowed: boolean) => void;
	children: ReactNode;
	measures: DropdownMeasures;
}
interface ModalProps extends DropdownProps {}

const DropdownComponent: FC<DropdownProps> = ({show, setShow, children, measures}) => {
	const styles = StyleSheet.create({
		containerModal: {
			position: 'absolute',
			width: measures.width,
			top: measures.pageY,
			left: measures.pageX,
			height: '100%',
		},
		backgroundModal: {
			width: '100%',
			height: '100%',
		},
	});

	return (
		<Modal transparent visible={show}>
			<Pressable style={styles.backgroundModal} onPress={() => setShow(false)}>
				<View style={styles.containerModal}>{children}</View>
			</Pressable>
		</Modal>
	);
};

const ModalComponent: FC<ModalProps> = ({show, setShow, children, measures}) => {
	const styles = StyleSheet.create({
		containerModal: {
			position: 'absolute',
			width: measures.width,
			top: measures.pageY,
			left: measures.pageX,
			height: '100%',
		},
		backgroundModal: {
			width: '100%',
			height: '100%',
		},
		container: {
			width: '100%',
			padding: 8,
		},
	});

	console.log('Modal');

	return (
		<Modal transparent visible={show}>
			<Pressable style={styles.backgroundModal} onPress={() => setShow(false)}>
				<View style={styles.containerModal}>{children}</View>
			</Pressable>
		</Modal>
	);
};

const components = {
	Dropdown: DropdownComponent,
	Modal: ModalComponent,
};

const SwitcherComponent: FC<SwitcherProps> = ({variant, show, setShow, children, measures}) =>
	components[variant]({show, setShow, children, measures});

export default SwitcherComponent;
