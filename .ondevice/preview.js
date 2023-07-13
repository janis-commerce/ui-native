import React from 'react';
import CenterView from '../storybook/decorators/CenterView';

export const decorators = [
	(Story) => (
		<CenterView>
			<Story />
		</CenterView>
	),
];
