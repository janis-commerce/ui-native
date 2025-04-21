import React from 'react';
import {render} from '@testing-library/react-native';
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

	it('calls renderErrorComponent prop when it is passed', () => {
		const renderErrorComponent = jest.fn(() => (
			<Text testID="custom-fallback">Custom fallback</Text>
		));

		render(
			<ErrorBoundary renderErrorComponent={renderErrorComponent}>
				<ProblemChild />
			</ErrorBoundary>
		);

		expect(renderErrorComponent).toHaveBeenCalled();
	});

	it('calls renderErrorComponent with empty string if error message is undefined', () => {
		const renderErrorComponent = jest.fn(() => <Text testID="fallback" />);

		class NoMessageError extends Error {
			constructor() {
				super();
				(this.message as any) = undefined;
			}
		}

		const SilentCrash = () => {
			throw new NoMessageError();
		};

		render(
			<ErrorBoundary renderErrorComponent={renderErrorComponent}>
				<SilentCrash />
			</ErrorBoundary>
		);

		expect(renderErrorComponent).toHaveBeenCalledWith('');
	});
});
