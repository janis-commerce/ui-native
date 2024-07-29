import React from 'react';
import RadioButton from 'atoms/RadioButton';
import CheckBox from 'atoms/CheckBox';
import {StyleSheet, View} from 'react-native';
import Text from 'atoms/Text';
import {palette} from 'theme/palette';
import {verticalScale} from 'scale';

export interface ItemSelectionButtonProps {
	name: string;
	selected?: boolean;
	radioButton?: boolean;
	leftSelection?: boolean;
	rightSelection?: boolean;
	onSelection?: () => {};
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		height: verticalScale(48),
		borderRadius: verticalScale(4),
	},
	checkBoxContainer: {
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 16,
		fontWeight: '400',
		color: palette.black.secondary,
		textTransform: 'capitalize',
	},
});

const ItemSelectionButton: React.FC<ItemSelectionButtonProps> = ({
	name,
	selected = false,
	radioButton = false,
	leftSelection = false,
	rightSelection = true,
	onSelection = () => {},
}) => {
	if (!name) {
		return null;
	}

	const checkPosition = rightSelection ? 'right' : 'left';

	const renderSelectionComponent = () => {
		if (!radioButton) {
			return <CheckBox onPress={onSelection} checked={selected} customSize={24} />;
		}

		return (
			<RadioButton
				onPress={onSelection}
				selected={selected}
				checkPosition={checkPosition}
				checkSize="md">
				<Text style={styles.text}>{name}</Text>
			</RadioButton>
		);
	};

	return (
		<View style={styles.container}>
			{leftSelection && !rightSelection && renderSelectionComponent()}
			{!radioButton && <Text style={styles.text}>{name}</Text>}
			{rightSelection && !leftSelection && renderSelectionComponent()}
		</View>
	);
};

export default ItemSelectionButton;
