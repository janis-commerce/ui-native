import React from 'react';
import {render} from '@testing-library/react-native';
import ErrorFallback from './index';

describe('ErrorFallback', () => {
	it('renders errorMessage as it has been passed', () => {
		const {getByText} = render(<ErrorFallback errorMessage="Something went wrong" />);

		expect(getByText('Something went wrong')).toBeTruthy();
	});

	it('renders heading, fallback text and collapsible as it is debug', () => {
		const {getByText} = render(<ErrorFallback isDebug />);

		expect(getByText('Oops! Something went wrong.')).toBeTruthy();
		expect(getByText('Show error details')).toBeTruthy();
	});

	it('renders error message if provided', () => {
		const {getByText} = render(<ErrorFallback error="This is an error" />);

		expect(getByText('This is an error')).toBeTruthy();
	});
});
