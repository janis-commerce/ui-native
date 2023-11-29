import React from 'react';
import {View, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import Text from '../Text';
import CheckBox from '../CheckBox';
import {horizontalScale, moderateScale} from '../../scale';

const checkLocation = ['left', 'right'] as const;

type positions = (typeof checkLocation)[number];

const CheckSizeValues = {
	sm: 16,
	md: 24,
	lg: 32,
};

type sizeType = typeof CheckSizeValues;
type sizeKeys = keyof sizeType;

interface RadioButtonProps {
	children: React.ReactNode | string;
	selected?: boolean;
	onPress?: () => {};
	checkPosition?: positions;
	disabled?: boolean;
	checkSize?: sizeKeys;
	style?: ViewStyle;
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: horizontalScale(16),
		marginVertical: moderateScale(10),
		height: 'auto',
	},

	row: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	reverseRow: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
	},
	checkToLeft: {
		marginLeft: horizontalScale(15),
	},
	checkToRight: {
		marginRight: horizontalScale(15),
	},
});

const RadioButton = ({
	children,
	onPress,
	selected = false,
	checkPosition = 'left',
	checkSize = 'sm',
	disabled = false,
	style,
	...props
}: RadioButtonProps) => {
	if (!children) {
		return null;
	}

	const {container, row, reverseRow, checkToLeft, checkToRight} = styles;
	const isStringChild = typeof children === 'string';
	const checkLeft = checkPosition === 'left';
	const customSize = CheckSizeValues[checkSize];

	return (
		<TouchableOpacity
			style={[container, checkLeft ? row : reverseRow, style]}
			disabled={disabled}
			onPress={onPress}
			{...props}>
			<CheckBox
				checked={selected}
				disabled={disabled}
				customSize={customSize}
				borderRadius={customSize / 2}
			/>
			<View style={checkLeft ? checkToLeft : checkToRight}>
				{isStringChild ? <Text>{children}</Text> : children}
			</View>
		</TouchableOpacity>
	);
};

export default RadioButton;
