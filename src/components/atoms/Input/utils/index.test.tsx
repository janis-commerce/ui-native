import {palette} from '../../../../theme/palette';
import {
	Status,
	getInputInitialState,
	getBorderColor,
	getLabelColor,
	raiseLabel,
	showStatusMessage,
	getStatusMessageColor,
} from './index';

describe('getInputInitialState', () => {
	it('should return "incomplete" if the value is empty', () => {
		const value = '';
		const result = getInputInitialState(value);
		expect(result).toBe('incomplete');
	});

	it('should return "complete" if the value is not empty', () => {
		const value = 'example';
		const result = getInputInitialState(value);
		expect(result).toBe('complete');
	});
});

describe('getBorderColor', () => {
	const inputColor = 'inputColor';

	it('should return inputColor when inputState is "focus"', () => {
		const inputState = 'focus';
		const hasMessage = false;
		const status: Status = 'error';
		const result = getBorderColor({inputState, hasMessage, status, inputColor});
		expect(result).toBe(inputColor);
	});

	it('should return colorPalette.main when hasMessage is true and "main" property exists in colorPalette', () => {
		const inputState = 'notFocus';
		const hasMessage = true;
		const status: Status = 'error';
		const result = getBorderColor({inputState, hasMessage, status, inputColor});
		expect(result).toBe(palette.error.main);
	});

	it('should return palette.error.main when hasMessage is true and "main" property does not exist in colorPalette', () => {
		const inputState = 'notFocus';
		const hasMessage = true;
		const status: Status = 'grey';
		const result = getBorderColor({inputState, hasMessage, status, inputColor});
		expect(result).toBe(palette.error.main);
	});

	it('should return palette.grey[500] when hasMessage is false', () => {
		const inputState = 'notFocus';
		const hasMessage = false;
		const status: Status = 'error';
		const result = getBorderColor({inputState, hasMessage, status, inputColor});
		expect(result).toBe(palette.grey[500]);
	});
});

describe('getLabelColor', () => {
	const inputColor = 'inputColor';
	const statusMessage = 'statusMessage';

	it('should return palette.grey[500] when disabled is true', () => {
		const disabled = true;
		const readOnly = false;
		const inputState = 'inputState';
		const status = 'success';
		const result = getLabelColor({
			disabled,
			readOnly,
			inputColor,
			inputState,
			statusMessage,
			status,
		});
		expect(result).toBe(palette.grey[500]);
	});

	it('should return palette.grey[500] when readOnly is true', () => {
		const disabled = false;
		const readOnly = true;
		const inputState = 'inputState';
		const status = 'success';
		const result = getLabelColor({
			disabled,
			readOnly,
			inputColor,
			inputState,
			statusMessage,
			status,
		});
		expect(result).toBe(palette.grey[500]);
	});

	it('should return inputColor when inputState is "focus"', () => {
		const disabled = false;
		const readOnly = false;
		const inputState = 'focus';
		const status = 'success';
		const result = getLabelColor({
			disabled,
			readOnly,
			inputColor,
			inputState,
			statusMessage,
			status,
		});
		expect(result).toBe(inputColor);
	});

	it('should return palette.status.main when statusMessage is not empty', () => {
		const disabled = false;
		const readOnly = false;
		const inputState = 'notFocus';
		const status = 'success';
		const result = getLabelColor({
			disabled,
			readOnly,
			inputColor,
			inputState,
			statusMessage,
			status,
		});
		expect(result).toBe(palette[status].main);
	});

	it('should return palette.grey[500] when statusMessage is not empty but there is no main on palette', () => {
		const disabled = false;
		const readOnly = false;
		const inputState = 'notFocus';
		const status = 'environment';
		const result = getLabelColor({
			disabled,
			readOnly,
			inputColor,
			inputState,
			statusMessage,
			status,
		});
		expect(result).toBe(palette.grey[500]);
	});

	it('should return palette.grey[500] when statusMessage is empty', () => {
		const disabled = false;
		const readOnly = false;
		const inputState = 'notFocus';
		const emptyStatusMessage = '';
		const status = 'success';
		const result = getLabelColor({
			disabled,
			readOnly,
			inputColor,
			inputState,
			statusMessage: emptyStatusMessage,
			status,
		});
		expect(result).toBe(palette.grey[500]);
	});
});

describe('raiseLabel', () => {
	it('should return true when disabled is false and inputState is not "incomplete" or hasMessage is true', () => {
		const disabled = false;
		const hasMessage = false;
		const inputState = 'inputState';
		const result = raiseLabel({disabled, hasMessage, inputState});
		expect(result).toBe(true);
	});

	it('should return false when disabled is true', () => {
		const disabled = true;
		const hasMessage = false;
		const inputState = 'inputState';
		const result = raiseLabel({disabled, hasMessage, inputState});
		expect(result).toBe(false);
	});

	it('should return false when inputState is "incomplete" and hasMessage is false', () => {
		const disabled = false;
		const hasMessage = false;
		const inputState = 'incomplete';
		const result = raiseLabel({disabled, hasMessage, inputState});
		expect(result).toBe(false);
	});
});

describe('showStatusMessage', () => {
	it('should return true when hasMessage is true and inputState is not "focus"', () => {
		const hasMessage = true;
		const inputState = 'inputState';
		const result = showStatusMessage(hasMessage, inputState);
		expect(result).toBe(true);
	});

	it('should return false when hasMessage is false', () => {
		const hasMessage = false;
		const inputState = 'inputState';
		const result = showStatusMessage(hasMessage, inputState);
		expect(result).toBe(false);
	});

	it('should return false when inputState is "focus"', () => {
		const hasMessage = true;
		const inputState = 'focus';
		const result = showStatusMessage(hasMessage, inputState);
		expect(result).toBe(false);
	});
});

describe('getStatusMessageColor', () => {
	it('should return colorPalette.main when "main" property exists in colorPalette', () => {
		const status: Status = 'error';
		const result = getStatusMessageColor(status);
		expect(result).toBe(palette.error.main);
	});

	it('should return palette.error.main when "main" property does not exist in colorPalette', () => {
		const status: Status = 'grey';
		const result = getStatusMessageColor(status);
		expect(result).toBe(palette.error.main);
	});
});
