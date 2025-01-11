import {InputVariant} from 'molecules/Input';

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

const handleChangeText = (text: string, variant: InputVariant): string => {
	const transformedText = transformText(text, variant);

	return transformedText;
};

export default handleChangeText;
