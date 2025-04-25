import React, {useRef} from 'react';
import Modal from 'atoms/Modal';
import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';

const text =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		marginVertical: 15,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#2196F3',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
	},
	fullScreenView: {
		marginHorizontal: 10,
		paddingBottom: 10,
	},
});

const OpenModal = ({...props}) => {
	return (
		<Pressable style={[styles.button, styles.buttonOpen]} {...props}>
			<Text style={styles.textStyle}>Show Modal</Text>
		</Pressable>
	);
};

export const DefaultModal = ({...props}) => {
	const ModalRef = useRef(null);

	const handleOpenModal = () => {
		ModalRef.current.openModal();
	};

	const handleCloseModal = () => {
		ModalRef.current.closeModal();
	};

	return (
		<View style={styles.centeredView}>
			<OpenModal onPress={handleOpenModal} />
			<Modal ref={ModalRef} {...props}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>Hello World!</Text>
					<Pressable style={[styles.button, styles.buttonClose]} onPress={handleCloseModal}>
						<Text style={styles.textStyle}>Hide Modal</Text>
					</Pressable>
				</View>
			</Modal>
		</View>
	);
};

export const FullScreenModal = ({...props}) => {
	const ModalRef = useRef(null);

	const handleOpenModal = () => {
		ModalRef.current.openModal();
	};

	const handleCloseModal = () => {
		ModalRef.current.closeModal();
	};

	return (
		<View style={styles.centeredView}>
			<OpenModal onPress={handleOpenModal} />
			<Modal ref={ModalRef} {...props}>
				<ScrollView contentContainerStyle={styles.fullScreenView}>
					<Text style={styles.modalText}>{text + text}</Text>
					<Pressable style={[styles.button, styles.buttonClose]} onPress={handleCloseModal}>
						<Text style={styles.textStyle}>Hide Modal</Text>
					</Pressable>
				</ScrollView>
			</Modal>
		</View>
	);
};

DefaultModal.args = {
	animationType: 'fade',
	transparent: true,
	canClose: true,
};

FullScreenModal.args = {
	animationType: 'fade',
	showCloseButton: true,
	canClose: true,
	fullScreen: true,
};

export default {
	title: 'Components/Modal',
	argTypes: {
		animationType: {
			control: {
				type: 'select',
			},
			options: ['fade', 'slide', 'none'],
		},
	},
};
