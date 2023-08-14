import React from 'react';
import Select from '../../../src/components/Select';
import {View} from 'react-native';

export default {
	title: 'Select',
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
	{label: 'Chile', value: 'cl'},
	{label: 'Mexico', value: 'mx'},
];

DefaultProps.args = {
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: true,
};
