import React from 'react';
import Image from '../../../src/components/atoms/Image';

export default {
	title: 'Components/Image',
	argTypes: {
		resizeMode: {
			options: ['cover', 'contain', 'stretch', 'repeat', 'center'],
			control: {type: 'select'},
		},
	},
};

export const DefaultProps = ({uri, width, height, resizeMode}) => (
	<Image source={{uri}} style={{width, height}} resizeMode={resizeMode} />
);

DefaultProps.storyName = 'only displayed if the image source url is passed';

DefaultProps.args = {
	uri: 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4',
	width: 80,
	height: 80,
	resizeMode: 'cover',
};
