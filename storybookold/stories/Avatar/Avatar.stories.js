import {storiesOf} from '@storybook/react-native';
import {text, select, number, color} from '@storybook/addon-knobs';
import Avatar from '../../../src/components/Avatar';
import CenterView from '../CenterView';
import React from 'react';

storiesOf('Avatar', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('with image', () => (
		<Avatar
			size={select('size', ['sm', 'md', 'lg'], 'sm')}
			textColor={color('textColor', '#FFFFFF')}
			bgColor={color('bgColor', '#E8EAF6')}
			imageUrl={text('imageUrl', 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4')}
			placeholder={text('placeholder', 'Janis Commerce')}
			customSize={number('customSize', '')}
		/>
	))
	.add('with only placeholder', () => (
		<Avatar
			size={select('size', ['sm', 'md', 'lg'], 'sm')}
			textColor={color('textColor', '#FFFFFF')}
			bgColor={color('bgColor', '#E8EAF6')}
			placeholder={text('placeholder', 'Janis Commerce')}
			customSize={number('customSize', '')}
		/>
	));
