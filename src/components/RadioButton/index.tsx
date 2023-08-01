import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../Text';
import CheckBox from '../CheckBox';

const checkPosition = ['left', 'right'] as const;

type positions = (typeof checkPosition)[number];

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
}

const RadioButton = ({
	children,
	onPress,
	selected = false,
	checkPosition = 'left',
	checkSize = 'sm',
	disabled = false,
	...props
}: RadioButtonProps) => {
	if (!children) {
		return null;
	}

	const {container, row, reverseRow, checkToLeft, checkToRight} = styles;
	const isStringChild = typeof children === 'string';
	const rowDirection = checkPosition === 'left';
	const customSize = CheckSizeValues[checkSize];

	return (
		<View style={[container, rowDirection ? row : reverseRow]} {...props}>
			<CheckBox
				checked={selected}
				disabled={disabled}
				customSize={customSize}
				borderRadius={customSize / 2}
				onPress={onPress}
			/>
			<TouchableOpacity
				onPress={onPress}
				disabled={disabled}
				style={rowDirection ? checkToLeft : checkToRight}>
				{isStringChild ? <Text>{children}</Text> : children}
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: 16,
		marginVertical: 10,
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
		marginLeft: 15,
	},
	checkToRight: {
		marginRight: 15,
	},
});

export default RadioButton;
