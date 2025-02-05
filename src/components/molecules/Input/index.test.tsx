import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Input, {InputProps} from './index';

describe('Input Component', () => {
	describe('it does not render', () => {
		it('as it is amountTotal type and no valid totalValue is passed', () => {
			const {queryByText} = render(
				<Input type="text" variant="amountTotal" totalValue={undefined as unknown as number} />
			);
			const input = queryByText('/6');

			expect(input).toBeNull();
		});
	});

	describe('keyboardTypes', () => {
		it('should apply the correct keyboardType for currency', () => {
			const {getByPlaceholderText} = render(<Input placeholder="Enter amount" type="currency" />);
			const input = getByPlaceholderText('Enter amount');
			expect(input.props.keyboardType).toBe('numeric');
		});

		it('should apply the correct keyboardType for number', () => {
			const {getByPlaceholderText} = render(<Input placeholder="Enter number" type="number" />);
			const input = getByPlaceholderText('Enter number');
			expect(input.props.keyboardType).toBe('numeric');
		});

		it('should apply the correct keyboardType for text', () => {
			const {getByPlaceholderText} = render(<Input placeholder="Enter text" type="text" />);
			const input = getByPlaceholderText('Enter text');
			expect(input.props.keyboardType).toBe('default');
		});

		it('should apply the correct keyboardType for email', () => {
			const {getByPlaceholderText} = render(<Input placeholder="Enter email" type="email" />);
			const input = getByPlaceholderText('Enter email');
			expect(input.props.keyboardType).toBe('email-address');
		});

		it('should apply the correct keyboardType for phone', () => {
			const {getByPlaceholderText} = render(<Input placeholder="Enter phone" type="phone" />);
			const input = getByPlaceholderText('Enter phone');
			expect(input.props.keyboardType).toBe('phone-pad');
		});
	});

	describe('should render correctly', () => {
		it('as default props are passed', () => {
			const {getByPlaceholderText} = render(<Input placeholder="Enter text" type="text" />);
			const input = getByPlaceholderText('Enter text');
			expect(input).toBeTruthy();
		});

		it('and call changeTextCb when text is changed', () => {
			const onChangeTextMock = jest.fn();
			const {getByPlaceholderText} = render(
				<Input placeholder="Enter text" type="text" onChangeText={onChangeTextMock} />
			);
			const input = getByPlaceholderText('Enter text');
			fireEvent.changeText(input, 'new text');
			expect(onChangeTextMock).toHaveBeenCalledWith('new text');
		});

		it('and do not call changeTextCb when text is changed as there is not one', () => {
			const onChangeTextMock = jest.fn();
			const {getByPlaceholderText} = render(<Input placeholder="Enter text" type="text" />);
			const input = getByPlaceholderText('Enter text');
			fireEvent.changeText(input, 'new text');
			expect(onChangeTextMock).toHaveBeenCalledTimes(0);
		});

		it('as it is amountTotal type and is pressed', () => {
			const {getByText} = render(<Input type="text" variant="amountTotal" totalValue={6} />);
			const input = getByText('/6');

			fireEvent.press(input);

			expect(input).toBeTruthy();
		});

		it('and call ref function with the input instance', () => {
			const refMock = jest.fn();

			render(<Input placeholder="Enter text" variant="default" ref={refMock} />);

			expect(refMock).toHaveBeenCalled();

			expect(refMock.mock.calls[0][0]).toBeTruthy();
			expect(refMock.mock.calls[0][0]).toHaveProperty('focus');
		});

		it('when keyboardType is default as no valid combination of variant nor type is passed', () => {
			const {getByPlaceholderText} = render(
				<Input placeholder="Enter text" {...({variant: 'test'} as unknown as InputProps)} />
			);

			const input = getByPlaceholderText('Enter text');

			expect(input.props.keyboardType).toBe('default');
		});
	});
});
