import React, {useState} from 'react';
import Tabs from '../../../src/components/Tabs';
import {Text, View} from 'react-native';

export default {
	title: 'Components/Tabs',
	argTypes: {
		position: {
			control: {type: 'select'},
			options: {
				Top: 'top',
				Bottom: 'bottom',
			},
		},
	},
};

export const DefaultProps = (props) => {
	const indexChanger = useState(0);

	return <Tabs {...props} indexChanger={indexChanger} />;
};

DefaultProps.storyName = 'Default Tabs';

DefaultProps.args = {
	scenes: [
		{
			title: 'Title 1',
			scene: (
				<View style={{padding: 30}}>
					<Text>View 1</Text>
				</View>
			),
		},
		{
			title: 'Title 2',
			scene: (
				<View style={{padding: 30}}>
					<Text>View 2</Text>
				</View>
			),
		},
	],
	position: 'top',
	scrollContentStyle: {},
	style: {},
};

export const ScrollViewTab = (props) => {
	const indexChanger = useState(0);

	return <Tabs {...props} indexChanger={indexChanger} />;
};

ScrollViewTab.storyName = 'Scroll List';

ScrollViewTab.args = {
	scenes: [
		{
			title: 'Title 1',
			scene: (
				<View style={{padding: 30}}>
					<Text>View 1</Text>
				</View>
			),
		},
		{
			title: 'Title 2',
			scene: (
				<View style={{padding: 30}}>
					<Text>View 2</Text>
				</View>
			),
		},
		{
			title: 'Title 3',
			scene: (
				<View style={{padding: 30}}>
					<Text>View 3</Text>
				</View>
			),
		},
		{
			title: 'Title 4',
			scene: (
				<View style={{padding: 30}}>
					<Text>View 4</Text>
				</View>
			),
		},
		{
			title: 'Title 5',
			scene: (
				<View style={{padding: 30}}>
					<Text>View 5</Text>
				</View>
			),
		},
	],
	position: 'top',
	scrollContentStyle: {},
	style: {},
};
