import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ErrorFallback from './index';

describe('ErrorFallback', () => {
	it('renders heading and fallback text', () => {
		const {getByText} = render(<ErrorFallback onButtonPress={jest.fn()} />);

		expect(getByText('Oops! Something went wrong.')).toBeTruthy();
		expect(getByText('Show error details')).toBeTruthy();
		expect(getByText('Go Back')).toBeTruthy();
	});

	it('renders error message if provided', () => {
		const {getByText} = render(
			<ErrorFallback error="This is an error" onButtonPress={jest.fn()} />
		);

		expect(getByText('This is an error')).toBeTruthy();
	});

	it('renders error details if provided', () => {
		const {getAllByText} = render(
			<ErrorFallback errorDetails="Stack trace line 1" onButtonPress={jest.fn()} />
		);

		expect(getAllByText('Stack trace line 1')).toBeTruthy();
	});

	it('calls onButtonPress when Go Back is pressed', () => {
		const onButtonPressMock = jest.fn();

		const {getByText} = render(<ErrorFallback onButtonPress={onButtonPressMock} />);

		fireEvent.press(getByText('Go Back'));

		expect(onButtonPressMock).toHaveBeenCalled();
	});
});
