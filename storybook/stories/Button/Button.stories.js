import React from 'react';
import Button from '../../../src/components/Button';

export default {
	title: 'Components/Button',
	argTypes: {
		icon: {
			control: {type: 'select'},
			options: {
				None: null,
				Box: 'box',
				Check: 'check_bold',
				Cross: 'cross_bold',
				Keyboard: 'keyboard',
			},
		},
		type: {
			control: {type: 'select'},
			options: {
				Main: 'main',
				Secondary: 'secondary',
			},
		},
		variant: {
			control: {type: 'select'},
			options: {
				Contained: 'contained',
				Outlined: 'outlined',
				Text: 'text',
			},
		},
		iconPosition: {
			control: {type: 'select'},
			options: {
				Top: 'top',
				Bottom: 'bottom',
				Left: 'left',
				Right: 'right',
			},
		},
		color: {
			control: {type: 'select'},
			options: {
				Primary: 'primary',
				Secondary: 'secondary',
				Success: 'success',
				Error: 'error',
				Warning: 'warning',
				Alert: 'alert',
			},
		},
	},
};

export const PrimartButtonProps = (props) => <Button {...props} />;

PrimartButtonProps.storyName = 'Primary Button';

PrimartButtonProps.args = {
	value: 'Main button press',
	icon: 'box',
	type: 'main',
	variant: 'contained',
	iconPosition: 'left',
	color: 'primary',
	isLoading: false,
	disabled: false,
	style: {flex: 1},
};

export const SecondaryButtonProps = (props) => <Button {...props} />;

SecondaryButtonProps.storyName = 'Secondary Button';

SecondaryButtonProps.args = {
	value: 'Main button press',
	icon: 'box',
	type: 'secondary',
	variant: 'contained',
	iconPosition: 'left',
	color: 'primary',
	isLoading: false,
	disabled: false,
	style: {flex: 1},
};

export const CameraButtonProps = (props) => <Button {...props} />;

CameraButtonProps.storyName = 'Camera Button';

CameraButtonProps.args = {
	value: 'Manual Entry',
	icon: 'keyboard',
	type: 'main',
	variant: 'contained',
	iconPosition: 'left',
	color: 'secondary',
	isLoading: false,
	disabled: false,
	style: {flex: 1},
};

export const TextButtonProps = (props) => <Button {...props} />;

TextButtonProps.storyName = 'Title Button';

TextButtonProps.args = {
	value: 'ACCEPT',
	type: 'secondary',
	variant: 'text',
	iconPosition: 'left',
	color: 'primary',
	isLoading: false,
	disabled: false,
	textStyle: {fontWeight: '700'},
};
