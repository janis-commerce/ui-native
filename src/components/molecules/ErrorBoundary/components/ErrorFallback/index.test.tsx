import React from 'react';
import {render} from '@testing-library/react-native';
import ErrorFallback from './index';

describe('ErrorFallback', () => {
	it('renders the default error message', () => {
		const {getByText} = render(<ErrorFallback />);

		expect(getByText('Something went wrong.')).toBeTruthy();
	});

	it('renders without throwing any errors', () => {
		expect(() => render(<ErrorFallback />)).not.toThrow();
	});

	it('contains the error message text', () => {
		const {getByText} = render(<ErrorFallback />);

		// Verificar que el texto del error está presente
		expect(getByText('Something went wrong.')).toBeTruthy();
	});
});
