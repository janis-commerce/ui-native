import React from 'react';
import Select from 'molecules/Select';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import palette from 'theme/palette';

export default {
	title: 'Components/Select',
	argTypes: {
		keyboardType: {
			options: [
				'default',
				'number-pad',
				'decimal-pad',
				'numeric',
				'email-address',
				'phone-pad',
				'url',
			],
			control: {type: 'select'},
		},
		variantOptions: {
			options: ['Dropdown', 'Modal'],
			control: {type: 'select'},
		},
	},
};

const listaPaises = [
	{label: 'Argentina', value: 'ar'},
	{label: 'Chile', value: 'cl'},
	{label: 'Mexico', value: 'mx'},
	{label: 'Brasil', value: 'br'},
	{label: 'Panamá', value: 'pa'},
	{label: 'España', value: 'es'},
];

const inlineStyles = {width: '100%', padding: 10};

export const DisabledSelect = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

DisabledSelect.storyName = 'disabled';

DisabledSelect.args = {
	value: 'Argentina',
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: true,
	isMulti: false,
	keyboardType: 'default',
	onSelectOption: (option) => option,
};

export const SingleProps = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

SingleProps.storyName = 'single select';

SingleProps.args = {
	value: 'Argentina',
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: false,
	keyboardType: 'default',
	onSelectOption: (option) => option,
};

export const OptionTypeModalProps = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

OptionTypeModalProps.storyName = 'option type modal';

OptionTypeModalProps.args = {
	value: 'Argentina',
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: true,
	keyboardType: 'default',
	onSelectOption: (option) => option,
	variantOptions: 'Modal',
};

export const MultiProps = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

MultiProps.storyName = 'multi select';

MultiProps.args = {
	value: null,
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: true,
	keyboardType: 'default',
	onSelectOption: (option) => option,
};

export const CustomComponent = (props) => (
	<View style={inlineStyles}>
		<Select {...props} />
	</View>
);

const customOption = ({renderedOption, callbackOptionSelected, ...rest}) => {
	const styles = StyleSheet.create({
		customOption: {
			width: '100%',
			height: 42,
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'center',
			paddingLeft: 8,
		},
		chip: {
			textAlign: 'center',
			backgroundColor: palette.primary.blue.normal,
			color: '#F4F5FB',
			fontSize: 10,
			width: 30,
			paddingVertical: 2,
			marginRight: 10,
			borderRadius: 12,
			textTransform: 'uppercase',
		},
	});

	return (
		<TouchableOpacity
			key={renderedOption.label}
			style={styles.customOption}
			onPress={() => callbackOptionSelected(renderedOption)}>
			<Text style={styles.chip}>{renderedOption.value}</Text>
			<Text>{renderedOption.label}</Text>
		</TouchableOpacity>
	);
};

CustomComponent.storyName = 'custom option';

CustomComponent.args = {
	value: 'Argentina',
	options: listaPaises,
	label: 'Paises',
	optionStyles: () => {},
	multiOptionsText: 'others',
	placeholder: 'seleccione un pais',
	isDisabled: false,
	isMulti: false,
	keyboardType: 'default',
	onSelectOption: (option) => option,
	customOptionComponent: customOption,
};
