import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const DeprecationNotice = ({children}) => {
	return (
		<View style={styles.main}>
			<View style={styles.deprecationCard}>
				<Image
					style={styles.deprecationImage}
					source={{
						uri: 'https://static.vecteezy.com/system/resources/thumbnails/012/042/301/small_2x/warning-sign-icon-transparent-background-free-png.png',
					}}
				/>

				<Text style={styles.deprecationText}>This component is going to be deprecated soon.</Text>
			</View>
			<View style={styles.story}>{children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
	deprecationCard: {
		display: 'flex',
		flexDirection: 'row',
		borderColor: '#2979FF',
		backgroundColor: '#2979FF',
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
	deprecationImage: {
		width: 20,
		height: 20,
	},
	deprecationText: {
		color: 'white',
	},
	story: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
	},
});

export default DeprecationNotice;
