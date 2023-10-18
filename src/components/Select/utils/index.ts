import {Option} from '..';

export const formatPlaceholderMulti = (options: Option[], optionsText: string): string => {
	if (!options.length) {
		return '';
	}

	return options.length > 1
		? `${options[0].label}  (+${options.length - 1} ${optionsText})`
		: options[0].label;
};
