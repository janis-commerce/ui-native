import React from 'react';
import BaseInput from 'atoms/BaseInput';

export default {
	title: 'Components/BaseInput',
	component: BaseInput,
	argTypes: {
		textAlign: {
			control: {
				type: 'select',
				options: ['center', 'left', 'right'],
			},
		},
	},
};

const Template = (args) => <BaseInput {...args} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Enter text',
	textAlign: 'center',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
	placeholder: 'Enter text',
	textAlign: 'left',
	style: {borderColor: 'red', borderWidth: 1},
};
