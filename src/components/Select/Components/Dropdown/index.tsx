import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text, Modal, Pressable} from 'react-native';
import {base, black, grey, primary, white} from '../../../../theme/palette';
import {CustomOptionComponent, DropdownMeasures, Option} from '../..';

interface DropdownProps {
	dropdownMeasures: DropdownMeasures;
	isShowedDropdown: boolean;
	setIsShowedDropdown: (isShowed: boolean) => void;
	filteredOptions: Option[];
	selectedOptions: Option[];
	noOptionsMessage: string;
	optionStyles?: {};
	callbackOption: (option: Option) => void;
	customOptionComponent?: CustomOptionComponent | null;
}

const Dropdown: FC<DropdownProps> = (props) => {
	const {
		dropdownMeasures,
		isShowedDropdown,
		setIsShowedDropdown,
		filteredOptions,
		callbackOption,
		selectedOptions,
		noOptionsMessage,
		optionStyles,
		customOptionComponent = null,
	} = props;
	const handleSelectedOption = (option: Option) => callbackOption(option);

	const styles = StyleSheet.create({
		modal: {
			position: 'relative',
			flex: 1,
		},
		containerModal: {
			position: 'absolute',
			width: dropdownMeasures.width,
			top: dropdownMeasures.pageY,
			left: dropdownMeasures.pageX,
			height: '100%',
		},
		backgroundModal: {
			width: '100%',
			height: '100%',
		},
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
		<Modal transparent visible={isShowedDropdown} style={styles.modal}>
			<Pressable onPress={() => setIsShowedDropdown(false)} style={styles.backgroundModal}>
				<View style={styles.containerModal}>
					<ScrollView style={styles.optionWrapper} contentContainerStyle={styles.container}>
						{filteredOptions?.length ? renderOptions : noRenderOptions}
					</ScrollView>
				</View>
			</Pressable>
		</Modal>
	);
};

export default Dropdown;
