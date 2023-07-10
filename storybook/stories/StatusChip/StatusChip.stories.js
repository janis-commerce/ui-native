import {storiesOf} from '@storybook/react-native';
import {text, select, number, color} from '@storybook/addon-knobs';
import StatusChip from '../../../src/components/StatusChip';
import Text from '../Text';
import CenterView from '../CenterView';
import React from 'react';

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

storiesOf('StatusChip', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('passing it text', () => (
		<StatusChip color={select('color', ['#2979FF', '#1DB779', ''], '')}>
			Partially delivered
		</StatusChip>
	))
	.add('passing it a custom component', () => (
		<StatusChip color={select('color', ['#2979FF', '#1DB779', null], null)}>
			<Text
				fontSize={number('fontSize', 16)}
				color={color('text color', '#000000')}
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
				{text('text', 'Janis Commerce')}
			</Text>
		</StatusChip>
	));
