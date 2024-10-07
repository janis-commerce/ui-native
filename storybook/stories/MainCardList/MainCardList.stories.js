/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MainCardList from 'molecules/MainCardList';
import Text from 'atoms/Text';
import {palette} from 'theme/palette';
import {View} from 'react-native';

export default {
	title: 'Components/MainCardList',
	argTypes: {
		isSelected: {control: 'boolean'},
		showChildren: {control: 'boolean'},
		childrenText: '28/05 14:00 - 29/05 18:00',
		showBlock: {control: 'boolean'},
		blockText: '2 productos - 5 items',
	},
};

export const DefaultProps = (props) => {
	const {showChildren, childrenText, showBlock, blockText} = props;

	const blocks = showBlock
		? [
				{
					component: (
						<View>
							<Text style={{color: palette.base.black}}>{blockText}</Text>
						</View>
					),
				},
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  ]
		: [];

	return (
		<MainCardList displayId={100} blocks={blocks} {...props}>
			{showChildren && (
				<Text style={{color: palette.grey['600'], fontSize: 16, fontFamily: 'Roboto'}}>
					{childrenText}
				</Text>
			)}
		</MainCardList>
	);
};

DefaultProps.args = {
	displayId: 'ORD-230922-ROWK3A',
	isSelected: false,
	showChildren: true,
	childrenText: '28/05 14:00 - 29/05 18:00',
	showBlock: true,
	blockText: '2 productos - 5 items',
};
