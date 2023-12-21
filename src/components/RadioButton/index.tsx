import React from 'react';
import {View, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import Text from '../Text';
import CheckBox from '../CheckBox';
import {horizontalScale, moderateScale} from '../../scale';
import {LOAD_STORYBOOK} from '../../../env.json';

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

const validPaddingHorizontal = !LOAD_STORYBOOK ? horizontalScale(16) : 16;
const validMarginVertical = !LOAD_STORYBOOK ? moderateScale(10) : 10;
const validMarginHorizontal = !LOAD_STORYBOOK ? horizontalScale(15) : 15;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: validPaddingHorizontal,
		marginVertical: validMarginVertical,
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
			/>
			<View style={checkLeft ? checkToLeft : checkToRight}>
				{isStringChild ? <Text>{children}</Text> : children}
			</View>
		</TouchableOpacity>
	);
};

export default RadioButton;
