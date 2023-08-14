import React from 'react';
import {create} from 'react-test-renderer';
import ChevronIcon from './Components/Icons/Chevron';
import DeleteIcon from './Components/Icons/Delete';
import Dropdown from './Components/Dropdown';
import Select from './';
import {TextInput} from 'react-native';

const useStateSpy = jest.spyOn(React, 'useState');
const setInputValueSpy = jest.fn();
const setSelectedOptions = jest.fn();
const setFilteredOptionsSpy = jest.fn();
const setIsShowedDropdownSpy = jest.fn();

const validOptions = [
	{label: 'Argentina', value: '1'},
	{label: 'Brasil', value: '2'},
	{label: 'Chile', value: '3'},
];

const validProps = {
	options: validOptions,
	label: 'Paises',
	onSelectOptionSpy: jest.fn(),
	onFocusSpy: jest.fn(),
};

describe('Select component', () => {
	describe('render correctly', () => {
		it('when has minimum props needed', () => {
			const {toJSON} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					onSelectOption={validProps.onSelectOptionSpy}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});

		it('when is disabled and Dropdown is not open', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([false, setIsShowedDropdownSpy]);
			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					onSelectOption={validProps.onSelectOptionSpy}
					isDisabled={true}
				/>
			);
			const ChevronComponent = root.findByType(ChevronIcon);
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
				.mockReturnValueOnce([true, setIsShowedDropdownSpy]);

			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					onSelectOption={validProps.onSelectOptionSpy}
				/>
			);
			const DeleteComponent = root.findByType(DeleteIcon);
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
				.mockReturnValueOnce([true, setIsShowedDropdownSpy]);

			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					onSelectOption={validProps.onSelectOptionSpy}
				/>
			);
			const InputComponent = root.findByType(TextInput);
			const DropdownComponent = root.findByType(Dropdown);
			InputComponent.props.onFocus();
			DropdownComponent.props.callbackOption(validOptions[0]);

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
				.mockReturnValueOnce([true, setIsShowedDropdownSpy]);

			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					onSelectOption={validProps.onSelectOptionSpy}
					isSearchable
				/>
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
				.mockReturnValueOnce([true, setIsShowedDropdownSpy]);

			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					onSelectOption={validProps.onSelectOptionSpy}
					isSearchable
				/>
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
				.mockReturnValueOnce([true, setIsShowedDropdownSpy]);

			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					isSearchable
					onFocus={validProps.onFocusSpy}
					onSelectOption={validProps.onSelectOptionSpy}
				/>
			);
			const InputComponent = root.findByType(TextInput);
			InputComponent.props.onFocus();
			InputComponent.props.onChangeText('arg');

			expect(setInputValueSpy).toBeCalledWith('arg');
			expect(validProps.onFocusSpy).toBeCalledWith();
		});
	});

	describe('when is selected a multiple option', () => {
		it('it should render this option in placeholder correctly and need close Options with chevron click', () => {
			useStateSpy
				.mockReturnValueOnce(['', setInputValueSpy])
				.mockReturnValueOnce([[], setSelectedOptions])
				.mockReturnValueOnce([validOptions, setFilteredOptionsSpy])
				.mockReturnValueOnce([true, setIsShowedDropdownSpy]);

			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					onSelectOption={validProps.onSelectOptionSpy}
					isMulti
				/>
			);
			const DropdownComponent = root.findByType(Dropdown);
			const ChevronComponent = root.findByType(ChevronIcon);
			DropdownComponent.props.callbackOption(validOptions[0]);
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
				.mockReturnValueOnce([true, setIsShowedDropdownSpy]);

			const {root} = create(
				<Select
					options={validProps.options}
					label={validProps.label}
					onSelectOption={validProps.onSelectOptionSpy}
					isMulti
				/>
			);
			const DropdownComponent = root.findByType(Dropdown);
			const ChevronComponent = root.findByType(ChevronIcon);
			DropdownComponent.props.callbackOption(validOptions[0]);
			ChevronComponent.props.onPress();

			expect(setSelectedOptions).toBeCalledWith([]);
			expect(setInputValueSpy).toBeCalledWith('');
			expect(setIsShowedDropdownSpy).toBeCalledWith(false);
		});
	});
});
