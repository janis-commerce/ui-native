import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text} from 'react-native';
import {base, black, grey, primary, white} from '../../../../theme/palette';
import {CustomOptionComponent, Option} from '../..';
import {horizontalScale, moderateScale, scaledForDevice} from '../../../../scale';

interface DropdownProps {
	isShowedDropdown: boolean;
	filteredOptions: Option[];
	selectedOptions: Option[];
	noOptionsMessage: string;
	optionStyles?: {};
	callbackOption: (option: Option) => void;
	customOptionComponent?: CustomOptionComponent | null;
}

const Dropdown: FC<DropdownProps> = (props) => {
	const {
		isShowedDropdown,
		filteredOptions,
		callbackOption,
		selectedOptions,
		noOptionsMessage,
		optionStyles,
		customOptionComponent = null,
	} = props;

	if (!isShowedDropdown) {
		return null;
	}

	const handleSelectedOption = (option: Option) => callbackOption(option);

	const validPadding = scaledForDevice(8, moderateScale);
	const validMaxHeight = scaledForDevice(168, moderateScale);
	const validTop = scaledForDevice(60, moderateScale);
	const validMarginBottom = scaledForDevice(20, moderateScale);
	const validElevation = scaledForDevice(5, moderateScale);
	const validHeight = scaledForDevice(42, moderateScale);
	const validLeft = scaledForDevice(8, horizontalScale);
	const validFontSize = scaledForDevice(14, moderateScale);
	const validPaddingVertical = scaledForDevice(10, moderateScale);

	const styles = StyleSheet.create({
		container: {
			width: '100%',
			padding: validPadding,
		},
		optionWrapper: {
			position: 'absolute',
			maxHeight: validMaxHeight,
			borderColor: grey[200],
			backgroundColor: base.white,
			width: '100%',
			top: validTop,
			marginBottom: validMarginBottom,
			elevation: validElevation,
			zIndex: 10,
			flex: 1,
		},
		option: {
			width: '100%',
			height: validHeight,
			justifyContent: 'center',
			alignItems: 'stretch',
			paddingLeft: validLeft,
		},
		optionText: {
			fontSize: validFontSize,
			color: black.main,
			fontWeight: '400',
		},
		noOptionText: {
			fontSize: validFontSize,
			color: grey[500],
			fontWeight: '400',
			paddingLeft: validLeft,
			paddingVertical: validPaddingVertical,
		},
	});

	const renderOptions =
		filteredOptions?.length &&
		filteredOptions.map((option) => {
			const isSelectedOption = selectedOptions.some((selected) => selected.label === option.label);
			const styleText = {...styles.optionText, ...(isSelectedOption && {color: primary.main})};
			const styleOption = {
				...styles.option,
				...(isSelectedOption && {backgroundColor: white.light}),
			};

			const customProps = {
				renderedOption: option,
				filteredOptions,
				selectedOptions,
				callbackOptionSelected: callbackOption,
			};

			if (customOptionComponent) {
				return customOptionComponent(customProps);
			}

			return (
				<TouchableOpacity
					style={{...styleOption, ...optionStyles}}
					key={option.label}
					onPress={() => handleSelectedOption(option)}>
					<Text style={styleText}> {option.label}</Text>
				</TouchableOpacity>
			);
		});

	const noRenderOptions = (
		<View aria-disabled>
			<Text style={styles.noOptionText}> {noOptionsMessage}</Text>
		</View>
	);

	return (
		<ScrollView style={styles.optionWrapper} contentContainerStyle={styles.container}>
			{filteredOptions?.length ? renderOptions : noRenderOptions}
		</ScrollView>
	);
};

export default Dropdown;
