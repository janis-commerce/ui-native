import React from 'react';
import Input from '../../../src/components/Input';

export default {
	title: 'Input',
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
	},
};

export const ReadOnly = ({placeholder, label}) => (
	<Input readOnly placeholder={placeholder} label={label} />
);

ReadOnly.storyName = 'read only';

ReadOnly.args = {
	placeholder: 'Document',
	label: 'Document',
};

export const Editable = ({label, placeholder, keyboardType}) => (
	<Input label={label} placeholder={placeholder} keyboardType={keyboardType} />
);

Editable.storyName = 'editable';

Editable.args = {
	label: 'First name',
	placeholder: 'First name',
	keyboardType: 'default',
};

export const Disabled = ({placeholder, label}) => (
	<Input disabled placeholder={placeholder} label={label} />
);

Disabled.storyName = 'disabled';

Disabled.args = {
	placeholder: 'First name',
	label: 'First name',
};

export const WithError = ({placeholder, label, statusMessage}) => (
	<Input placeholder={placeholder} label={label} statusMessage={statusMessage} />
);

WithError.storyName = 'with an error';

WithError.args = {
	placeholder: 'First name',
	label: 'First name',
	statusMessage: 'Invalid name',
};
