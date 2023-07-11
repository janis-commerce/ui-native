import React from 'react';
import Avatar from '../../../src/components/Avatar';

export default {
	title: 'Avatar',
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg'],
			control: {type: 'select'},
		},
	},
};

export const WithImage = ({size, textColor, bgColor, imageUrl, placeholder, customSize}) => (
	<Avatar
		size={size}
		textColor={textColor}
		bgColor={bgColor}
		imageUrl={imageUrl}
		placeholder={placeholder}
		customSize={customSize}
	/>
);

WithImage.storyName = 'with image';

WithImage.args = {
	size: 'sm',
	textColor: '#FFFFFF',
	bgColor: '#E8EAF6',
	imageUrl: 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4',
	placeholder: 'Janis Commerce',
	customSize: 0,
};

export const OnlyPlaceholder = ({size, textColor, bgColor, imageUrl, placeholder, customSize}) => (
	<Avatar
		size={size}
		textColor={textColor}
		bgColor={bgColor}
		imageUrl={imageUrl}
		placeholder={placeholder}
		customSize={customSize}
	/>
);

OnlyPlaceholder.storyName = 'only with placeholder';

OnlyPlaceholder.args = {
	size: 'sm',
	textColor: '#FFFFFF',
	bgColor: '#E8EAF6',
	placeholder: 'Janis Commerce',
	customSize: 0,
};
