import {InputVariant} from 'molecules/Input';
import {Dispatch, SetStateAction} from 'react';

type VariantLogic = Record<InputVariant, (value: string) => string>;

const variantLogicMapper: VariantLogic = {
	default: (value) => value,
	weightable: (value) => value.replace(',', '.').replace(/[^0-9.]/g, ''),
	amountTotal: (value) => value.replace(',', '.').replace(/[^0-9.]/g, ''),
	currency: (value) => value.replace(/[^0-9.,]/g, ''),
	numeric: (value) => value.replace(/[^0-9.,]/g, ''),
};

const transformText = (text: string, variant: InputVariant): string => {
	const transform = variantLogicMapper[variant] || variantLogicMapper.default;
	return transform(text);
};

const handleChangeText = (
	text: string,
	setValue: Dispatch<SetStateAction<string>>,
	variant: InputVariant,
	onChangeText?: (text: string) => void
): void => {
	const transformedText = transformText(text, variant);

	setValue(transformedText);

	if (onChangeText) {
		onChangeText(transformedText);
	}
};

export default handleChangeText;
