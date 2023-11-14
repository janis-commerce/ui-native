import React from 'react';
import BaseButton from '../../../src/components/BaseButton';
import {StyleSheet, View, Text} from 'react-native';
import {palette} from '../../../src/theme/palette';

export default {
	title: 'Components/BaseButton',
	argTypes: {},
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: palette.primary.dark,
		marginVertical: 4,
		borderRadius: 20,
		padding: 5,
		width: '100%',
	},
	text: {
		color: palette.base.white,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

const ChildrenComponents = (
	<View style={styles.container}>
		<Text style={styles.text}>Custom Children</Text>
	</View>
);

export const DefaultProps = (props) => <BaseButton {...props} />;

DefaultProps.args = {
	title: 'Aplicar',
	disabled: false,
	icon: 'plus_circle',
	iconRight: false,
	children: ChildrenComponents,
	style: {width: '100%'},
};
