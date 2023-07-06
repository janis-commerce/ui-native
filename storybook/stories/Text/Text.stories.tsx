import React, {JSX} from 'react';
import CenterView from '../../decorators/CenterView';
import {ComponentMeta, ComponentStory} from '@storybook/react';
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
const fontWeights = [
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

export default {
	title: 'Text',
	decorators: [
		(Story): JSX.Element => (
			<CenterView>
				<Story />
			</CenterView>
		),
	],
	argTypes: {
		fontFamily: {
			options: fontFamilies,
			control: {type: 'select'},
		},
		fontStyle: {
			options: ['normal', 'italic'],
			control: {type: 'select'},
		},
		fontWeight: {
			options: fontWeights,
			control: {type: 'select'},
		},
		textDecorationLine: {
			options: ['none', 'underline', 'line-through', 'underline line-through'],
			control: {type: 'select'},
		},
		textTransform: {
			options: ['none', 'uppercase', 'lowercase', 'capitalize'],
			control: {type: 'select'},
		}
	},
} as ComponentMeta<typeof Text>;

export const DefaultProps: ComponentStory<typeof Text> = ({
	textToDisplay,
	fontSize,
	color,
	fontFamily,
	fontStyle,
	fontWeight,
	letterSpacing,
	textDecorationLine,
	textTransform,
}) => (
	<Text
		fontSize={fontSize}
		color={color}
		fontFamily={fontFamily}
		fontStyle={fontStyle}
		fontWeight={fontWeight}
		letterSpacing={letterSpacing}
		textDecorationLine={textDecorationLine}
		textTransform={textTransform}>
		{textToDisplay}
	</Text>
);

DefaultProps.story = {
	name: 'default props',
};

DefaultProps.args = {
	textToDisplay: 'Hola',
	fontSize: 24,
	color: '#000000',
	fontFamily: 'Roboto',
	fontStyle: 'normal',
	fontWeight: 'normal',
	letterSpacing: 0,
	textDecorationLine: 'none',
	textTransform: 'none',
};
