import React, {useState} from 'react';
import BaseInput from 'atoms/BaseInput';

export default {
	title: 'Components/BaseInput',
	argTypes: {
		textAlign: {
			options: ['center', 'left', 'right', null],
			defaultValue: 'center',
			control: {type: 'select'},
		},
	},
};

export const DefaultProps = (props) => {
	const [value, setValue] = useState('');

	return <BaseInput value={value} onChangeText={setValue} {...props} />;
};

DefaultProps.storyName = 'Base input with default props';

DefaultProps.args = {
	placeholder: 'Janis Commerce',
};
