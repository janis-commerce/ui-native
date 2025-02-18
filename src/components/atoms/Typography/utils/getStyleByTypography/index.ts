import {StyleSheet} from 'react-native';
import typography, {Typography, TypographyItem} from 'theme/typography';

type TypographyType = keyof Typography;
type TypographySize = 'large' | 'medium' | 'small';

const hasSizes = (category: object): category is Record<TypographySize, TypographyItem> => {
	return 'large' in category || 'medium' in category || 'small' in category;
};

const getStyleByTypography = (
	type: TypographyType | string = 'body',
	size: TypographySize | string = 'medium',
	color?: string
) => {
	const typographyType = type as TypographyType;
	const typographySize = size as TypographySize;

	const defaultCategory = typography.body;
	const typographyCategory = typography[typographyType] || defaultCategory;

	const typographyData = hasSizes(typographyCategory)
		? typographyCategory[typographySize] || defaultCategory.medium
		: defaultCategory.medium;

	return StyleSheet.create({
		typography: {
			...typographyData,
			...(color && {color}),
		},
	});
};

export default getStyleByTypography;
