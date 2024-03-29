import React from 'react';
import Input from './index';
import {create} from 'react-test-renderer';
import {TextInput} from 'react-native';

const useStateSpy = jest.spyOn(React, 'useState');

describe('Input', () => {
	describe('it should not render', () => {
		it('as there is no placeholder', () => {
			const InputComp = create(<Input label="Test" placeholder={''} />).toJSON();
			expect(InputComp).toBeFalsy();
		});
	});

	describe('it should render', () => {
		it('as it has valid label and placeholder', () => {
			const InputComp = create(<Input label="Test" placeholder="Test" />).toJSON();

			expect(InputComp).toBeTruthy();
		});
		it('as it has valid label, placeholder and label is visible', () => {
			const mockSetInputState = jest.fn();
			useStateSpy.mockReturnValueOnce(['focus', mockSetInputState]);

			const InputComp = create(<Input label="Test" placeholder="Test" />).toJSON();

			expect(InputComp).toBeTruthy();
		});
		it('as it has valid label, placeholder and status message is visible', () => {
			const mockSetInputState = jest.fn();
			useStateSpy.mockReturnValueOnce(['complete', mockSetInputState]);

			const InputComp = create(
				<Input label="Test" placeholder="Test" statusMessage="Test" />
			).toJSON();

			expect(InputComp).toBeTruthy();
		});
		it('as it has valid label, placeholder and user focuses on input', () => {
			const mockSetInputState = jest.fn();
			useStateSpy.mockReturnValueOnce(['', mockSetInputState]);

			const InputComp = create(<Input label="Test" placeholder="Test" />).root;

			const TextInputComp = InputComp.findByType(TextInput);
			const {onFocus} = TextInputComp.props;

			onFocus();

			expect(mockSetInputState).toHaveBeenCalledWith('focus');
		});
		it('as it has valid label, placeholder and user finishes typing on input without value', () => {
			const mockSetInputState = jest.fn();
			useStateSpy.mockReturnValueOnce(['', mockSetInputState]);

			const InputComp = create(<Input label="Test" placeholder="Test" />).root;

			const TextInputComp = InputComp.findByType(TextInput);
			const {onEndEditing} = TextInputComp.props;

			onEndEditing({nativeEvent: {}});

			expect(mockSetInputState).toHaveBeenCalledWith('incomplete');
		});
		it('as it has valid label, placeholder and user finishes typing on input with value', () => {
			const mockSetInputState = jest.fn();
			useStateSpy.mockReturnValueOnce(['', mockSetInputState]);

			const InputComp = create(<Input label="Test" placeholder="Test" value="Test" />).root;

			const TextInputComp = InputComp.findByType(TextInput);
			const {onEndEditing} = TextInputComp.props;

			onEndEditing({nativeEvent: {text: 'valid value'}});

			expect(mockSetInputState).toHaveBeenCalledWith('complete');
		});
		it('as it has valid label, placeholder and onChange callback executes', () => {
			const mockSetInputState = jest.fn();
			useStateSpy.mockReturnValueOnce(['', mockSetInputState]);

			const InputComp = create(<Input label="Test" placeholder="Test" />).root;

			const TextInputComp = InputComp.findByType(TextInput);
			const {onChange, onEndEditing} = TextInputComp.props;

			onEndEditing({nativeEvent: {text: 'valid value'}});
			onChange();

			expect(mockSetInputState).toBeCalledTimes(1);
		});
		it('as it has valid label, placeholder and user submits', () => {
			const mockSetInputState = jest.fn();
			useStateSpy.mockReturnValueOnce(['', mockSetInputState]);

			const InputComp = create(<Input label="Test" placeholder="Test" />).root;

			const TextInputComp = InputComp.findByType(TextInput);
			const {onSubmitEditing, onEndEditing} = TextInputComp.props;

			onEndEditing({nativeEvent: {text: 'valid value'}});
			onSubmitEditing();

			expect(mockSetInputState).toBeCalledTimes(1);
		});
	});
});
