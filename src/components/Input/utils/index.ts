import {palette} from '../../../theme/palette';

export type Status = keyof typeof palette;

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
		const colorPalette = palette[status];
		if ('main' in colorPalette) {
			return colorPalette.main;
		}
		return palette.error.main;
	}

	return palette.grey[500];
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
		return palette.grey[500];
	}

	if (inputState === 'focus') {
		return inputColor;
	}

	if (statusMessage) {
		const colorPalette = palette[status];
		if ('main' in colorPalette) {
			return colorPalette.main;
		}
	}

	return palette.grey[500];
};

export const raiseLabel = ({disabled, hasMessage, inputState}: raiseLabelProps) =>
	!disabled && (inputState !== 'incomplete' || !!hasMessage);

export const showStatusMessage = (hasMessage: boolean, inputState: string) =>
	!!hasMessage && inputState !== 'focus';

export const getStatusMessageColor = (status: Status) => {
	const colorPalette = palette[status];

	if ('main' in colorPalette) {
		return colorPalette.main;
	}

	return palette.error.main;
};
