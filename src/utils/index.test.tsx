import {isArray, isObject} from './';

describe('isObject', () => {
	it('is true when is object type', () => {
		const response = isObject({});
		expect(response).toBe(true);
	});

	it('is false when is object type', () => {
		const response = isObject([]);
		expect(response).toBe(false);
	});
});

describe('isArray', () => {
	it('is true when is array instance', () => {
		const response = isArray([]);
		expect(response).toBe(true);
	});
});
