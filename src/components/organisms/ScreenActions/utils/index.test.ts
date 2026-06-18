import {barPadding, normalizeActions, rowGap} from './index';
import {moderateScale, scaledForDevice} from 'scale';

describe('normalizeActions', () => {
	it('returns an empty array when actions is undefined', () => {
		expect(normalizeActions()).toEqual([]);
	});

	it('wraps flat actions as single-item rows', () => {
		expect(normalizeActions([{value: 'A'}, {value: 'B'}])).toEqual([
			[{value: 'A'}],
			[{value: 'B'}],
		]);
	});

	it('keeps nested arrays as multi-item rows', () => {
		expect(normalizeActions([[{value: 'A'}, {value: 'B'}], {value: 'C'}])).toEqual([
			[{value: 'A'}, {value: 'B'}],
			[{value: 'C'}],
		]);
	});

	it('filters falsy actions and drops empty rows', () => {
		expect(normalizeActions([false, null, undefined, [false, {value: 'A'}], [null]])).toEqual([
			[{value: 'A'}],
		]);
	});
});

describe('bar spacing helpers', () => {
	it('returns spacing for the spaced variant', () => {
		expect(rowGap('spaced')).toBe(scaledForDevice(8, moderateScale));
		expect(barPadding('spaced')).toBe(scaledForDevice(16, moderateScale));
	});

	it('returns no spacing for the flush variant', () => {
		expect(rowGap('flush')).toBe(0);
		expect(barPadding('flush')).toBe(0);
	});
});
