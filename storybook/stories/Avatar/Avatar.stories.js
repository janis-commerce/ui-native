import React from 'react';
import Avatar from '../../../src/components/Avatar';

export default {
	title: 'Avatar',
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg'],
			control: {type: 'select'},
		},
		textColor: {
			control: {type: 'color'},
		},
		bgColor: {
			control: {type: 'color'},
		},
	},
};

export const WithImage = (props) => <Avatar {...props} />;

WithImage.storyName = 'with image';

WithImage.args = {
	size: 'sm',
	textColor: '#FFFFFF',
	bgColor: '#E8EAF6',
	imageUrl: 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4',
	placeholder: 'Janis Commerce',
	customSize: 0,
};

export const OnlyPlaceholder = (props) => <Avatar {...props} />;

OnlyPlaceholder.storyName = 'only with placeholder';

OnlyPlaceholder.args = {
	size: 'sm',
	textColor: '#FFFFFF',
	bgColor: '#E8EAF6',
	placeholder: 'Janis Commerce',
	customSize: 0,
};
