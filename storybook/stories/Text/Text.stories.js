import React from 'react';
import Text from 'atoms/Text';
import DeprecationNotice from '../../decorators/DeprecationNotice';

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
	title: 'Components/Text',
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
		},
		color: {
			control: {type: 'color'},
		},
	},
	decorators: [
		(Story) => (
			<DeprecationNotice>
				<Story />
			</DeprecationNotice>
		),
	],
};

export const DefaultProps = ({
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

DefaultProps.storyName = 'default props';

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
