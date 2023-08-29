import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const CenterView = ({children}) => {
	return (
		<ScrollView contentContainerStyle={styles.scrollView}>
			<View style={styles.main}>{children}</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		paddingVertical: 25,
		paddingHorizontal: 10,
	},
	main: {
		flex: 1,
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CenterView;
