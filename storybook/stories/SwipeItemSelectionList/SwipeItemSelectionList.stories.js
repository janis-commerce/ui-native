import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import SwipeItemSelectionList from 'organisms/SwipeItemSelectionList';

export default {
	title: 'Components/SwipeItemSelectionList',
	argTypes: {
		snapPoints: {
			options: ['5_50_100_percentage', '120_240_300_px'],
			mapping: {
				'5_50_100_percentage': ['5%', '50%', '100%'],
				'120_240_300_px': [120, 240, 300],
			},
			control: {type: 'radio'},
		},
		snapPosition: {
			options: [0, 1, 2],
			control: {type: 'radio'},
		},
		multiselect: {
			options: [true, false],
		},
		renderHeader: {
			options: [true, false],
		},
	},
};

const styles = StyleSheet.create({
	screenStyle: {
		flex: 1,
		height: 400,
	},
	headerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerTitle: {
		fontWeight: 'bold',
		fontSize: 25,
	},
});

const options = Array.from({length: 30}, (_, i) => ({
	id: (i + 1).toString(),
	name: `Warehouse ${(i + 1).toString()}`,
}));

export const WithSwipeUpViewComponent = (props) => {
	const {renderHeaderComponent, headerText, showActions, multiselect} = props;

	const actions = [{value: 'Confirmar'}];

	const renderHeader = () => {
		if (!renderHeaderComponent) {
			return null;
		}

		return (
			<View style={styles.headerContainer}>
				<Text style={styles.headerTitle}>{headerText}</Text>
			</View>
		);
	};

	return (
		<GestureHandlerRootView style={styles.screenStyle}>
			<SwipeItemSelectionList
				data={options}
				renderHeader={renderHeader}
				multiselect={multiselect}
				{...(showActions && actions)}
				{...props}
			/>
		</GestureHandlerRootView>
	);
};

WithSwipeUpViewComponent.args = {
	snapPoints: ['25%', '50%', '100%'],
	snapPosition: 0,
	renderHeaderComponent: false,
	headerText: 'Header',
	showActions: false,
	multiselect: false,
};
