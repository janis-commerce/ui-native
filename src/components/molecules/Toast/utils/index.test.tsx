import React from 'react';
import {render} from '@testing-library/react-native';
import Text from 'atoms/Typography';
import {configToast} from './'; // Ajusta la ruta según sea necesario

// Mocks
jest.mock('../', () => {
	return jest.fn().mockImplementation(({message}) => <div>{message}</div>);
});

describe('configToast', () => {
	const mockProps = {title1: 'Test message', children: <Text>Title</Text>};

	it('should render success Toast correctly', () => {
		const {toJSON} = render(configToast.success(mockProps));
		expect(toJSON()).toBeTruthy();
	});

	it('should render notice Toast correctly', () => {
		const {toJSON} = render(configToast.notice(mockProps));
		expect(toJSON()).toBeTruthy();
	});

	it('should render warning Toast correctly', () => {
		const {toJSON} = render(configToast.warning(mockProps));
		expect(toJSON()).toBeTruthy();
	});

	it('should render error Toast correctly', () => {
		const {toJSON} = render(configToast.error(mockProps));
		expect(toJSON()).toBeTruthy();
	});

	it('should render action Toast correctly', () => {
		const {toJSON} = render(configToast.action(mockProps));
		expect(toJSON()).toBeTruthy();
	});
});
