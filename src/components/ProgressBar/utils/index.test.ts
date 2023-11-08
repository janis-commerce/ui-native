// @ts-nocheck
import {getBarColor, getPercentage} from '.';
import {palette} from '../../../theme/palette';

describe('getPercentage method', () => {
	describe('return zero when', () => {
		it('value is not number', () => {
			const response = getPercentage(null, 10);
			expect(response).toBe(0);
		});

		it('totalValue is not number', () => {
			const response = getPercentage(2, null);
			expect(response).toBe(0);
		});

		it('when value is less than zero', () => {
			const response = getPercentage(-10, 10);
			expect(response).toBe(0);
		});

		it('when totalValue is less than zero', () => {
			const response = getPercentage(10, -10);
			expect(response).toBe(0);
		});
	});

	describe('return  totalValuev when', () => {
		it('when value is less than totalValue', () => {
			const response = getPercentage(10, 8);
			expect(response).toBe(8);
		});

		it('when value is equals to totalValue', () => {
			const response = getPercentage(8, 8);
			expect(response).toBe(8);
		});
	});

	describe('return a number when', () => {
		it('both values are numbers and totalValue > value', () => {
			const response = getPercentage(10, 100);
			expect(response).toBe(10);
		});
	});
});

describe('getBarColor method', () => {
	const colors = {
		success: palette.success.main,
		alert: palette.alert.main,
		warning: palette.warning.main,
		error: palette.error.main,
	};

	it('returns a string', () => {
		const colorValue = getBarColor(null);
		expect(colorValue).toBe(palette.white.main);
	});

	it('returns a string with the color when the function returned is executed with props with an argument percentage (number)', () => {
		let props = 5;
		expect(getBarColor(props)).toBe(colors.error);
		props = 30;
		expect(getBarColor(props)).toBe(colors.warning);
		props = 55;
		expect(getBarColor(props)).toBe(colors.alert);
		props = 88;
		expect(getBarColor(props)).toBe(colors.success);
	});
});
