import React, {useRef, useState} from 'react';
import DatePicker from 'atoms/DatePicker/DatePicker';
import DatePickerModal from 'atoms/DatePicker/DatePickerModal';
import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		borderRadius: 20,
		padding: 10,
		marginTop: 16,
		backgroundColor: '#2979FF',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	value: {
		marginTop: 16,
		textAlign: 'center',
	},
});

export const Inline = ({...props}) => {
	const [date, setDate] = useState(new Date());

	if (Platform.OS === 'web') {
		return (
			<Text style={styles.value}>DatePicker solo disponible en Android/iOS (módulo nativo)</Text>
		);
	}

	return (
		<View style={styles.centeredView}>
			<DatePicker {...props} date={date} onDateChange={setDate} />
			<Text style={styles.value}>{date.toISOString()}</Text>
		</View>
	);
};

export const Modal = ({...props}) => {
	const datePickerRef = useRef(null);
	const [date, setDate] = useState(null);

	if (Platform.OS === 'web') {
		return (
			<Text style={styles.value}>DatePicker solo disponible en Android/iOS (módulo nativo)</Text>
		);
	}

	return (
		<View style={styles.centeredView}>
			<Pressable style={styles.button} onPress={() => datePickerRef.current?.open()}>
				<Text style={styles.textStyle}>Seleccionar fecha</Text>
			</Pressable>
			<Text style={styles.value}>{date ? date.toISOString() : 'Sin fecha seleccionada'}</Text>
			<DatePickerModal {...props} ref={datePickerRef} date={date} onConfirm={setDate} />
		</View>
	);
};

Inline.args = {
	mode: 'date',
	theme: 'auto',
};

Modal.args = {
	mode: 'date',
	theme: 'auto',
	title: 'Seleccioná una fecha',
	confirmText: 'Confirmar',
	cancelText: 'Cancelar',
};

export default {
	title: 'Components/DatePicker',
	argTypes: {
		mode: {
			control: {type: 'select'},
			options: ['date', 'time', 'datetime'],
		},
		theme: {
			control: {type: 'select'},
			options: ['light', 'dark', 'auto'],
		},
	},
};
