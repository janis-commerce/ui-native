import React from 'react';
import {View, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import Typography from 'atoms/Typography';
import CheckBox from 'atoms/CheckBox';
import {horizontalScale, moderateScale, scaledForDevice} from 'scale';

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

const validPaddingHorizontal = scaledForDevice(16, horizontalScale);
const validMarginVertical = scaledForDevice(10, moderateScale);
const validMarginHorizontal = scaledForDevice(15, horizontalScale);

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: validPaddingHorizontal,
		marginVertical: validMarginVertical,
		height: 'auto',
	},

	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	reverseRow: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
	},
	checkToLeft: {
		marginLeft: validMarginHorizontal,
	},
	checkToRight: {
		marginRight: validMarginHorizontal,
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
				onPress={onPress}
			/>
			<View style={checkLeft ? checkToLeft : checkToRight}>
				{isStringChild ? <Typography>{children}</Typography> : children}
			</View>
		</TouchableOpacity>
	);
};

export default RadioButton;
