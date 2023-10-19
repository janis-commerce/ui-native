import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text, StyleSheet, View} from 'react-native';
import SwipeUp from '../../../src/components/SwipeUp';
import RadioButton from '../../../src/components/RadioButton';
import Svg from '../../../src/components/Svg';
import {SwipeUpFlatList, SwipeUpView} from '../../../src/components/SwipeUp/childComponents';

export default {
	title: 'Components/SwipeUp',
	argTypes: {
		snapPoints: {
			options: [
				['25%', '50%', '100%'],
				[120, 240, 460],
			],
			control: {type: 'select'},
		},
		snapPosition: {
			options: [0, 1, 2],
			control: {type: 'radio'},
		},
	},
};

const styles = StyleSheet.create({
	screenStyle: {
		height: '100%',
		width: '100%',
	},
	wrapperStyle: {
		backgroundColor: 'rgb(122, 193, 224)',
	},
	contentStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(122, 193, 224)',
	},
});

const dataItem = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
	28, 29, 30,
];

const renderItem = ({item, index}) => {
	return (
		<RadioButton checkSize="md" checkPosition="right" key={index}>
			<Text>{item}</Text>
		</RadioButton>
	);
};

export const WithSwipeUpViewComponent = (props) => {
	return (
		<GestureHandlerRootView style={styles.screenStyle}>
			<SwipeUp swipeWrapperStyle={styles.wrapperStyle} {...props}>
				<SwipeUpView style={styles.contentStyle}>
					<Svg name="empty-list-illustration" size={250} />
				</SwipeUpView>
			</SwipeUp>
		</GestureHandlerRootView>
	);
};

export const WithSwipeUpFlatListComponent = (props) => {
	return (
		<GestureHandlerRootView style={styles.screenStyle}>
			<View>
				<Text>
					To render scrollable components, you must use the next additional components as children:
				</Text>
				<Text>SwipeUpFlatList</Text>
				<Text>SwipeUpSCrollView</Text>
			</View>
			<SwipeUp swipeWrapperStyle={styles.wrapperStyle} {...props}>
				<SwipeUpFlatList data={dataItem} renderItem={renderItem} />
			</SwipeUp>
		</GestureHandlerRootView>
	);
};

WithSwipeUpViewComponent.args = {
	snapPoints: ['25%', '50%', '100%'],
	snapPosition: 0,
};

WithSwipeUpViewComponent.storyName = 'render with static children;';

WithSwipeUpFlatListComponent.args = {
	snapPoints: ['1%', '50%', '100%'],
	snapPosition: 1,
};

WithSwipeUpFlatListComponent.storyName = 'render with scrollable component';
