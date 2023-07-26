import React from 'react';
import {Text} from 'react-native';
import Loading from '../../../src/components/Loading/';

export default {
	title: 'Loading',
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
	duration: 1000,
	children: <Text>Loading</Text>,
};
