import React from 'react';
import RadioButton from '../../../src/components/RadioButton';
import Image from '../../../src/components/Image';

export default {
	title: 'RadioButton',
	argTypes: {
		checkSize: {
			options: ['sm', 'md', 'lg'],
			control: {type: 'select'},
		},
		direction: {
			options: ['row', 'row-reverse'],
			control: {type: 'select'},
		},
		selected: {
			options: [true, false],
			control: {type: 'radio'},
		},
		disabled: {
			options: [true, false],
			control: {type: 'radio'},
		},
	},
};

export const WithTextChild = (props) => <RadioButton {...props}>option 1</RadioButton>;

WithTextChild.storyName = 'with text child';

WithTextChild.args = {
	checkSize: 'sm',
	direction: 'row',
	selected: true,
	disabled: false,
};

export const WithChildComponent = (props) => (
	<RadioButton {...props}>
		<Image
			source={{
				uri: 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4',
				width: 80,
				height: 80,
			}}
		/>
	</RadioButton>
);

WithChildComponent.storyName = 'with child component';

WithChildComponent.args = {
	checkSize: 'lg',
	direction: 'row-reverse',
	selected: false,
	disabled: false,
};
