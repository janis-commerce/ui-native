import {Platform} from 'react-native';
import {palette} from 'theme/palette';
import {getSharedProps} from './index';

describe('getSharedProps', () => {
	it('should keep the date when provided', () => {
		const date = new Date('2026-06-18T12:00:00Z');
		expect(getSharedProps({date}).date).toBe(date);
	});

	it('should use "today" when date is null', () => {
		expect(getSharedProps({date: null}).date).toBeInstanceOf(Date);
	});

	it('should use "today" when date is not provided', () => {
		expect(getSharedProps({}).date).toBeInstanceOf(Date);
	});

	it('should apply the default mode "date"', () => {
		expect(getSharedProps({}).mode).toBe('date');
	});

	it('should respect the provided mode', () => {
		expect(getSharedProps({mode: 'time'}).mode).toBe('time');
	});

	it('should apply the default theme "auto"', () => {
		expect(getSharedProps({}).theme).toBe('auto');
	});

	it('should warn when minimumDate is greater than maximumDate', () => {
		getSharedProps({minimumDate: new Date('2026-12-31'), maximumDate: new Date('2026-01-01')});
		expect(console.warn).toHaveBeenCalledWith(
			'DatePicker: `minimumDate` is greater than `maximumDate`.'
		);
	});

	it('should not warn when the range is valid', () => {
		getSharedProps({minimumDate: new Date('2026-01-01'), maximumDate: new Date('2026-12-31')});
		expect(console.warn).not.toHaveBeenCalled();
	});

	it('should not warn when only minimumDate is provided', () => {
		getSharedProps({minimumDate: new Date('2026-01-01')});
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
