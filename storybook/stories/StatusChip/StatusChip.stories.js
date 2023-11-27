import StatusChip from '../../../src/components/StatusChip';
import Text from '../../../src/components/Text';
import React from 'react';
import {moderateScale} from '../../../src/utils';

export default {
	title: 'Components/StatusChip',
	argTypes: {
		background: {
			control: {type: 'color'},
		},
	},
};

export const WithText = (props) => <StatusChip {...props}>Partially delivered</StatusChip>;

WithText.storyName = 'With text';

WithText.args = {
	background: '#2979FF',
};
const TextStyles = {
	color: '#fff',
	fontSize: moderateScale(13),
	lineHeight: moderateScale(18),
	fontFamily: 'Roboto',
	fontWeight: '900',
	textAlign: 'center',
};

export const WithCustomComponent = (props) => (
	<StatusChip {...props}>
		<Text style={TextStyles}>Delivered</Text>
	</StatusChip>
);

WithCustomComponent.storyName = 'With custom component';

WithCustomComponent.args = {
	background: '#2979FF',
};
