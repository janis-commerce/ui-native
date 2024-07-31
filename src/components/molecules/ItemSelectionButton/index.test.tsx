import React from 'react';
import {create} from 'react-test-renderer';
import ItemSelectionButton from './index';
import CheckBox from 'atoms/CheckBox';
import RadioButton from 'atoms/RadioButton';
import {TouchableOpacity} from 'react-native';

describe('ItemSelectionButton component', () => {
	describe('does not render', () => {
		it('as name prop is not passed', () => {
			const {toJSON} = create(<ItemSelectionButton name="" />);

			expect(toJSON()).toBeNull();
		});
	});

	it('should render with checkbox at the right', () => {
		const ItemSelectionButtonComp = create(
			<ItemSelectionButton name="Warehouse" rightSelection />
		).root;
		const CheckboxComp = ItemSelectionButtonComp.findByType(CheckBox);

		expect(CheckboxComp).toBeTruthy();
	});

	it('should render with checkbox at the left and press it', () => {
		const ItemSelectionButtonComp = create(
			<ItemSelectionButton name="Warehouse" leftSelection />
		).root;

		const Touchable = ItemSelectionButtonComp.findByType(TouchableOpacity);
		const {onPress: onSelection} = Touchable.props;

		onSelection();

		const CheckboxComp = ItemSelectionButtonComp.findByType(CheckBox);

		expect(CheckboxComp).toBeTruthy();
	});

	it('should render with radioButton at the right', () => {
		const ItemSelectionButtonComp = create(
			<ItemSelectionButton name="Warehouse" radioButton rightSelection />
		).root;
		const RadioButtonComp = ItemSelectionButtonComp.findByType(RadioButton);

		expect(RadioButtonComp).toBeTruthy();
	});

	it('should render with radioButton at the left', () => {
		const ItemSelectionButtonComp = create(
			<ItemSelectionButton name="Warehouse" radioButton leftSelection />
		).root;
		const RadioButtonComp = ItemSelectionButtonComp.findByType(RadioButton);

		expect(RadioButtonComp).toBeTruthy();
	});
});
