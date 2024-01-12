/* istanbul ignore file */
import React, {FC, useState, useEffect, useRef, useCallback} from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import {black, grey, primary} from '../../theme/palette';
import {formatPlaceholderMulti} from './utils';
import Options from './Components/Options';
import Icon from '../Icon';
import {horizontalScale, moderateScale, scaledForDevice} from '../../scale';

enum KeyboardTypes {
	Default = 'default',
	NumberPad = 'number-pad',
	DecimalPad = 'decimal-pad',
	Numeric = 'numeric',
	EmailAddress = 'email-address',
	PhonePad = 'phone-pad',
	URL = 'url',
}

export enum VariantOptions {
	Dropdown = 'Dropdown',
	Modal = 'Modal',
}

export interface DropdownMeasures {
	width: number;
	pageY: number;
	pageX: number;
}

export interface Option {
	label: string;
	value: string | number;
}

interface CustomOptionComponentProps {
	renderedOption: Option;
	filteredOptions: Option[];
	selectedOptions: Option[];
	callbackOptionSelected: (option: Option) => void;
}

export type CustomOptionComponent = (props: CustomOptionComponentProps) => React.Component;

interface SelectProps {
	options: Option[];
	label: string;
	value?: Option[];
	variantOptions?: VariantOptions;
	optionStyles?: {};
	placeholder?: string;
	inputProps?: TextInput;
	isMulti?: boolean;
	isDisabled?: boolean;
	noOptionsMessage?: string;
	multiOptionsText?: string;
	keyboardType?: KeyboardTypes;
	onFocus?: () => void;
	onSelectOption?: (selectedOptions: Option[]) => void;
	customOptionComponent?: CustomOptionComponent | null;
	modalAcceptText?: string;
}

const Select: FC<SelectProps> = ({
	options,
	label,
	value = null,
	variantOptions = VariantOptions.Dropdown,
	placeholder = '',
	optionStyles = {},
	inputProps = {},
	isMulti = false,
	isDisabled = false,
	noOptionsMessage = 'no options',
	multiOptionsText = null,
	keyboardType = KeyboardTypes.Default,
	onFocus = () => {},
	onSelectOption = () => {},
	customOptionComponent = null,
	modalAcceptText = 'accept',
	...props
}) => {
	const [inputValue, setInputValue] = useState('');
	const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
	const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
	const [isShowedOptions, setIsShowedOptions] = useState(false);
	const [dropdownMeasures, setDropdownMeasures] = useState<DropdownMeasures>({
		width: 0,
		pageY: 0,
		pageX: 0,
	});

	const inputRef = useRef<TextInput>(null);
	const hasDefaultValue =
		!!value?.length && options?.some((option) => option?.label === value[0]?.label);
	const isMoveLabel = isShowedOptions || inputValue;
	const showDeleteIcon = isDisabled ? false : !!inputValue && !!selectedOptions?.length;
	const isArrowRotated = isShowedOptions ? '180deg' : '0deg';

	const filterOptions = (textValue: string) => {
		if (typeof textValue !== 'string' || !textValue.length) {
			return setFilteredOptions(options);
		}

		const filtered = options?.filter((option) =>
			option.label.toLowerCase().includes(textValue.toLowerCase())
		);
		return setFilteredOptions(filtered);
	};

	const handleChange = (textValue: string) => {
		setInputValue(textValue);
		filterOptions(textValue);
	};

	const handleOnFocus = () => {
		Keyboard.dismiss();
		setIsShowedOptions(true);
		onFocus();
	};

	const setSingleOption = (option: Option) => {
		setIsShowedOptions(false);
		setSelectedOptions([option]);
		setInputValue(option.label);
	};

	const setMultiOptions = (option: Option) => {
		const optionMatcher = !!selectedOptions.find(
			(previewOption) => previewOption.value === option.value
		);
		const updateOption = optionMatcher
			? selectedOptions.filter((previewOption) => previewOption.value !== option.value)
			: [...selectedOptions, option];

		setSelectedOptions(updateOption);
		setInputValue(formatPlaceholderMulti(updateOption, multiOptionsText));
	};

	const handleSelectedOption = (option: Option) =>
		isMulti ? setMultiOptions(option) : setSingleOption(option);

	const handleCloseDropdown = () => {
		if (isDisabled) {
			return null;
		}
		setIsShowedOptions(!isShowedOptions);
		inputRef.current?.blur();
	};

	const handleResetOptions = () => {
		setIsShowedOptions(false);
		setInputValue('');
		setSelectedOptions([]);
	};

	const memoizedSelectedOptions = useCallback(() => {
		if (!!selectedOptions?.length && !!inputValue) {
			onSelectOption(selectedOptions);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedOptions]);

	useEffect(() => {
		memoizedSelectedOptions();
	}, [selectedOptions, memoizedSelectedOptions]);

	useEffect(() => {
		if (hasDefaultValue) {
			setSelectedOptions(value);
			setInputValue(formatPlaceholderMulti(value, multiOptionsText));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hasDefaultValue, value]);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.measure((x, y, width, height, pageX, pageY) =>
				setDropdownMeasures({width, pageX, pageY: pageY - 15})
			);
		}
	}, [isShowedOptions]);

	const moveLabel = isMoveLabel ? 38 : 10;
	const validFontSize = scaledForDevice(16, moderateScale);
	const validMarginBottom = scaledForDevice(10, moderateScale);
	const validMarginTop = scaledForDevice(18, moderateScale);
	const validHeightLabel = scaledForDevice(19, moderateScale);
	const validPadding = scaledForDevice(8, moderateScale);
	const validBottomLabel = scaledForDevice(moveLabel, moderateScale);
	const validHeightInput = scaledForDevice(38, moderateScale);
	const validRight = scaledForDevice(30, horizontalScale);
	const validBorderBottomWidth = scaledForDevice(1, moderateScale);

	const styles = StyleSheet.create({
		wrapper: {
			width: '100%',
			marginBottom: validMarginBottom,
			position: 'relative',
			zIndex: isShowedOptions ? 10 : 0,
		},
		wrapperInput: {
			position: 'relative',
			width: '100%',
			marginBottom: 0,
			marginTop: validMarginTop,
		},
		label: {
			position: 'absolute',
			color: isMoveLabel && !isDisabled ? primary.main : black.main,
			fontSize: validFontSize,
			lineHeight: validHeightLabel,
			letterSpacing: 0,
			left: 0,
			fontWeight: isMoveLabel ? '600' : '400',
			bottom: validBottomLabel,
		},
		input: {
			width: '100%',
			height: validHeightInput,
			padding: 0,
			fontSize: validFontSize,
			lineHeight: validHeightLabel,
			letterSpacing: 0,
			borderBottomWidth: validBorderBottomWidth,
			color: black.main,
			borderBottomColor: isShowedOptions ? primary.main : grey[200],
		},
		arrowIcon: {
			position: 'absolute',
			padding: validPadding,
			right: 0,
			bottom: 0,
			zIndex: 1,
			transform: [{rotate: isArrowRotated}],
		},
		deleteIcon: {
			position: 'absolute',
			padding: validPadding,
			right: validRight,
			bottom: 0,
			zIndex: 1,
		},
	});

	return (
		<View style={styles.wrapper} {...props}>
			<View style={styles.wrapperInput}>
				{isMulti && showDeleteIcon && (
					<Icon
						size={20}
						color={black.main}
						name="cross_circle_flat"
						style={styles.deleteIcon}
						onPress={handleResetOptions}
					/>
				)}
				<Icon
					size={20}
					color={isDisabled ? black.main : primary.main}
					name="chevron_down"
					style={styles.arrowIcon}
					onPress={handleCloseDropdown}
				/>
				<Text style={styles.label}>{label}</Text>
				<TextInput
					ref={inputRef}
					style={styles.input}
					value={inputValue}
					placeholder={isMoveLabel && placeholder}
					showSoftInputOnFocus={false}
					caretHidden={true}
					keyboardType={keyboardType}
					editable={!isDisabled}
					onFocus={handleOnFocus}
					onChangeText={handleChange}
					{...inputProps}
				/>
			</View>

			<Options
				variantOptions={variantOptions}
				dropdownMeasures={dropdownMeasures}
				setIsShowedOptions={setIsShowedOptions}
				isShowedOptions={isShowedOptions}
				filteredOptions={filteredOptions}
				selectedOptions={selectedOptions}
				noOptionsMessage={noOptionsMessage}
				optionStyles={optionStyles}
				callbackOption={handleSelectedOption}
				customOptionComponent={customOptionComponent}
				isMulti={isMulti}
				modalAcceptText={modalAcceptText}
			/>
		</View>
	);
};

export default Select;
