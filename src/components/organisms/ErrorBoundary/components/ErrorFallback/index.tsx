import React from 'react';
import Collapsible from 'atoms/Collapsible';
import Typography from 'atoms/Typography';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {palette} from 'theme/palette';

interface ErrorFallbackProps {
	error?: string;
	errorDetails?: string;
	isDebug?: boolean;
	errorMessage?: string;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: palette.white.light,
		padding: 30,
		borderRadius: 12,
		margin: 16,
		shadowColor: palette.base.black,
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
	},
	errorMessageText: {
		textAlign: 'center',
		color: palette.error.main,
	},
	showErrorButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: palette.error.main,
		borderRadius: 6,
		marginVertical: 12,
	},
	collapsibleWrapper: {
		marginBottom: 35,
	},
	errorDetails: {
		padding: 10,
		backgroundColor: palette.black.main,
		borderRadius: 8,
		marginVertical: 10,
	},
	heading: {
		marginBottom: 12,
	},
	goBackButtonWrapper: {
		marginTop: 20,
	},
});

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
	error,
	errorDetails,
	isDebug,
	errorMessage,
}) => {
	const ShowErrorDetailsButton = () => {
		return (
			<View style={styles.showErrorButton}>
				<Typography color={palette.base.white}>Show error details</Typography>
			</View>
		);
	};

	const ErrorDetails = ({errorDetails}: any) => {
		return (
			<View style={styles.errorDetails}>
				<Typography color={palette.error.main}>{errorDetails}</Typography>
			</View>
		);
	};

	const data = [
		{
			errorDetails,
		},
	];

	if (errorMessage) {
		return (
			<View style={styles.container}>
				<Typography type="heading" size="large" style={styles.errorMessageText}>
					{errorMessage}
				</Typography>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Typography type="heading" size="large" style={styles.heading}>
				Oops! Something went wrong.
			</Typography>
			{error && <Typography color={palette.error.main}>{error}</Typography>}
			{isDebug && (
				<Collapsible
					wrapperStyle={styles.collapsibleWrapper}
					header={() => ShowErrorDetailsButton()}
					content={ErrorDetails}
					data={data}
					pressableComponent={TouchableOpacity}
				/>
			)}
		</View>
	);
};

export default ErrorFallback;
