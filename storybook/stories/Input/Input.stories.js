import React from 'react';
import Input from 'molecules/Input';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		type: {
			options: {
				keyboard: 'keyboard',
				currency: 'currency',
				number: 'number',
				text: 'text',
				email: 'email',
				phone: 'phone',
			},
			control: {type: 'select'},
		},
		variant: {
			options: {
				default: 'default',
				weightable: 'weightable',
				amountTotal: 'amountTotal',
				currency: 'currency',
				numeric: 'numeric',
			},
			control: {type: 'select'},
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
