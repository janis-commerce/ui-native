import React, {useState} from 'react';
import Input from '../../../src/components/Input';

export default {
	title: 'Components/Input',
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

export const Editable = ({label, placeholder, keyboardType}) => {
	const [value, setValue] = useState('');

	return (
		<Input
			label={label}
			placeholder={placeholder}
			keyboardType={keyboardType}
			value={value}
			onChangeText={(userInput) => setValue(userInput)}
		/>
	);
};

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

export const DisabledWithValue = ({placeholder, label, value}) => (
	<Input disabled placeholder={placeholder} label={label} value={value} />
);

DisabledWithValue.storyName = 'disabled with value';

DisabledWithValue.args = {
	placeholder: 'First name',
	label: 'First name',
	value: 'Joe',
};

export const WithError = ({placeholder, label, statusMessage}) => {
	const [value, setValue] = useState('');

	return (
		<Input
			placeholder={placeholder}
			label={label}
			statusMessage={statusMessage}
			value={value}
			onChangeText={(userInput) => setValue(userInput)}
		/>
	);
};

WithError.storyName = 'with an error';

WithError.args = {
	placeholder: 'First name',
	label: 'First name',
	statusMessage: 'Invalid name',
};
