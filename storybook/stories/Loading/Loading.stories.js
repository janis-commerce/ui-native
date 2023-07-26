import React from 'react';
import {Text} from 'react-native';
import Loading from '../../../src/components/Loading/';

export default {
	title: 'Loading',
	argTypes: {},
};

export const DefaultProps = ({isLoading, color, duration}) => (
	<Loading isLoading={isLoading} color={color} duration={duration} />
);

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	isLoading: true,
	color: '#2979FF',
	duration: 1000,
	children: <Text>Loading</Text>,
};
