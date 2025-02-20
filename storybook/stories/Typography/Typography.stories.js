import React from 'react';
import Typography from 'atoms/Typography';
import typography from 'theme/typography';

const types = Array.from(Object.keys(typography));

const sizes = ['large', 'medium', 'small', 'default'];

export default {
	title: 'Components/Typography',
	argTypes: {
		type: {
			options: types,
			control: {type: 'select'},
		},
		size: {
			options: sizes,
			control: {type: 'select'},
		},
		color: {
			control: {type: 'color'},
		},
	},
};

export const DefaultProps = ({textToDisplay, color, type, size}) => (
	<Typography color={color} type={type} size={size}>
		{textToDisplay}
	</Typography>
);

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	textToDisplay: 'Hola',
	color: '#000000',
	type: 'display',
	size: 'medium',
};
