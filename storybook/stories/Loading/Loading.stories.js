import React from 'react';
import {Text} from 'react-native';
import Loading from '../../../src/components/Loading/';
import {moderateScale} from '../../../src/utils';

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
	children: <Text style={{fontSize: moderateScale(14)}}>Loading</Text>,
};
