import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ErrorBoundary from './index';
import {Text, Button} from 'react-native';

const ProblemChild = () => {
	throw new Error('Oops!');
};

const ErrorFallbackMock = ({onButtonPress}: {onButtonPress: () => void}) => (
	<>
		<Text testID="error-fallback">Something went wrong</Text>
		<Button title="Try Again" onPress={onButtonPress} />
	</>
);

jest.mock('organisms/ErrorBoundary/components/ErrorFallback', () => ErrorFallbackMock);

describe('ErrorBoundary', () => {
	it('renders children when there is no error', () => {
		const {getByTestId} = render(
			<ErrorBoundary>
				<Text testID="no-error">All good</Text>
			</ErrorBoundary>
		);

		expect(getByTestId('no-error')).toBeTruthy();
	});

	it('renders fallback when an error is thrown', () => {
		const {getByTestId} = render(
			<ErrorBoundary>
				<ProblemChild />
			</ErrorBoundary>
		);

		expect(getByTestId('error-fallback')).toBeTruthy();
	});

	it('calls onError prop when an error is caught', () => {
		const onError = jest.fn();

		render(
			<ErrorBoundary onError={onError}>
				<ProblemChild />
			</ErrorBoundary>
		);

		expect(onError).toHaveBeenCalled();
	});

	it('does not call onButtonPress prop when retry button is pressed as it was not passed', () => {
		const onButtonPress = jest.fn();

		const {getByText} = render(
			<ErrorBoundary>
				<ProblemChild />
			</ErrorBoundary>
		);

		const retryButton = getByText('Try Again');
		fireEvent.press(retryButton);

		expect(onButtonPress).toBeCalledTimes(0);
	});

	it('calls onButtonPress prop when retry button is pressed', () => {
		const onButtonPress = jest.fn();

		const {getByText} = render(
			<ErrorBoundary onButtonPress={onButtonPress}>
				<ProblemChild />
			</ErrorBoundary>
		);

		const retryButton = getByText('Try Again');
		fireEvent.press(retryButton);

		expect(onButtonPress).toHaveBeenCalled();
	});
});
