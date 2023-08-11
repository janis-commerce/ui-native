import React from 'react';
import Select from '../../../src/components/Select';
import {View} from 'react-native';

export default {
	title: 'Select',
	// argTypes: {
	// 	checked: {
	// 		options: [true, false],
	// 		control: {type: 'radio'},
	// 	},
	// 	onValueChange: {
	// 		action: 'Value changed!',
	// 	},
	// 	disabled: {
	// 		options: [true, false],
	// 		control: {type: 'radio'},
	// 	},
	// 	checkOnColor: {
	// 		control: {type: 'color'},
	// 	},
	// 	checkOffColor: {
	// 		control: {type: 'color'},
	// 	},
	// 	iconCheckColor: {
	// 		control: {type: 'color'},
	// 	},
	// },
};

const inlineStyles = {width: '100%', padding: 10};
export const DefaultProps = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

DefaultProps.storyName = 'default props';

const listaPaises = [
	{label: 'Argentina', value: 'ar'},
	{label: 'Mexico', value: 'mx'},
	{label: 'Chile', value: 'cl'},
];

DefaultProps.args = {
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: false,
};
