import StatusChip from '../../../src/components/StatusChip';
import Text from '../../../src/components/Text';
import React from 'react';

export default {
	title: 'Components/StatusChip',
	argTypes: {
		background: {
			control: {type: 'color'},
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
			color={'#fff'}
			fontFamily={'Roboto'}
			fontStyle={'normal'}
			fontWeight={'bold'}
			letterSpacing={0}
			textDecorationLine={'none'}
			textTransform={'none'}>
			Delivered
		</Text>
	</StatusChip>
);

PassingItComponent.storyName = 'passing it a custom component';

PassingItComponent.args = {
	background: '#2979FF',
};
