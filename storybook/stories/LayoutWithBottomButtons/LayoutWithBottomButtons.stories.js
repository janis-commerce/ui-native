import React from 'react';
import {View, Text, Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import LayoutWithBottomButtons from 'molecules/LayoutWithBottomButtons';
import palette from 'theme/palette';

export default {
	title: 'Components/LayoutWithBottomButtons',
	argTypes: {
		variant: {
			options: ['squared', 'rounded', 'roundedOnTop'],
			control: {type: 'select'},
		},
		buttonBackgroundColor: {
			control: {type: 'color'},
		},
	},
};
const isWeb = Platform.OS === 'web';

const buttonsStyleFromWeb = () => (isWeb ? {flexGrow: 1} : {});
const screenStyleFromWeb = () =>
	isWeb ? {maxWidth: 300, height: 400, backgroundColor: palette.greyScale['04']} : {};

const styles = StyleSheet.create({
	screenStyle: {
		flex: 1,
		...screenStyleFromWeb(),
	},
	textStyle: {
		fontSize: 30,
		textTransform: 'capitalize',
		color: palette.primary.blue.normal,
	},
	contentStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const layoutButtons = [
	{
		icon: 'keyboard',
		onPress: () => {},
		color: 'error',
		width: '100%',
		style: buttonsStyleFromWeb(),
	},
	{
		icon: 'camera',
		onPress: () => {},
		color: 'black',
		width: '78%',
		style: buttonsStyleFromWeb(),
	},
	{
		icon: 'check_light',
		disabled: true,
		color: 'success',
		onPress: () => {},
		width: '20%',
		style: buttonsStyleFromWeb(),
	},
];

export const LayoutWithBottomButtonsComponent = (props) => {
	return (
		<View style={styles.screenStyle}>
			<LayoutWithBottomButtons {...props}>
				<View style={styles.contentStyle}>
					<Text style={styles.textStyle}>Content</Text>
				</View>
			</LayoutWithBottomButtons>
		</View>
	);
};

LayoutWithBottomButtonsComponent.args = {
	buttons: layoutButtons,
	variant: 'squared',
	buttonBackgroundColor: '#F4F5FB',
};

LayoutWithBottomButtonsComponent.storyName = 'render with buttons;';
