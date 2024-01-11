import React from 'react';
import {StyleSheet, View} from 'react-native';

const CenterView = ({children}) => {
	return <View style={styles.main}>{children}</View>;
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 25,
		paddingHorizontal: 10,
	},
});

export default CenterView;
