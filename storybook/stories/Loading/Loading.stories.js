import React from 'react';
import {Text} from 'react-native';
import Loading from '../../../src/components/Loading/';

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
	children: <Text>Loading</Text>,
};
