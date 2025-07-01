import React, {useRef} from 'react';
import ProductDetail from 'organisms/ProductDetail';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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

const OpenDetail = ({...props}) => {
	return (
		<Pressable style={[styles.button, styles.buttonOpen]} {...props}>
			<Text style={styles.textStyle}>Open Detail</Text>
		</Pressable>
	);
};

export const ModalDetail = ({...props}) => {
	const ModalRef = useRef();

	const handleOpenModal = () => {
		ModalRef.current.open();
	};

	return (
		<View style={styles.centeredView}>
			<OpenDetail onPress={handleOpenModal} />
			<ProductDetail componentType="modal" ref={ModalRef} showCloseButton {...props} />
		</View>
	);
};

export const SwipeDetail = ({...props}) => {
	const SwipeRef = useRef();

	const handleOpenModal = () => {
		SwipeRef.current.expand();
	};

	return (
		<GestureHandlerRootView style={StyleSheet.absoluteFill}>
			<OpenDetail onPress={handleOpenModal} />
			<ProductDetail componentType="swipe" ref={SwipeRef} {...props} />
		</GestureHandlerRootView>
	);
};

ModalDetail.args = {
	image: 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4',
	refId: '4AR6353-010',
	productName: 'Campera de Hombre H&G Softshell Estampado PRINT Gris Melange Talle XXL',
	brand: 'H&G',
};

SwipeDetail.args = {
	image: 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4',
	refId: '4AR6353-010',
	productName: 'Campera de Hombre H&G Softshell Estampado PRINT Gris Melange Talle XXL',
	brand: 'H&G',
};

export default {
	title: 'Components/ProductDetail',
};
