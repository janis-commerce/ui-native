import {InputVariant} from 'molecules/Input';
import handleChangeText from './';

const mockSetValue = jest.fn();
const mockOnChangeText = jest.fn();

describe('Input handleChangeText util', () => {
	describe('returns untransformed text', () => {
		it('as there is an invalid variant', () => {
			handleChangeText('ABC', mockSetValue, 'invalid' as InputVariant, mockOnChangeText);

			expect(mockSetValue).toBeCalledWith('ABC');
			expect(mockOnChangeText).toBeCalled();
		});
	});

	describe('returns transformed text', () => {
		it('as it is a weightable variant', () => {
			handleChangeText('10,0', mockSetValue, 'weightable');

			expect(mockSetValue).toBeCalledWith('10.0');
		});

		it('as it is a amountTotal variant', () => {
			handleChangeText('10', mockSetValue, 'amountTotal');

			expect(mockSetValue).toBeCalledWith('10');
		});

		it('as it is a currency variant', () => {
			handleChangeText('10', mockSetValue, 'currency');

			expect(mockSetValue).toBeCalledWith('10');
		});

		it('as it is a numeric variant', () => {
			handleChangeText('10', mockSetValue, 'numeric');

			expect(mockSetValue).toBeCalledWith('10');
		});

		it('as there is a valid variant and a valid onChangeText', () => {
			handleChangeText('10,0', mockSetValue, 'weightable', mockOnChangeText);

			expect(mockSetValue).toBeCalledWith('10.0');
			expect(mockOnChangeText).toBeCalled();
		});
	});
});
