import {chromePadding, normalizeActions, rowGap} from './index';
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

describe('chrome helpers', () => {
	it('returns spacing for the rounded variant', () => {
		expect(rowGap('rounded')).toBe(scaledForDevice(8, moderateScale));
		expect(chromePadding('rounded')).toBe(scaledForDevice(16, moderateScale));
	});

	it('returns no spacing for the flush variant', () => {
		expect(rowGap('flush')).toBe(0);
		expect(chromePadding('flush')).toBe(0);
	});
});
