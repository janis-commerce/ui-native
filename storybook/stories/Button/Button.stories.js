import React from 'react';
import Button from 'molecules/Button';

export default {
	title: 'Components/Button',
	argTypes: {
		icon: {
			control: {
				type: 'select',
				labels: {
					null: 'None',
					box: 'Box',
					check_bold: 'Check',
					cross_bold: 'Cross',
					keyboard: 'Keyboard',
				},
			},
			options: [null, 'box', 'check_bold', 'cross_bold', 'keyboard'],
		},
		type: {
			control: {
				type: 'select',
				labels: {
					main: 'Main',
					secondary: 'Secondary',
				},
			},
			options: ['main', 'secondary'],
		},
		variant: {
			control: {
				type: 'select',
				labels: {
					contained: 'Contained',
					outlined: 'Outlined',
					text: 'Text',
				},
			},
			options: ['contained', 'outlined', 'text'],
		},
		iconPosition: {
			control: {
				type: 'select',
				labels: {
					top: 'Top',
					bottom: 'Bottom',
					left: 'Left',
					right: 'Right',
				},
			},
			options: ['top', 'bottom', 'left', 'right'],
		},
		color: {
			control: {
				type: 'select',
				labels: {
					primary: 'Primary',
					black: 'Black',
					success: 'Success',
					error: 'Error',
					warning: 'Warning',
					alert: 'Alert',
				},
			},
			options: ['primary', 'black', 'success', 'error', 'warning', 'alert'],
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
	color: 'black',
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
	color: 'black',
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
