import {formatPlaceholderMulti} from './index';

const validOptions = [
	{label: 'Argentina', value: '1'},
	{label: 'Chile', value: '2'},
];
const validMultipleText1 = 'Argentina  (+1)';
const validMultipleText2 = 'Argentina  (+1 others)';

describe('formatPlaceholderMulti util', () => {
	it('return empty string when options is an empty array', () => {
		const response = formatPlaceholderMulti([], '');
		expect(response).toBe('');
	});

	it('return an label string when has single option', () => {
		const response = formatPlaceholderMulti([validOptions[0]], '');
		expect(response).toBe(validOptions[0].label);
	});

	it('return first label string and more option text when has multiple options 1', () => {
		const response = formatPlaceholderMulti(validOptions, null);
		expect(response).toBe(validMultipleText1);
	});

	it('return first label string and more option text when has multiple options 2', () => {
		const response = formatPlaceholderMulti(validOptions, 'others');
		expect(response).toBe(validMultipleText2);
	});
});
