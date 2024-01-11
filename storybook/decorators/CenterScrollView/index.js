import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

const CenterScrollView = ({children}) => {
	return (
		<ScrollView>
			<View style={styles.main}>{children}</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		display: 'flex',
		flexWrap: 'wrap',
	},
});

export default CenterScrollView;
