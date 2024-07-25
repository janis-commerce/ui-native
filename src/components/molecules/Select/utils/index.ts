import {Option} from '..';

export const formatPlaceholderMulti = (options: Option[], optionsText: string | null): string => {
	if (!options.length) {
		return '';
	}

	const validOptionText = `(+${options.length - 1}${optionsText ? ` ${optionsText}` : ''})`;

	return options.length > 1 ? `${options[0].label}  ${validOptionText}` : options[0].label;
};
