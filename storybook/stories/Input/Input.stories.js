import React from 'react';
import Input from 'molecules/Input';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		type: {
			control: {
				type: 'select',
				options: ['currency', 'number', 'text', 'email', 'phone'],
			},
		},
	},
};

const Template = (args) => <Input {...args} />;

export const Currency = Template.bind({});
Currency.args = {
	placeholder: 'Enter amount',
	type: 'currency',
};

export const Number = Template.bind({});
Number.args = {
	placeholder: 'Enter number',
	type: 'number',
};

export const Text = Template.bind({});
Text.args = {
	placeholder: 'Enter text',
	type: 'text',
};

export const Email = Template.bind({});
Email.args = {
	placeholder: 'Enter email',
	type: 'email',
};

export const Phone = Template.bind({});
Phone.args = {
	placeholder: 'Enter phone',
	type: 'phone',
};
