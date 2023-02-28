import {storiesOf} from '@storybook/react-native';
import {object, select, text} from '@storybook/addon-knobs';
import Image from '../../../src/components/Image';
import CenterView from '../CenterView';
import React from 'react';

storiesOf('Image', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('only displayed if the image source url is passed', () => (
		<Image
			source={{
				uri: text('Image source', 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4'),
			}}
			style={object('StyleProps', {
				width: 80,
				height: 80,
			})}
			resizeMode={select(
				'resizeMode',
				['cover', 'contain', 'stretch', 'repeat', 'center'],
				'cover'
			)}
		/>
	));
