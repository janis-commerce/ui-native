/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Button from '../../../src/components/Button';
import Toast from 'react-native-toast-message';
import {configToast} from '../../../src/components/Toast/utils';

export default {
	title: 'Components/Toast',
	argTypes: {
		type: {
			control: {type: 'select'},
			options: {
				Success: 'success',
				Notice: 'notice',
				Warning: 'warning',
				Error: 'error',
				Action: 'action',
			},
		},
	},
	decorators: [
		(Story) => (
			<>
				<Story />
				<Toast config={configToast} position="bottom" />
			</>
		),
	],
};

export const DefaultProps = (props) => (
	<Button value="Show Toast" onPress={() => Toast.show({text1: props.text1, type: props.type})} />
);

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	text1: 'Mensaje de ui-native',
	type: 'success',
};
