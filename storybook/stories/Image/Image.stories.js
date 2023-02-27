import {storiesOf} from '@storybook/react-native';
import {number, select, text} from '@storybook/addon-knobs';
import Image from '../../../src/components/Image';
import CenterView from '../CenterView';
import React from 'react';

storiesOf('Image', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('only displayed if the image source url is passed', () => (
		<Image
			source={text('imageUrl', 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4')}
			style={{
				width: number('Style.width', 80),
				height: number('Style.height', 80),
			}}
			resizeMode={select(
				'resizeMode',
				['cover', 'contain', 'stretch', 'repeat', 'center'],
				'contain'
			)}
		/>
	));
