import React from 'react';
import CenterView from '../storybook/decorators/CenterView';

const preview = {
	decorators: [
		(Story) => (
			<CenterView>
				<Story />
			</CenterView>
		),
	],
};

export default preview;
