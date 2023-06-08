import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {number, color, text, select} from '@storybook/addon-knobs';
import CenterView from '../CenterView';
import Text from './index';

const fontFamilies = [
	'normal',
	'notoserif',
	'sans-serif',
	'sans-serif-light',
	'sans-serif-thin',
	'sans-serif-condensed',
	'sans-serif-medium',
	'serif',
	'Roboto',
	'monospace',
];
const fontWeight = [
	'normal',
	'bold',
	'100',
	'200',
	'300',
	'400',
	'500',
	'600',
	'700',
	'800',
	'900',
];

storiesOf('Text', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('default props', () => (
		<Text
			fontSize={number('fontSize', 16)}
			color={color('color', '#000000')}
			fontFamily={select('fontFamily', fontFamilies, 'Roboto')}
			fontStyle={select('fontStyle', ['normal', 'italic'], 'normal')}
			fontWeight={select('fontWeight', fontWeight, 'normal')}
			letterSpacing={number('letterSpacing', 0)}
			textDecorationLine={select(
				'textDecorationLine',
				['none', 'underline', 'line-through', 'underline line-through'],
				'none'
			)}
			textTransform={select(
				'textTransform',
				['none', 'uppercase', 'lowercase', 'capitalize'],
				'none'
			)}>
			{text('text', 'Example Text')}
		</Text>
	));
