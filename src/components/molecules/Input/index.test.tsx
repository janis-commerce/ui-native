import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Input, {InputProps} from './index';

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
	OS: 'web',
	select: () => null,
}));

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
			const {getByTestId} = render(<Input placeholder="Enter amount" type="currency" />);
			const input = getByTestId('input');
			expect(input.props.keyboardType).toBe('numeric');
		});

		it('should apply the correct keyboardType for number', () => {
			const {getByTestId} = render(<Input placeholder="Enter number" type="number" />);
			const input = getByTestId('input');
			expect(input.props.keyboardType).toBe('numeric');
		});

		it('should apply the correct keyboardType for text', () => {
			const {getByTestId} = render(<Input placeholder="Enter text" type="text" />);
			const input = getByTestId('input');
			expect(input.props.keyboardType).toBe('default');
		});

		it('should apply the correct keyboardType for email', () => {
			const {getByTestId} = render(<Input placeholder="Enter email" type="email" />);
			const input = getByTestId('input');
			expect(input.props.keyboardType).toBe('email-address');
		});

		it('should apply the correct keyboardType for phone', () => {
			const {getByTestId} = render(<Input placeholder="Enter phone" type="phone" />);
			const input = getByTestId('input');
			expect(input.props.keyboardType).toBe('phone-pad');
		});
	});

	describe('should render correctly', () => {
		it('as default props are passed', () => {
			const {getByTestId} = render(<Input placeholder="Enter text" type="text" />);
			const input = getByTestId('input');
			expect(input).toBeTruthy();
		});

		it('and call changeTextCb when text is changed', () => {
			const onChangeTextMock = jest.fn();
			const {getByTestId} = render(
				<Input placeholder="Enter text" type="text" onChangeText={onChangeTextMock} />
			);
			const input = getByTestId('input');
			fireEvent.changeText(input, 'new text');
			expect(onChangeTextMock).toHaveBeenCalledWith('new text');
		});

		it('and do not call changeTextCb when text is changed as there is not one', () => {
			const onChangeTextMock = jest.fn();
			const {getByTestId} = render(<Input placeholder="Enter text" type="text" />);
			const input = getByTestId('input');
			fireEvent.changeText(input, 'new text');
			expect(onChangeTextMock).toHaveBeenCalledTimes(0);
		});

		it('as it is amountTotal type and is pressed', () => {
			const {getByText, getByTestId} = render(
				<Input type="text" variant="amountTotal" totalValue={6} />
			);
			const inputContainer = getByText('/6');
			const input = getByTestId('input');

			fireEvent.press(input);
			fireEvent.changeText(input, '5');

			expect(inputContainer).toBeTruthy();
		});

		it('and call ref function with the input instance', () => {
			const refMock = jest.fn();

			render(<Input placeholder="Enter text" variant="default" ref={refMock} />);

			expect(refMock).toHaveBeenCalled();

			expect(refMock.mock.calls[0][0]).toBeTruthy();
			expect(refMock.mock.calls[0][0]).toHaveProperty('focus');
		});

		it('when keyboardType is default as no valid combination of variant nor type is passed', () => {
			const {getByTestId} = render(
				<Input placeholder="Enter text" {...({variant: 'test'} as unknown as InputProps)} />
			);

			const input = getByTestId('input');

			expect(input.props.keyboardType).toBe('default');
		});

		it('with no placeholder', () => {
			const {getByTestId} = render(<Input type="number" value={'Hola'} />);

			const input = getByTestId('input');

			expect(input.props.keyboardType).toBe('numeric');
		});
	});
});
