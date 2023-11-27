import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text} from 'react-native';
import {base, black, grey, primary, white} from '../../../../theme/palette';
import {CustomOptionComponent, Option} from '../..';
import {moderateScale} from '../../../../scale';

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

	const styles = StyleSheet.create({
		container: {
			width: '100%',
			padding: moderateScale(8),
		},
		optionWrapper: {
			position: 'absolute',
			maxHeight: moderateScale(168),
			borderColor: grey[200],
			backgroundColor: base.white,
			width: '100%',
			top: moderateScale(60),
			marginBottom: moderateScale(20),
			elevation: moderateScale(5),
			zIndex: 10,
			flex: 1,
		},
		option: {
			width: '100%',
			height: moderateScale(42),
			justifyContent: 'center',
			alignItems: 'stretch',
			paddingLeft: moderateScale(8),
		},
		optionText: {
			fontSize: moderateScale(14),
			color: black.main,
			fontWeight: '400',
		},
		noOptionText: {
			fontSize: moderateScale(14),
			color: grey[500],
			fontWeight: '400',
			paddingLeft: moderateScale(8),
			paddingVertical: moderateScale(10),
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
