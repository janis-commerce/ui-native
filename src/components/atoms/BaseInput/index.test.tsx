import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BaseInput from './index';

describe('BaseInput Component', () => {
	it('renders correctly with placeholder and value', () => {
		const {getByPlaceholderText} = render(
			<BaseInput placeholder="Enter text" value="Test value" />
		);

		const input = getByPlaceholderText('Enter text');
		expect(input.props.value).toBe('Test value');
	});

	it('calls onChangeText when text changes', () => {
		const mockOnChangeText = jest.fn();
		const {getByPlaceholderText} = render(
			<BaseInput placeholder="Enter text" value="" onChangeText={mockOnChangeText} />
		);

		const input = getByPlaceholderText('Enter text');
		fireEvent.changeText(input, 'New value');
		expect(mockOnChangeText).toHaveBeenCalledWith('New value');
	});

	it('applies custom styles correctly', () => {
		const customStyle = {borderColor: 'red'};
		const {getByPlaceholderText} = render(
			<BaseInput placeholder="Enter text" value="" style={customStyle} />
		);

		const input = getByPlaceholderText('Enter text');
		expect(input.props.style).toEqual(
			expect.arrayContaining([expect.objectContaining(customStyle)])
		);
	});

	it('defaults textAlign to center', () => {
		const {getByPlaceholderText} = render(<BaseInput placeholder="Enter text" value="" />);

		const input = getByPlaceholderText('Enter text');
		expect(input.props.textAlign).toBe('center');
	});
});
