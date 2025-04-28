import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from 'atoms/Typography';
import ErrorBoundary from 'components/organisms/ErrorBoundary';
import {palette} from 'theme/palette';

export default {
	title: 'Components/ErrorBoundary',
	argTypes: {
		isDebug: {
			control: {type: 'boolean'},
		},
		error: {
			control: {type: 'boolean'},
		},
		errorMessage: {
			control: {type: 'text'},
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

export const Default = ({error, isDebug, errorMessage}) => {
	return (
		<View>
			<ErrorBoundary isDebug={isDebug} errorMessage={errorMessage}>
				{error ? <ThrowError /> : <SafeComponent />}
			</ErrorBoundary>
		</View>
	);
};

Default.storyName = 'default';

Default.args = {
	error: false,
	isDebug: true,
	errorMessage: '',
};

const styles = StyleSheet.create({
	box: {
		padding: 20,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
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

export const WithCustomComponent = ({error, isDebug, errorMessage}) => {
	return (
		<View>
			<ErrorBoundary
				isDebug={isDebug}
				errorMessage={errorMessage}
				renderErrorComponent={renderCustomComponent}>
				{error ? <ThrowError /> : <SafeComponent />}
			</ErrorBoundary>
		</View>
	);
};

WithCustomComponent.storyName = 'custom component';

WithCustomComponent.args = {
	error: false,
	isDebug: true,
	errorMessage: '',
};
