import {StyleSheet, TextStyle} from 'react-native';
import typography, {Typography, TypographyItem} from 'theme/typography';

type TypographyType = keyof Typography;
type TypographySize = 'large' | 'medium' | 'small' | 'default';

const validTypes: TypographyType[] = Object.keys(typography) as TypographyType[];
const validSizes: TypographySize[] = ['large', 'medium', 'small', 'default'];

export const defaultStyles = StyleSheet.create<{typography: TextStyle}>({
	typography: {
		fontWeight: typography.body.medium.fontWeight,
		fontSize: typography.body.medium.fontSize,
		lineHeight: typography.body.medium.lineHeight,
	},
});

const getStyleByTypography = (
	type: TypographyType | string,
	size: TypographySize | string = 'default'
) => {
	if (
		!validTypes.includes(type as TypographyType) ||
		!validSizes.includes(size as TypographySize)
	) {
		return defaultStyles;
	}

	const typographyType = type as TypographyType;
	const typographySize = size as TypographySize;

	const typographyCategory = typography[typographyType];

	if (typographySize === 'default' && 'default' in typographyCategory) {
		return StyleSheet.create({
			typography: {
				...(typographyCategory.default as TypographyItem),
			},
		});
	} else if (typographySize in typographyCategory) {
		return StyleSheet.create({
			typography: {
				...(typographyCategory[
					typographySize as keyof typeof typographyCategory
				] as TypographyItem),
			},
		});
	}

	return defaultStyles;
};

export default getStyleByTypography;
