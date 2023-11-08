import React from 'react';
import ProgressBar from '../../../src/components/ProgressBar';

export default {
	title: 'Components/ProgressBar',
	argTypes: {
		value: {
			options: [0, 20, 40, 60, 80, 100],
			control: {
				type: 'select',
				min: 0,
				max: 100,
				step: 20,
				labels: {
					0: '0%',
					20: '20%',
					40: '40%',
					60: '60%',
					80: '80%',
					100: '100%',
				},
			},
		},
		totalValue: {disable: true},
		isAnimated: {
			control: 'boolean',
		},
		duration: {
			control: 'number',
		},
	},
};

export const DefaultProps = (props) => <ProgressBar totalValue={100} {...props} />;

DefaultProps.args = {
	value: 80,
	isAnimated: false,
	duration: 300,
};
