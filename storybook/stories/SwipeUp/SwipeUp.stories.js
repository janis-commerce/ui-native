import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import SwipeUp from 'atoms/SwipeUp';
import {SwipeUpView} from 'atoms/SwipeUp/childComponents';
import Svg from 'atoms/Svg';

export default {
	title: 'Components/SwipeUp',
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
});

export const WithSwipeUpViewComponent = (props) => {
	return (
		<GestureHandlerRootView style={styles.screenStyle}>
			<SwipeUp swipeWrapperStyle={styles.wrapperStyle} {...props}>
				<SwipeUpView style={styles.contentStyle}>
					<Svg name="no-notifications" size={250} />
				</SwipeUpView>
			</SwipeUp>
		</GestureHandlerRootView>
	);
};

WithSwipeUpViewComponent.args = {
	snapPoints: ['25%', '50%', '100%'],
	snapPosition: 0,
};

WithSwipeUpViewComponent.storyName = 'render with children;';
