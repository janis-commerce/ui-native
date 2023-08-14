import React from 'react';
import Select from '../../../src/components/Select';
import {View} from 'react-native';

export default {
	title: 'Select',
};

const listaPaises = [
	{label: 'Argentina', value: 'ar'},
	{label: 'Chile', value: 'cl'},
	{label: 'Mexico', value: 'mx'},
];

const inlineStyles = {width: '100%', padding: 10};

export const DisabledSelect = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

DisabledSelect.storyName = 'disabled';

DisabledSelect.args = {
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: true,
	isMulti: false,
	isSearchable: false,
	onSelectOption: (option) => option,
};

export const SingleProps = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

SingleProps.storyName = 'single select';

SingleProps.args = {
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: false,
	isSearchable: false,
	onSelectOption: (option) => option,
};

export const MultiProps = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

MultiProps.storyName = 'multi select';

MultiProps.args = {
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: true,
	isSearchable: false,
	onSelectOption: (option) => option,
};

export const SearcherProps = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

SearcherProps.storyName = 'with search';

SearcherProps.args = {
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: false,
	isSearchable: true,
	onSelectOption: (option) => option,
};
