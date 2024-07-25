import React from 'react';
import {Text} from 'react-native';
import Loading from 'atoms/Loading/';

export default {
	title: 'Components/Loading',
	argTypes: {
		color: {
			control: {type: 'color'},
		},
	},
};

export const DefaultProps = (props) => <Loading {...props} />;

DefaultProps.storyName = 'with text children';

DefaultProps.args = {
	isLoading: true,
	color: '#2979FF',
	size: 64,
	duration: 1000,
	// eslint-disable-next-line react-native/no-inline-styles
	children: <Text style={{fontSize: 14}}>Loading</Text>,
};
