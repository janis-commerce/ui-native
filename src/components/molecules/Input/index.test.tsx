import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Input from './index';

describe('Input Component', () => {
	it('should render correctly with default props', () => {
		const {getByPlaceholderText} = render(<Input placeholder="Enter text" type="text" />);
		const input = getByPlaceholderText('Enter text');
		expect(input).toBeTruthy();
	});

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

	it('should call onChangeText when text is changed', () => {
		const onChangeTextMock = jest.fn();
		const {getByPlaceholderText} = render(
			<Input placeholder="Enter text" type="text" onChangeText={onChangeTextMock} />
		);
		const input = getByPlaceholderText('Enter text');
		fireEvent.changeText(input, 'new text');
		expect(onChangeTextMock).toHaveBeenCalledWith('new text');
	});
});
