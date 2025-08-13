import React from 'react';
import RadioButton from 'atoms/RadioButton';
import Image from 'atoms/Image';

export default {
	title: 'Components/RadioButton',
	argTypes: {
		checkSize: {
			options: ['sm', 'md', 'lg'],
			control: {type: 'select'},
		},
		checkPosition: {
			options: ['left', 'right'],
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
	checkPosition: 'left',
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
	checkPosition: 'right',
	selected: false,
	disabled: false,
};

export const WithoutChildren = (props) => <RadioButton {...props} />;

WithoutChildren.storyName = 'without children component';

WithoutChildren.args = {
	checkSize: 'lg',
	checkPosition: 'right',
	selected: true,
	disabled: false,
};
