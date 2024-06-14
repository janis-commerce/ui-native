import React, {useState} from 'react';
import Tabs from '../../../src/components/Tabs';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
	decorators: {
		position: 'absolute',
		top: 0,
		width: '110%',
	},
	wrapper: {
		padding: 30,
		backgroundColor: 'whitesmoke',
	},
});

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
	decorators: [
		(Story) => (
			<View style={styles.decorators}>
				<Story />
			</View>
		),
	],
};

export const DefaultProps = (props) => <Tabs {...props} />;

DefaultProps.storyName = 'Default Tabs';

DefaultProps.args = {
	initialTab: 1,
	scenes: [
		{
			title: 'Title 1',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 1</Text>
				</View>
			),
		},
		{
			title: 'Title 2',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 2</Text>
				</View>
			),
		},
	],
	position: 'top',
	scrollContentStyle: {},
	style: {},
};

export const ScrollViewTab = (props) => <Tabs {...props} />;

ScrollViewTab.storyName = 'Scroll List';

ScrollViewTab.args = {
	initialTab: 0,
	scenes: [
		{
			title: 'Title 1',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 1</Text>
				</View>
			),
		},
		{
			title: 'Title 2',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 2</Text>
				</View>
			),
		},
		{
			title: 'Title 3',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 3</Text>
				</View>
			),
		},
		{
			title: 'Title 4',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 4</Text>
				</View>
			),
		},
		{
			title: 'Title 5',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 5</Text>
				</View>
			),
		},
	],
	position: 'top',
	scrollContentStyle: {},
	style: {},
};
