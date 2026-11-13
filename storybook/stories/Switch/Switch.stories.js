import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Switch from 'atoms/Switch';

export default {
	title: 'Components/Switch',
	argTypes: {
		disabled: {
			options: [true, false],
			control: {type: 'radio'},
		},
	},
};

export const DefaultProps = ({checked: initialChecked, ...props}) => {
	const [checked, setChecked] = useState(initialChecked);

	useEffect(() => setChecked(initialChecked), [initialChecked]);

	return (
		<View style={{padding: 20}}>
			<Switch {...props} checked={checked} onChange={setChecked} />
		</View>
	);
};

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	checked: false,
	disabled: false,
};
