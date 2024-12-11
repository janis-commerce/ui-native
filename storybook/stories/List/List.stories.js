import React from 'react';
import List from 'atoms/List';
import {StyleSheet, Text, View} from 'react-native';
import palette from 'theme/palette';

export default {
	title: 'Components/List',
	argTypes: {
		type: {
			options: ['flatList', 'scrollView'],
			control: {type: 'select'},
		},
	},
};

const fakeData = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
	{
		id: '4e8372e6-5c86-4b0c-9f17-1a1d56b9a0e1',
		title: 'Fourth Item',
	},
	{
		id: '8f4c57e8-2763-498d-9c99-720a1f4eae03',
		title: 'Fifth Item',
	},
	{
		id: 'f6fe346e-80b8-4f91-8f27-2a3d49d18e9b',
		title: 'Sixth Item',
	},
	{
		id: '9c2ec5bb-89b1-4a7d-9759-2f7d3187b3a2',
		title: 'Seventh Item',
	},
	{
		id: '2d8c54fb-1a7b-4e5a-946d-789864cf05c3',
		title: 'Eighth Item',
	},
	{
		id: '7e1e9e6d-586b-4b2e-90a2-21f20c1b6b9e',
		title: 'Ninth Item',
	},
	{
		id: 'b4962f5f-e7e1-4d0f-923a-7941e86c7c90',
		title: 'Tenth Item',
	},
];

const styles = StyleSheet.create({
	container: {
		height: 400,
		borderRadius: 6,
		overflow: 'scroll',
	},
	wrapperChildren: {
		padding: 20,
		backgroundColor: palette.secondary.grey.normal,
		marginBottom: 2,
	},
});

const renderComponent = ({item}) => (
	<View key={item.id} style={styles.wrapperChildren}>
		<Text>{item.title}</Text>
	</View>
);

export const DefaultProps = (props) => (
	<List {...props} style={styles.container} keyExtractor={(item) => item.id} />
);

DefaultProps.storyName = 'Default List';

DefaultProps.args = {
	data: fakeData,
	type: 'flatList',
	renderComponent,
};
