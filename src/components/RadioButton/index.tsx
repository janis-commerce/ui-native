import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../Text';
import CheckBox from '../CheckBox';

const directions = ['row', 'row-reverse'] as const;

type directionType = (typeof directions)[number];

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
	direction?: directionType;
	disabled?: boolean;
	checkSize?: sizeKeys;
}

const RadioButton = ({
	children,
	onPress,
	selected = false,
	direction = 'row',
	checkSize = 'sm',
	disabled = false,
	...props
}: RadioButtonProps) => {
	if (!children) {
		return null;
	}

	const {container, row, reverseRow, checkToLeft} = styles;
	const isStringChild = typeof children === 'string';
	const reverseDirection = direction === 'row-reverse';
	const customSize = CheckSizeValues[checkSize];

	return (
		<View style={[container, reverseDirection ? {...reverseRow} : {...row}]} {...props}>
			<TouchableOpacity
				onPress={onPress}
				disabled={disabled}
				style={reverseDirection && checkToLeft}>
				{isStringChild ? <Text>{children}</Text> : children}
			</TouchableOpacity>
			<CheckBox
				checked={selected}
				disabled={disabled}
				customSize={customSize}
				borderRadius={customSize / 2}
			/>
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
		justifyContent: 'space-between',
	},
	reverseRow: {
		flexDirection: 'row-reverse',
		justifyContent: 'flex-end',
	},
	checkToLeft: {
		marginLeft: 15,
	},
});

export default RadioButton;
