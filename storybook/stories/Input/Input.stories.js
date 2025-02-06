import React from 'react';
import Input from 'molecules/Input';
import {StyleSheet, View} from 'react-native';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: ['currency', 'number', 'text', 'email', 'phone'],
		},
		variant: {
			control: {type: 'select'},
			options: {
				default: 'default',
				weightable: 'weightable',
				amountTotal: 'amountTotal',
				currency: 'currency',
				numeric: 'numeric',
			},
		},
	},
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
	},
});

const Template = (args) => (
	<View style={styles.container}>
		<Input {...args} />
	</View>
);

export const DefaultProps = Template.bind({});

DefaultProps.storyName = 'With a placeholder example';

DefaultProps.args = {
	placeholder: '0.0',
	type: 'text',
	variant: 'default',
	totalValue: 6,
};
