import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text} from 'react-native';
import {base, black, grey, primary, white} from '../../../../theme/palette';
import {Option} from '../..';

interface DropdownProps {
	isShowedDropdown: boolean;
	filteredOptions: Option[];
	selectedOptions: Option[];
	callbackOption: (option: Option) => void;
	noOptionsMessage: string;
	optionStyles: {};
}

const Dropdown: FC<DropdownProps> = ({
	isShowedDropdown,
	filteredOptions,
	callbackOption,
	selectedOptions,
	noOptionsMessage,
	optionStyles,
}) => {
	if (!isShowedDropdown) {
		return null;
	}

	const handleSelectedOption = (option: Option) => {
		if (!filteredOptions.length) {
			return null;
		}
		return callbackOption(option);
	};

	const styles = StyleSheet.create({
		container: {
			width: '100%',
			padding: 8,
		},
		optionWrapper: {
			position: 'absolute',
			maxHeight: 168,
			borderColor: grey[200],
			backgroundColor: base.white,
			width: '100%',
			top: 60,
			marginBottom: 20,
			elevation: 5,
			zIndex: 10,
			flex: 1,
		},
		option: {
			width: '100%',
			height: 42,
			justifyContent: 'center',
			alignItems: 'stretch',
			paddingLeft: 8,
		},
		optionText: {
			color: black.main,
			fontWeight: '400',
		},
		noOptionText: {
			color: grey[500],
			fontWeight: '400',
			paddingLeft: 8,
			paddingVertical: 10,
		},
	});

	const renderOptions =
		filteredOptions?.length &&
		filteredOptions.map((option) => {
			const isSelectedOption = selectedOptions.includes(option);
			const styleText = {...styles.optionText, ...(isSelectedOption && {color: primary.main})};
			const styleOption = {
				...styles.option,
				...(isSelectedOption && {backgroundColor: white.light}),
			};

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
			{filteredOptions.length ? renderOptions : noRenderOptions}
		</ScrollView>
	);
};

export default Dropdown;
