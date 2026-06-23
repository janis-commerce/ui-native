import {Platform} from 'react-native';
import {palette} from 'theme/palette';
import {getSharedProps} from './index';

const testDate = new Date('2026-06-18T12:00:00Z');

describe('getSharedProps', () => {
	it('should keep the date when provided', () => {
		expect(getSharedProps({date: testDate}).date).toBe(testDate);
	});

	it('should apply the default mode "date"', () => {
		expect(getSharedProps({date: testDate}).mode).toBe('date');
	});

	it('should respect the provided mode', () => {
		expect(getSharedProps({date: testDate, mode: 'time'}).mode).toBe('time');
	});

	it('should apply the default theme "auto"', () => {
		expect(getSharedProps({date: testDate}).theme).toBe('auto');
	});

	it('should warn when minimumDate is greater than maximumDate', () => {
		getSharedProps({
			date: testDate,
			minimumDate: new Date('2026-12-31'),
			maximumDate: new Date('2026-01-01'),
		});
		expect(console.warn).toHaveBeenCalledWith(
			'DatePicker: `minimumDate` is greater than `maximumDate`.'
		);
	});

	it('should not warn when the range is valid', () => {
		getSharedProps({
			date: testDate,
			minimumDate: new Date('2026-01-01'),
			maximumDate: new Date('2026-12-31'),
		});
		expect(console.warn).not.toHaveBeenCalled();
	});

	it('should not warn when only minimumDate is provided', () => {
		getSharedProps({date: testDate, minimumDate: new Date('2026-01-01')});
		expect(console.warn).not.toHaveBeenCalled();
	});

	describe('platform theming', () => {
		let selectSpy: jest.SpyInstance;

		afterEach(() => {
			selectSpy?.mockRestore();
		});

		it('should apply the palette tint on Android', () => {
			selectSpy = jest.spyOn(Platform, 'select').mockImplementation((obj: any) => obj.android);
			const result = getSharedProps({date: new Date()});

			expect(result.buttonColor).toBe(palette.primary.main);
			expect(result.dividerColor).toBe(palette.grey[300]);
		});

		it('should not expose color props on iOS', () => {
			selectSpy = jest.spyOn(Platform, 'select').mockImplementation((obj: any) => obj.default);
			const result = getSharedProps({date: new Date()});

			expect(result.buttonColor).toBeUndefined();
			expect(result.dividerColor).toBeUndefined();
		});
	});
});
