import React from 'react';
import {create} from 'react-test-renderer';
import Dropdown from './';
import {Text, TouchableOpacity, View} from 'react-native';
import {primary, white} from '../../../../theme/palette';

const validOptions = [
	{label: '1', value: '1'},
	{label: '2', value: '2'},
];

const selectValidOptions = [{label: '2', value: '2'}];

const validStyles = {
	backgroundColor: '#02BFFB',
};

const validProp = {
	isShowedDropdown: true,
	filteredOptions: validOptions,
	selectedOptions: selectValidOptions,
	noOptionsMessage: 'no options test',
	optionStyles: validStyles,
	callbackOption: jest.fn(),
};

describe('Dropdown component', () => {
	describe('render correctly', () => {
		it('when props are valid', () => {
			const {toJSON} = create(
				<Dropdown
					isShowedDropdown={validProp.isShowedDropdown}
					filteredOptions={validProp.filteredOptions}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					optionStyles={validProp.optionStyles}
					callbackOption={validProp.callbackOption}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});

		it('when selectedOption is included in filteredOptions', () => {
			const {root} = create(
				<Dropdown
					isShowedDropdown={validProp.isShowedDropdown}
					filteredOptions={validProp.filteredOptions}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					callbackOption={validProp.callbackOption}
				/>
			);
			const OptionsComp = root.findAllByType(TouchableOpacity);
			const OptionTextComp = root.findAllByType(Text);
			const {backgroundColor} = OptionsComp[1].props.style;
			const {color} = OptionTextComp[1].props.style;

			expect(backgroundColor).toBe(white.light);
			expect(color).toBe(primary.main);
		});
	});

	describe('render null', () => {
		it('when isShowedDropdown is invalid', () => {
			const {toJSON} = create(
				<Dropdown
					isShowedDropdown={false}
					filteredOptions={validProp.filteredOptions}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					optionStyles={validProp.optionStyles}
					callbackOption={validProp.callbackOption}
				/>
			);
			expect(toJSON()).toBeNull();
		});
	});

	describe('render noOptions', () => {
		it('when isShowedDropdown is invalid', () => {
			const {root} = create(
				<Dropdown
					isShowedDropdown={validProp.isShowedDropdown}
					filteredOptions={[]}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					optionStyles={validProp.optionStyles}
					callbackOption={validProp.callbackOption}
				/>
			);
			const [, noOptionsComp] = root.findAllByType(View);
			const opTionText = noOptionsComp.props.children.props.children[1];

			expect(opTionText).toBe(validProp.noOptionsMessage);
		});
	});

	describe('when handleSelectedOption is pressed', () => {
		it("should call callback with selected option's value", () => {
			const {root} = create(
				<Dropdown
					isShowedDropdown={validProp.isShowedDropdown}
					filteredOptions={validProp.filteredOptions}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					callbackOption={validProp.callbackOption}
				/>
			);
			const [, OptionsComp] = root.findAllByType(TouchableOpacity);
			const {onPress} = OptionsComp.props;
			onPress();

			expect(validProp.callbackOption).toBeCalledWith(selectValidOptions[0]);
		});
	});
});
