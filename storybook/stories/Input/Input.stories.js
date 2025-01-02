import React from 'react';
import Input from 'molecules/Input';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		type: {
			control: {
				type: 'select',
			},
			options: ['currency', 'number', 'text', 'email', 'phone'],
			defaultValue: 'currency',
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
			defaultValue: 'default',
		},
	},
};

const Template = (args) => <Input {...args} />;

export const DefaultProps = Template.bind({});

DefaultProps.storyName = 'With a placeholder example';

DefaultProps.args = {
	placeholder: 'Placeholder example',
	type: 'text',
	variant: 'default',
};
