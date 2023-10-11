import Carousel from '../../../src/components/Carousel';
import Text from '../../../src/components/Text';
import React from 'react';

export default {
	title: 'Components/Carousel',
	argTypes: {
		background: {
			control: {type: 'color'},
		},
	},
};

export const WithText = (props) => <Carousel {...props} />;

WithText.storyName = 'With text';

WithText.args = {
	background: '#2979FF',
};
const TextStyles = {
	color: '#fff',
	fontSize: 13,
	lineHeight: 18,
	fontFamily: 'Roboto',
	fontWeight: '900',
	textAlign: 'center',
};

export const WithCustomComponent = (props) => (
	<Carousel {...props}>
		<Text style={TextStyles}>Delivered</Text>
	</Carousel>
);

WithCustomComponent.storyName = 'With custom component';

WithCustomComponent.args = {
	background: '#2979FF',
};
