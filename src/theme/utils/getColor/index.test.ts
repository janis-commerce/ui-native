import palette from 'theme/palette';
import getColor from './';

describe('getColor util', () => {
	// Test valid inputs
	describe('valid inputs', () => {
		it('returns the correct primary color', () => {
			expect(getColor('primary', 'blue', 'normal')).toEqual(palette.primary.blue.normal);
			expect(getColor('primary', 'blue', 'pressed')).toEqual(palette.primary.blue.pressed);
		});

		it('returns the correct secondary color', () => {
			expect(getColor('secondary', 'black', 'normal')).toEqual(palette.secondary.black.normal);
			expect(getColor('secondary', 'black', 'pressed')).toEqual(palette.secondary.black.pressed);
		});

		it('returns the correct greyScale color', () => {
			expect(getColor('greyScale', 'white')).toEqual(palette.greyScale.white);
			expect(getColor('greyScale', '08')).toEqual(palette.greyScale['08']);
		});

		it('returns the correct status color', () => {
			expect(getColor('status', 'red', 'normal')).toEqual(palette.status.red.normal);
			expect(getColor('status', 'red', 'light')).toEqual(palette.status.red.light);
		});
	});

	// Test invalid inputs
	describe('invalid inputs', () => {
		it('returns the fallback color for an invalid category', () => {
			expect(getColor('invalidCategory' as any, 'blue', 'normal')).toEqual(palette.greyScale.white);
		});

		it('returns the fallback color for an invalid key', () => {
			expect(getColor('primary', 'invalidKey' as any, 'normal')).toEqual(palette.greyScale.white);
		});

		it('returns the fallback color for an invalid variant', () => {
			expect(getColor('primary', 'blue', 'invalidVariant' as any)).toEqual(palette.greyScale.white);
		});

		it('returns the fallback color for incomplete arguments', () => {
			// Provide default values for missing elements to match the tuple type
			expect(getColor('primary', 'blue', 'normal')).toEqual(palette.primary.blue.normal);
			expect(getColor('primary', 'blue', undefined as any)).toEqual(palette.greyScale.white);
		});

		it('returns the fallback color when extra arguments are passed', () => {
			// Use cast to bypass TypeScript type-checking
			expect((getColor as any)('primary', 'blue', 'normal', 'extra')).toEqual(
				palette.greyScale.white
			);
		});
	});
});
