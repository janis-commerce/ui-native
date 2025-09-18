import React from 'react';
import Typography from 'atoms/Typography';
import {StyleSheet, View} from 'react-native';
import {palette} from 'theme/palette';
import Icon from 'atoms/Icon';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	errorMessageText: {
		marginLeft: 4,
		color: palette.error.main,
	},
});

const ErrorFallback: React.FC = () => {
	return (
		<View style={styles.container}>
			<Icon name="exclamation_circle" color={palette.error.main} size={20} />
			<Typography type="body" size="medium" style={styles.errorMessageText}>
				Something went wrong.
			</Typography>
		</View>
	);
};

export default ErrorFallback;
