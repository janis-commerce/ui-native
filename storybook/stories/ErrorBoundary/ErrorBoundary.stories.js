import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ErrorBoundary from 'components/organisms/ErrorBoundary';

export default {
	title: 'Components/ErrorBoundary',
	argTypes: {
		error: {
			control: {type: 'boolean'},
		},
	},
};

const ThrowError = () => {
	throw new Error('Something went wrong!');
};

const SafeComponent = () => (
	<View style={styles.box}>
		<Text style={styles.text}>No hay ningún error!</Text>
	</View>
);

export const Default = ({error}) => {
	return (
		<View>
			<ErrorBoundary>{error ? <ThrowError /> : <SafeComponent />}</ErrorBoundary>
		</View>
	);
};

Default.storyName = 'default';

Default.args = {
	error: false,
};

const styles = StyleSheet.create({
	box: {
		padding: 20,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
		color: 'black',
	},
});
