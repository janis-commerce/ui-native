import React, {FC, useState, useEffect, useRef, useCallback} from 'react';
import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import {black, grey, primary} from '../../theme/palette';
import {formatPlaceholderMulti} from './utils';
import Options from './Components/Options';
import Icon from '../Icon';

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
	isSearchable?: boolean;
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
	isSearchable = false,
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
		if (!isSearchable || !isShowedOptions || isMulti || variantOptions === VariantOptions.Modal) {
			Keyboard.dismiss();
		}
		onFocus();
		setIsShowedOptions(true);
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

	const styles = StyleSheet.create({
		wrapper: {
			width: '100%',
			marginBottom: 10,
			position: 'relative',
			zIndex: isShowedOptions ? 10 : 0,
		},
		wrapperInput: {
			position: 'relative',
			width: '100%',
			marginBottom: 0,
			marginTop: 18,
		},
		label: {
			position: 'absolute',
			color: isMoveLabel && !isDisabled ? primary.main : black.main,
			fontSize: 16,
			lineHeight: 19,
			letterSpacing: 0,
			left: 0,
			fontWeight: isMoveLabel ? '600' : '400',
			bottom: isMoveLabel ? 38 : 10,
		},
		input: {
			width: '100%',
			height: 38,
			padding: 0,
			fontSize: 16,
			lineHeight: 19,
			letterSpacing: 0,
			borderBottomWidth: 1,
			color: black.main,
			borderBottomColor: isShowedOptions ? primary.main : grey[200],
		},
		arrowIcon: {
			position: 'absolute',
			padding: 8,
			right: 0,
			bottom: 0,
			zIndex: 1,
			transform: [{rotate: isArrowRotated}],
		},
		deleteIcon: {
			position: 'absolute',
			padding: 8,
			right: 30,
			bottom: 0,
			zIndex: 1,
		},
	});

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.measure((x, y, width, height, pageX, pageY) =>
				setDropdownMeasures({width, pageX, pageY: pageY - 15})
			);
		}
	}, [isShowedOptions]);

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
					showSoftInputOnFocus={!isMulti && isSearchable}
					caretHidden={!isSearchable}
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
