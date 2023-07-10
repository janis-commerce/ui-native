import CenterView from '../storybook/decorators/CenterView';

export const decorators = [
	(Story) => (
		<CenterView>
			<Story />
		</CenterView>
	),
];
