import {InputVariant} from 'molecules/Input';
import handleChangeText from './';

describe('Input handleChangeText util', () => {
	describe('returns untransformed text', () => {
		it('as there is an invalid variant', () => {
			const initialValue = 'ABC';
			const transformedValue = handleChangeText(initialValue, 'invalid' as InputVariant);

			expect(transformedValue).toEqual(initialValue);
		});
	});

	describe('returns transformed text', () => {
		it('as it is a weightable variant', () => {
			const initialValue = '10,0';
			const transformedValue = handleChangeText(initialValue, 'weightable');

			const expectedValue = '10.0';

			expect(transformedValue).toEqual(expectedValue);
		});

		it('as it is a amountTotal variant', () => {
			const initialValue = '10';
			const transformedValue = handleChangeText(initialValue, 'amountTotal');

			const expectedValue = '10';

			expect(transformedValue).toEqual(expectedValue);
		});

		it('as it is a currency variant', () => {
			const initialValue = '10';
			const transformedValue = handleChangeText(initialValue, 'currency');

			const expectedValue = '10';

			expect(transformedValue).toEqual(expectedValue);
		});

		it('as it is a numeric variant', () => {
			const initialValue = '10';
			const transformedValue = handleChangeText(initialValue, 'numeric');

			const expectedValue = '10';

			expect(transformedValue).toEqual(expectedValue);
		});
	});
});
