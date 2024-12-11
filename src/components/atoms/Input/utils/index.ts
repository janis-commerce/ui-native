import palette from 'theme/palette';

const color = {
	primary: 'primary',
	black: 'black',
	success: 'success',
	error: 'error',
	warning: 'warning',
	alert: 'alert',
};

export type inputColor = typeof color;
export type Status = keyof inputColor;

interface getBorderColorProps {
	inputState: string;
	hasMessage: boolean;
	status: Status;
	inputColor: string;
}

interface getLabelColorProps {
	disabled: boolean;
	readOnly: boolean;
	inputColor: string;
	inputState: string;
	statusMessage: string;
	status: Status;
}

interface raiseLabelProps {
	disabled: boolean;
	hasMessage: boolean;
	inputState: string;
}

const parseColor = {
	primary: palette.primary.blue,
	black: palette.secondary.black,
	success: palette.status.green,
	error: palette.status.red,
	warning: palette.status.orange,
	alert: palette.status.yellow,
};

export const getInputInitialState = (value: string) => {
	if (!value) {
		return 'incomplete';
	}
	return 'complete';
};

export const getBorderColor = ({
	inputState,
	hasMessage,
	status,
	inputColor,
}: getBorderColorProps) => {
	if (inputState === 'focus') {
		return inputColor;
	}
	if (hasMessage) {
		const colorPalette = parseColor[status]?.normal || palette.status.red.normal;
		return colorPalette;
	}

	return palette.greyScale['06'];
};

export const getLabelColor = ({
	disabled,
	readOnly,
	inputColor,
	inputState,
	statusMessage,
	status,
}: getLabelColorProps) => {
	if (disabled || readOnly) {
		return palette.greyScale['06'];
	}

	if (inputState === 'focus') {
		return inputColor;
	}

	if (statusMessage) {
		const colorPalette = parseColor[status]?.normal || palette.greyScale['06'];
		return colorPalette;
	}

	return palette.greyScale['06'];
};

export const raiseLabel = ({disabled, hasMessage, inputState}: raiseLabelProps) =>
	!disabled && (inputState !== 'incomplete' || !!hasMessage);

export const showStatusMessage = (hasMessage: boolean, inputState: string) =>
	!!hasMessage && inputState !== 'focus';

export const getStatusMessageColor = (status: Status) => {
	const colorPalette = parseColor[status]?.normal || palette.status.red.normal;
	return colorPalette;
};
