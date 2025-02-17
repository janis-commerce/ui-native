import {StyleSheet, TextStyle} from 'react-native';
import typography, {Typography, TypographyItem} from 'theme/typography';

type TypographyType = keyof Typography;
type TypographySize = 'large' | 'medium' | 'small';

const validTypes: TypographyType[] = Object.keys(typography) as TypographyType[];
const validSizes: TypographySize[] = ['large', 'medium', 'small'];

export const getDefaultStyles = (color?: string) =>
	StyleSheet.create<{typography: TextStyle}>({
		typography: {
			fontWeight: typography.body.medium.fontWeight,
			fontSize: typography.body.medium.fontSize,
			lineHeight: typography.body.medium.lineHeight,
			...(color && {color}),
		},
	});

const hasSizes = (category: any): category is Record<TypographySize, TypographyItem> => {
	return 'large' in category && 'medium' in category && 'small' in category;
};

const hasDefault = (category: any): category is {default: TypographyItem} => {
	return 'default' in category;
};

const getStyleByTypography = (
	type: TypographyType | string,
	size: TypographySize | string = 'default',
	color?: string
) => {
	if (!type || !validTypes.includes(type as TypographyType)) {
		return getDefaultStyles(color);
	}

	const typographyType = type as TypographyType;
	const typographyCategory = typography[typographyType];

	if (hasDefault(typographyCategory)) {
		return StyleSheet.create({
			typography: {
				...typographyCategory.default,
				...(color && {color}),
			},
		});
	}

	if (!size || !validSizes.includes(size as TypographySize)) {
		return getDefaultStyles(color);
	}

	const typographySize = size as TypographySize;

	if (hasSizes(typographyCategory)) {
		return StyleSheet.create({
			typography: {
				...typographyCategory[typographySize],
				...(color && {color}),
			},
		});
	}

	return getDefaultStyles(color);
};

export default getStyleByTypography;
