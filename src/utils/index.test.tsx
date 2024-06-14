import {isObject} from '.';

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
