import React from 'react';
import RadioButton from 'atoms/RadioButton';
import CheckBox from 'atoms/CheckBox';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from 'atoms/Text';
import palette from 'theme/palette';
import {horizontalScale, moderateScale, scaledForDevice, verticalScale} from 'scale';

export interface ItemSelectionButtonProps {
	name: string;
	selected?: boolean;
	radioButton?: boolean;
	leftSelection?: boolean;
	rightSelection?: boolean;
	onSelection?: () => {};
}

const validPaddingHorizontal = scaledForDevice(16, horizontalScale);
const validMarginVertical = scaledForDevice(13, moderateScale);

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
	radioButtonContainer: {
		display: 'flex',
		height: verticalScale(48),
		borderRadius: verticalScale(4),
	},
	checkBoxContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: validPaddingHorizontal,
		marginVertical: validMarginVertical,
		alignItems: 'center',
		height: 'auto',
	},
	text: {
		fontSize: 16,
		fontWeight: '400',
		color: palette.secondary.black.normal,
		textTransform: 'capitalize',
	},
	separator: {
		alignSelf: 'center',
		borderBottomColor: palette.greyScale['03'],
		borderBottomWidth: verticalScale(1),
		width: '90%',
	},
});

const ItemSelectionButton: React.FC<ItemSelectionButtonProps> = ({
	name,
	selected = false,
	radioButton = false,
	leftSelection = false,
	rightSelection = false,
	onSelection = () => {},
}) => {
	if (!name) {
		return null;
	}

	const checkPosition = rightSelection || (!rightSelection && !leftSelection) ? 'right' : 'left';

	const renderSelectionComponent = () => {
		if (!radioButton) {
			return <CheckBox onPress={onSelection as () => {}} checked={selected} customSize={24} />;
		}

		return (
			<RadioButton
				onPress={onSelection as () => {}}
				selected={selected}
				checkPosition={checkPosition}
				checkSize="md">
				<Text style={styles.text}>{name}</Text>
			</RadioButton>
		);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[
					radioButton && styles.radioButtonContainer,
					!radioButton && styles.checkBoxContainer,
				]}
				onPress={onSelection}>
				{leftSelection && !rightSelection && renderSelectionComponent()}
				{!radioButton && <Text style={styles.text}>{name}</Text>}
				{((rightSelection && !leftSelection) || (!rightSelection && !leftSelection)) &&
					renderSelectionComponent()}
			</TouchableOpacity>
			<View style={styles.separator} />
		</View>
	);
};

export default ItemSelectionButton;
