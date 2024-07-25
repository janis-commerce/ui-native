import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView, Text} from 'react-native';
import {base, black, grey, primary, white} from 'theme/palette';
import {CustomOptionComponent, DropdownMeasures, Option, VariantOptions} from '../..';
import SwitcherComponent from '../SwitcherComponent';

interface OptionsProps {
	variantOptions: VariantOptions;
	dropdownMeasures: DropdownMeasures;
	isShowedOptions: boolean;
	setIsShowedOptions: (isShowed: boolean) => void;
	filteredOptions: Option[];
	selectedOptions: Option[];
	noOptionsMessage: string;
	optionStyles?: {};
	callbackOption: (option: Option) => void;
	customOptionComponent?: CustomOptionComponent | null;
	isMulti: boolean;
	modalAcceptText: string;
}

const Options: FC<OptionsProps> = (props) => {
	const {
		variantOptions,
		dropdownMeasures,
		isShowedOptions,
		setIsShowedOptions,
		filteredOptions,
		callbackOption,
		selectedOptions,
		noOptionsMessage,
		optionStyles,
		customOptionComponent = null,
		isMulti,
		modalAcceptText,
	} = props;
	const handleSelectedOption = (option: Option) => callbackOption(option);
	const isModal = variantOptions === 'Modal';

	const styles = StyleSheet.create({
		container: {
			position: 'relative',
			width: '100%',
			padding: !isModal ? 8 : 0,
		},
		optionWrapper: {
			position: !isModal ? 'absolute' : 'relative',
			maxHeight: 168,
			minHeight: 'auto',
			borderColor: grey[200],
			backgroundColor: base.white,
			width: '100%',
			top: !isModal ? 60 : 0,
			marginBottom: 20,
			elevation: !isModal ? 5 : 0,
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
		<SwitcherComponent
			measures={dropdownMeasures}
			variant={variantOptions}
			show={isShowedOptions}
			setShow={setIsShowedOptions}
			isMulti={isMulti}
			modalAcceptText={modalAcceptText}>
			<ScrollView style={styles.optionWrapper} contentContainerStyle={styles.container}>
				{filteredOptions?.length ? renderOptions : noRenderOptions}
			</ScrollView>
		</SwitcherComponent>
	);
};

export default Options;
