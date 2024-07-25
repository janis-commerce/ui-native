import React from 'react';
import {create} from 'react-test-renderer';
import Options from './';
import {VariantOptions} from '../../';
import {ScrollView, TouchableOpacity} from 'react-native';

const validOptions = [
	{label: '1', value: '1'},
	{label: '2', value: '2'},
];

const selectValidOptions = [{label: '2', value: '2'}];

const validStyles = {
	backgroundColor: '#02BFFB',
};

const dropdownMeasures = {
	width: 0,
	pageY: 0,
	pageX: 0,
};

const validProp = {
	variantOptions: VariantOptions.Dropdown,
	dropdownMeasures: dropdownMeasures,
	isShowedOptions: true,
	setIsShowedOptions: jest.fn(),
	filteredOptions: validOptions,
	selectedOptions: selectValidOptions,
	noOptionsMessage: 'options',
	optionStyles: validStyles,
	callbackOption: jest.fn(),
	customOptionComponent: jest.fn(),
	isMulti: true,
	modalAcceptText: 'Accept',
};

describe('Options component', () => {
	describe('render correctly', () => {
		it('when props are valid and is switched to dropdown', () => {
			const {toJSON} = create(
				<Options
					isShowedOptions={validProp.isShowedOptions}
					setIsShowedOptions={validProp.setIsShowedOptions}
					filteredOptions={validProp.filteredOptions}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					optionStyles={validProp.optionStyles}
					callbackOption={validProp.callbackOption}
					variantOptions={validProp.variantOptions}
					dropdownMeasures={validProp.dropdownMeasures}
					isMulti={validProp.isMulti}
					modalAcceptText={validProp.modalAcceptText}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});

		it('when props are valid and is switched to modal', () => {
			const {toJSON} = create(
				<Options
					isShowedOptions={validProp.isShowedOptions}
					setIsShowedOptions={validProp.setIsShowedOptions}
					filteredOptions={validProp.filteredOptions}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					optionStyles={validProp.optionStyles}
					callbackOption={validProp.callbackOption}
					variantOptions={VariantOptions.Modal}
					dropdownMeasures={validProp.dropdownMeasures}
					isMulti={validProp.isMulti}
					modalAcceptText={validProp.modalAcceptText}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});

		it('when show is no options because filteredOptions is an empty array', () => {
			const {root} = create(
				<Options
					isShowedOptions={validProp.isShowedOptions}
					setIsShowedOptions={validProp.setIsShowedOptions}
					filteredOptions={[]}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					optionStyles={validProp.optionStyles}
					callbackOption={validProp.callbackOption}
					variantOptions={validProp.variantOptions}
					dropdownMeasures={validProp.dropdownMeasures}
					isMulti={validProp.isMulti}
					modalAcceptText={validProp.modalAcceptText}
				/>
			);
			const [noOptionsComp] = root.findAllByType(ScrollView);
			const ViewComp = noOptionsComp.props.children;
			const TextComp = ViewComp.props.children;
			const optionText = TextComp.props.children[1];
			expect(optionText).toBe(validProp.noOptionsMessage);
		});

		it('when is updated filteredOptions', () => {
			const {root} = create(
				<Options
					isShowedOptions={validProp.isShowedOptions}
					setIsShowedOptions={validProp.setIsShowedOptions}
					filteredOptions={validProp.filteredOptions}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					optionStyles={validProp.optionStyles}
					callbackOption={validProp.callbackOption}
					variantOptions={VariantOptions.Modal}
					dropdownMeasures={validProp.dropdownMeasures}
					isMulti={validProp.isMulti}
					modalAcceptText={validProp.modalAcceptText}
				/>
			);
			const [TouchableOpacityComp] = root.findAllByType(TouchableOpacity);
			TouchableOpacityComp.props.onPress();

			expect(root).toBeTruthy();
		});

		it('when render CustomOptionComponent', () => {
			const {toJSON} = create(
				<Options
					isShowedOptions={validProp.isShowedOptions}
					setIsShowedOptions={validProp.setIsShowedOptions}
					filteredOptions={validProp.filteredOptions}
					selectedOptions={validProp.selectedOptions}
					noOptionsMessage={validProp.noOptionsMessage}
					optionStyles={validProp.optionStyles}
					callbackOption={validProp.callbackOption}
					variantOptions={VariantOptions.Modal}
					dropdownMeasures={validProp.dropdownMeasures}
					isMulti={validProp.isMulti}
					modalAcceptText={validProp.modalAcceptText}
					customOptionComponent={validProp.customOptionComponent}
				/>
			);

			expect(toJSON()).toBeTruthy();
		});
	});
});
