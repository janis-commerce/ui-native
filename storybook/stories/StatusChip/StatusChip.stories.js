import StatusChip from '../../../src/components/StatusChip';
import Text from '../Text';
import React from 'react';

export default {
	title: 'StatusChip',
	argTypes: {
		background: {
			options: ['#2979FF', '#1DB779', ''],
			control: {type: 'select'},
		},
	},
};

export const PassingItText = (props) => <StatusChip {...props}>Partially delivered</StatusChip>;

PassingItText.storyName = 'passing it text';

PassingItText.args = {
	background: '',
};

export const PassingItComponent = (props) => (
	<StatusChip {...props}>
		<Text
			fontSize={15}
			lineHeight={18}
			color={'#000000'}
			fontFamily={'Roboto'}
			fontStyle={'normal'}
			fontWeight={'bold'}
			letterSpacing={0}
			textDecorationLine={'none'}
			textTransform={'none'}>
			Custom component
		</Text>
	</StatusChip>
);

PassingItComponent.storyName = 'passing it a custom component';

PassingItComponent.args = {
	background: '',
};