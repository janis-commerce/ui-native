import React from 'react';
import Svg from '../../../src/components/Svg';

export default {
	title: 'Components/Svg',
	argTypes: {
		name: {
			options: [
				'empty-illustration',
				'empty-list-illustration',
				'janis-logo',
				'janis-logo-color',
				'login-illustration',
				'no-notifications',
			],
			control: {type: 'select'},
		},
		size: {
			options: [null, 20, 50, 100, 150],
			control: {type: 'select'},
		},
		width: {
			options: [20, 50, 100, 150],
			control: {type: 'select'},
		},
		height: {
			options: [20, 50, 100, 150],
			control: {type: 'select'},
		},
	},
};

export const DefaultProps = ({name, size, width, height}) => (
	<Svg name={name} size={size} width={width} height={height} />
);

DefaultProps.storyName = 'only displayed if the name of svg is passed';

DefaultProps.args = {
	name: 'janis-logo-color',
	size: 50,
	width: 0,
	height: 0,
};
