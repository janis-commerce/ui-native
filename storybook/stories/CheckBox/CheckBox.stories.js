import React from 'react';
import CheckBox from '../../../src/components/atoms/CheckBox';

export default {
	title: 'Components/CheckBox',
	argTypes: {
		checked: {
			options: [true, false],
			control: {type: 'radio'},
		},
		onValueChange: {
			action: 'Value changed!',
		},
		disabled: {
			options: [true, false],
			control: {type: 'radio'},
		},
		checkOnColor: {
			control: {type: 'color'},
		},
		checkOffColor: {
			control: {type: 'color'},
		},
		iconCheckColor: {
			control: {type: 'color'},
		},
	},
};

export const DefaultProps = (props) => <CheckBox {...props} />;

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	checked: true,
	customSize: 6,
	checkOnColor: '#2979FF',
	checkOffColor: '#939598',
	iconCheckColor: '#FFF',
	borderRadius: 2,
	disabled: false,
};
