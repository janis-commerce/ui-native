import React from 'react';
import {create} from 'react-test-renderer';
import Options from './Components/Options';
import {TextInput} from 'react-native';
import Icon from '../Icon';
import Select from './';

jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

const useStateSpy = jest.spyOn(React, 'useState');
const setInputValueSpy = jest.fn();
const setSelectedOptions = jest.fn();
const setFilteredOptionsSpy = jest.fn();
const setIsShowedDropdownSpy = jest.fn();
const setDropdownMeasures = jest.fn();

const validOptions = [
	{label: 'Argentina', value: '1'},
	{label: 'Brasil', value: '2'},
	{label: 'Chile', value: '3'},
];

const validProps = {
	value: [validOptions[0]],
	options: validOptions,
	label: 'Paises',
	onSelectOption: jest.fn(),
	onFocusSpy: jest.fn(),
};

const validMeasures = {width: 0, pageY: 0, pageX: 0};

describe('Select component', () => {
	describe('render correctly', () => {
		it('when has minimum props needed', () => {
			const {toJSON} = create(<Select options={validProps.options} label={validProps.label} />);
			expect(toJSON()).toBeTruthy();
		});

		it('when is disabled and Dropdown is not open', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([false, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);
			const {root} = create(
				<Select options={validProps.options} label={validProps.label} isDisabled={true} />
			);
			const ChevronComponent = root.findByType(Icon);
			ChevronComponent.props.onPress();

			expect(setIsShowedDropdownSpy).not.toBeCalled();
		});
	});

	describe('delete option', () => {
		it('when press on delete icon', () => {
			useStateSpy
				.mockReturnValueOnce(['Argentina', setInputValueSpy])
				.mockReturnValueOnce([[validOptions[0]], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);

			const {root} = create(
				<Select options={validProps.options} label={validProps.label} isMulti />
			);
			const [DeleteComponent] = root.findAllByType(Icon);
			DeleteComponent.props.onPress();

			expect(setIsShowedDropdownSpy).toBeCalledWith(false);
			expect(setInputValueSpy).toBeCalledWith('');
			expect(setSelectedOptions).toBeCalledWith([]);
		});
	});

	describe('when is selected a single option', () => {
		it('it should render this option in placeholder correctly', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);

			const {root} = create(<Select options={validProps.options} label={validProps.label} />);
			const InputComponent = root.findByType(TextInput);
			const OptionsComponent = root.findByType(Options);
			InputComponent.props.onFocus();
			OptionsComponent.props.callbackOption(validOptions[0]);

			expect(setIsShowedDropdownSpy).toBeCalledWith(true);
			expect(setIsShowedDropdownSpy).toBeCalledWith(false);
			expect(setSelectedOptions).toBeCalledWith([validOptions[0]]);
			expect(setInputValueSpy).toBeCalledWith(validOptions[0].label);
		});

		it('with isSercheable, but ingresed value is not string', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);

			const {root} = create(
				<Select options={validProps.options} label={validProps.label} isSearchable />
			);
			const InputComponent = root.findByType(TextInput);
			InputComponent.props.onFocus();
			InputComponent.props.onChangeText(5);

			expect(setIsShowedDropdownSpy).toBeCalledWith(true);
			expect(setInputValueSpy).toBeCalledWith(5);
		});

		it('with isSercheable, but ingresed value is empty string', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);

			const {root} = create(
				<Select options={validProps.options} label={validProps.label} isSearchable />
			);
			const InputComponent = root.findByType(TextInput);
			InputComponent.props.onFocus();
			InputComponent.props.onChangeText('');

			expect(setIsShowedDropdownSpy).toBeCalledWith(true);
			expect(setInputValueSpy).toBeCalledWith('');
		});

		it('with isSercheable, but ingresed value is an string', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);

			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					isSearchable
					onFocus={validProps.onFocusSpy}
				/>
			);
			const InputComponent = root.findByType(TextInput);
			InputComponent.props.onFocus();
			InputComponent.props.onChangeText('arg');

			expect(setInputValueSpy).toBeCalledWith('arg');
			expect(validProps.onFocusSpy).toBeCalled();
		});
	});

	describe('when is selected a multiple option', () => {
		it('it should render this option in placeholder correctly and need close Options with chevron click', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);

			const {root} = create(
				<Select options={validProps.options} label={validProps.label} isMulti />
			);
			const OptionsComponent = root.findByType(Options);
			const ChevronComponent = root.findByType(Icon);
			OptionsComponent.props.callbackOption(validOptions[0]);
			ChevronComponent.props.onPress();

			expect(setSelectedOptions).toBeCalledWith([validOptions[0]]);
			expect(setInputValueSpy).toBeCalledWith(validOptions[0].label);
			expect(setIsShowedDropdownSpy).toBeCalledWith(false);
		});

		it('and it exist, is deleted from selectOption', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[validOptions[0]], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);

			const {root} = create(
				<Select options={validProps.options} label={validProps.label} isMulti />
			);
			const OptionsComponent = root.findByType(Options);
			const ChevronComponent = root.findByType(Icon);
			OptionsComponent.props.callbackOption(validOptions[0]);
			ChevronComponent.props.onPress();

			expect(setSelectedOptions).toBeCalledWith([]);
			expect(setInputValueSpy).toBeCalledWith('');
			expect(setIsShowedDropdownSpy).toBeCalledWith(false);
		});
	});

	describe('prop value', () => {
		it('is set when it is found within the options', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[validOptions[0]], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy])
				.mockReturnValueOnce([validMeasures, setDropdownMeasures]);

			const {root} = create(
				<Select
					value={validProps.value}
					options={validProps.options}
					label={validProps.label}
					isMulti
				/>
			);
			const OptionsComponent = root.findByType(Options);
			const ChevronComponent = root.findByType(Icon);
			OptionsComponent.props.callbackOption(validOptions[0]);
			ChevronComponent.props.onPress();

			expect(setSelectedOptions).toBeCalledWith([]);
			expect(setInputValueSpy).toBeCalledWith('');
			expect(setIsShowedDropdownSpy).toBeCalledWith(false);
		});
	});
});
