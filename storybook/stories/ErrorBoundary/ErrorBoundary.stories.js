import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Typography from 'atoms/Typography';
import ErrorBoundary from 'components/molecules/ErrorBoundary';
import {palette} from 'theme/palette';

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
		<Typography type="heading" size="large">
			No hay ningún error!
		</Typography>
	</View>
);

const renderItem = ({item}) => {
	return (
		<View style={styles.container}>
			<ErrorBoundary>
				<Text>{item}</Text>
			</ErrorBoundary>
		</View>
	);
};

export const Default = ({error}) => {
	const errorItem = error ? <ThrowError /> : 4;
	const dataToRender = [1, 2, 3, errorItem, 5, 6];

	return (
		<View>
			<FlatList
				data={dataToRender}
				renderItem={renderItem}
				keyExtractor={(item) => item.toString()}
			/>
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
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const renderCustomComponent = (errorMessage) => (
	<View style={styles.box}>
		<Typography type="heading" size="large" color={palette.error.main}>
			Ha ocurrido un error!
		</Typography>
		<Typography type="heading" size="large" color={palette.error.main}>
			{errorMessage}
		</Typography>
		<Typography type="heading" size="medium" color={palette.black.main}>
			Recuerde lo que hizo y trate de no hacerlo nuevamente
		</Typography>
	</View>
);

export const WithCustomComponent = ({error}) => {
	return (
		<View>
			<ErrorBoundary renderErrorComponent={renderCustomComponent}>
				{error ? <ThrowError /> : <SafeComponent />}
			</ErrorBoundary>
		</View>
	);
};

WithCustomComponent.storyName = 'custom component';

WithCustomComponent.args = {
	error: false,
};
