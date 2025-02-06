import {isArray, isObject, isDevEnv} from './';

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

describe('isDevEnv', () => {
	const originalEnv = process.env;

	beforeEach(() => {
		process.env = {...originalEnv};
	});

	afterEach(() => {
		process.env = originalEnv;
	});

	it('should return true when NODE_ENV is not set', () => {
		delete process.env.NODE_ENV;
		expect(isDevEnv()).toBe(true);
	});

	it('should return true when NODE_ENV is not "production"', () => {
		process.env.NODE_ENV = 'development';
		expect(isDevEnv()).toBe(true);

		process.env.NODE_ENV = 'test';
		expect(isDevEnv()).toBe(true);
	});

	it('should return false when NODE_ENV is "production"', () => {
		process.env.NODE_ENV = 'production';
		expect(isDevEnv()).toBe(false);
	});
});
