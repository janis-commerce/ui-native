import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import SwipeList from 'molecules/SwipeList';
import Text from 'atoms/Text';

export default {
	title: 'Components/SwipeList',
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
	wrapperStyle: {
		backgroundColor: 'rgb(122, 193, 224)',
	},
	contentStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(122, 193, 224)',
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

const options = Array.from({length: 30}, (_, i) => (i + 1).toString());

const renderOption = (option) => (
	<View key={option}>
		<Text>Warehouse {option}</Text>
	</View>
);

export const WithSwipeUpViewComponent = (props) => {
	const {renderHeaderComponent, headerText, showActions} = props;

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
			<SwipeList
				swipeWrapperStyle={styles.wrapperStyle}
				renderHeader={renderHeader}
				{...(showActions && actions)}
				{...props}>
				<View style={styles.contentStyle}>{options.map((option) => renderOption(option))}</View>
			</SwipeList>
		</GestureHandlerRootView>
	);
};

WithSwipeUpViewComponent.args = {
	snapPoints: ['25%', '50%', '100%'],
	snapPosition: 0,
	renderHeaderComponent: false,
	headerText: 'Header',
	showActions: false,
};
