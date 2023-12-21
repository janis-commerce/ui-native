import React, {FC, useState, useEffect, useRef, useCallback} from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import {black, grey, primary} from '../../theme/palette';
import {formatPlaceholderMulti} from './utils';
import ChevronIcon from './Components/Icons/Chevron';
import DeleteIcon from './Components/Icons/Delete';
import Dropdown from './Components/Dropdown';
import {horizontalScale, moderateScale} from '../../scale';
import {LOAD_STORYBOOK} from '../../../env.json';

enum KeyboardTypes {
	Default = 'default',
	NumberPad = 'number-pad',
	DecimalPad = 'decimal-pad',
	Numeric = 'numeric',
	EmailAddress = 'email-address',
	PhonePad = 'phone-pad',
	URL = 'url',
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
	value?: string;
	optionStyles?: {};
	placeholder?: string;
	inputProps?: TextInput;
	isSearchable?: boolean;
	isMulti?: boolean;
	isDisabled?: boolean;
	noOptionsMessage?: string;
	multiOptionsText?: string;
	keyboardType?: KeyboardTypes;
	onFocus?: () => void;
	onSelectOption?: (selectedOptions: Option[]) => void;
	customOptionComponent?: CustomOptionComponent | null;
}

const Select: FC<SelectProps> = ({
	options,
	label,
	value = null,
	placeholder = '',
	optionStyles = {},
	inputProps = {},
	isSearchable = false,
	isMulti = false,
	isDisabled = false,
	noOptionsMessage = 'no options',
	multiOptionsText = '',
	keyboardType = KeyboardTypes.Default,
	onFocus = () => {},
	onSelectOption = () => {},
	customOptionComponent = null,
	...props
}) => {
	const [inputValue, setInputValue] = useState('');
	const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
	const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
	const [isShowedDropdown, setIsShowedDropdown] = useState(false);

	const inputRef = useRef<TextInput>(null);
	const hasDefaultValue = value && options?.find((option) => option.label === value);
	const isMoveLabel = isShowedDropdown || inputValue;
	const showDeleteIcon = isDisabled ? false : !!inputValue && !!selectedOptions?.length;
	const isArrowRotated = isShowedDropdown ? '180deg' : '0deg';

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
		if (!isSearchable || isMulti) {
			Keyboard.dismiss();
		}
		onFocus();
		setIsShowedDropdown(true);
	};

	const setSingleOption = (option: Option) => {
		setIsShowedDropdown(false);
		setSelectedOptions([option]);
		setInputValue(option.label);
	};

	const setMultiOptions = (option: Option) => {
		const optionMatcher = selectedOptions.some((previewOption) => previewOption === option);
		const updateOption = optionMatcher
			? selectedOptions.filter((previewOption) => previewOption !== option)
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
		setIsShowedDropdown(!isShowedDropdown);
		inputRef.current?.blur();
	};

	const handleResetOptions = () => {
		setIsShowedDropdown(false);
		setInputValue('');
		setSelectedOptions([]);
	};

	const memoizedSelectedOptions = useCallback(() => {
		if (!!selectedOptions?.length && !!inputValue) {
			onSelectOption(selectedOptions);
		}
	}, [inputValue, onSelectOption, selectedOptions]);

	useEffect(() => {
		memoizedSelectedOptions();
	}, [selectedOptions, inputValue, memoizedSelectedOptions]);

	useEffect(() => {
		if (hasDefaultValue) {
			setSelectedOptions([hasDefaultValue]);
			setInputValue(value);
		}
	}, [hasDefaultValue, value]);

	const moveLabel = isMoveLabel ? 38 : 10;

	const validFontSize = !LOAD_STORYBOOK ? moderateScale(16) : 16;
	const validMarginBottom = !LOAD_STORYBOOK ? moderateScale(10) : 10;
	const validMarginTop = !LOAD_STORYBOOK ? moderateScale(18) : 18;
	const validHeightLabel = !LOAD_STORYBOOK ? moderateScale(19) : 19;
	const validPadding = !LOAD_STORYBOOK ? moderateScale(8) : 8;
	const validBottomLabel = !LOAD_STORYBOOK ? moderateScale(moveLabel) : moveLabel;
	const validHeightInput = !LOAD_STORYBOOK ? moderateScale(38) : 38;
	const validRight = !LOAD_STORYBOOK ? horizontalScale(30) : 30;
	const validBorderBottomWidth = !LOAD_STORYBOOK ? moderateScale(1) : 1;

	const styles = StyleSheet.create({
		wrapper: {
			width: '100%',
			marginBottom: validMarginBottom,
			position: 'relative',
			zIndex: isShowedDropdown ? 10 : 0,
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
			borderBottomColor: isShowedDropdown ? primary.main : grey[200],
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
		<View style={styles.wrapper}>
			<View style={styles.wrapperInput} {...props}>
				{showDeleteIcon && <DeleteIcon style={styles.deleteIcon} onPress={handleResetOptions} />}
				<ChevronIcon
					style={styles.arrowIcon}
					color={isDisabled ? black.main : primary.main}
					onPress={handleCloseDropdown}
				/>

				<Text style={styles.label}>{label}</Text>
				<TextInput
					ref={inputRef}
					style={styles.input}
					value={inputValue}
					placeholder={isMoveLabel && placeholder}
					showSoftInputOnFocus={!isMulti && isSearchable}
					caretHidden={!isSearchable}
					keyboardType={keyboardType}
					editable={!isDisabled}
					onFocus={handleOnFocus}
					onChangeText={handleChange}
					{...inputProps}
				/>
			</View>

			<Dropdown
				isShowedDropdown={isShowedDropdown}
				filteredOptions={filteredOptions}
				selectedOptions={selectedOptions}
				noOptionsMessage={noOptionsMessage}
				optionStyles={optionStyles}
				callbackOption={handleSelectedOption}
				customOptionComponent={customOptionComponent}
			/>
		</View>
	);
};

export default Select;
