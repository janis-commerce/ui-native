import {formatPlaceholder} from './index';

describe('formatPlaceholder', () => {
	it('return an empty string when placeholder is an empty string or undefined', () => {
		expect(formatPlaceholder('')).toBe('');
		expect(formatPlaceholder()).toBe('');
	});
	it('return first two letters when placeholder is only a word', () => {
		expect(formatPlaceholder('Janis')).toBe('JA');
	});

	it('return the first letters of each word', () => {
		expect(formatPlaceholder('Janis Commerce')).toBe('JC');
	});
});
