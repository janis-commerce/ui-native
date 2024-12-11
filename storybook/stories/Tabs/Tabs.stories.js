import React from 'react';
import Tabs from 'molecules/Tabs';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale, scaledForDevice} from 'scale';
import palette from 'theme/palette';

const styles = StyleSheet.create({
	decorators: {
		position: 'absolute',
		top: 0,
		width: scaledForDevice(350, moderateScale),
		overflow: 'hidden',
		marginVertical: scaledForDevice(5, moderateScale),
		borderWidth: scaledForDevice(1, moderateScale),
		borderColor: palette.greyScale['03'],
	},
	wrapper: {
		padding: scaledForDevice(30, moderateScale),
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
			disabled: false,
		},
		{
			title: 'Title 2',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 2</Text>
				</View>
			),
			disabled: false,
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
			disabled: false,
		},
		{
			title: 'Title 2',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 2</Text>
				</View>
			),
			disabled: true,
		},
		{
			title: 'Title 3',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 3</Text>
				</View>
			),
			disabled: false,
		},
		{
			title: 'Title 4',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 4</Text>
				</View>
			),
			disabled: false,
		},
		{
			title: 'Title 5',
			scene: (
				<View style={styles.wrapper}>
					<Text>View 5</Text>
				</View>
			),
			disabled: false,
		},
	],
	position: 'top',
	scrollContentStyle: {},
	style: {},
};
