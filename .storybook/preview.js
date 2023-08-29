import React from 'react';
import CenterView from '../storybook/decorators/CenterView';

export const parameters = {
	viewMode: 'docs',
};

export const decorators = [
	(Story) => (
		<CenterView>
			<Story />
		</CenterView>
	),
];
