import {StyleSheet, TextStyle} from 'react-native';
import typography, {Typography} from 'theme/typography';

type TypographyType = keyof Typography;
type TypographySize = 'large' | 'medium' | 'small';

const validTypes: TypographyType[] = Object.keys(typography) as TypographyType[];
const validSizes: TypographySize[] = ['large', 'medium', 'small'];

export const defaultStyles = StyleSheet.create<{typography: TextStyle}>({
	typography: {
		fontWeight: typography.body.medium.weight,
		fontSize: typography.body.medium.size,
		lineHeight: typography.body.medium.lineHeight,
	},
});

const getStyleByTypography = (type: TypographyType | string, size: TypographySize | string) => {
	if (
		!validTypes.includes(type as TypographyType) ||
		!validSizes.includes(size as TypographySize)
	) {
		return defaultStyles;
	}

	const typographyType = type as TypographyType;
	const typographySize = size as TypographySize;

	if (typographyType === 'display') {
		return StyleSheet.create({
			typography: {
				fontWeight: typography.display.weight,
				fontSize: typography.display.size,
				lineHeight: typography.display.lineHeight,
			},
		});
	}

	if (typographyType === 'overline' && typographySize === 'medium') {
		return StyleSheet.create({
			typography: {
				fontWeight: typography.overline.large.weight,
				fontSize: typography.overline.large.size,
				lineHeight: typography.overline.large.lineHeight,
				letterSpacing: typography.overline.large.spacing,
			},
		});
	}

	const typographyObject = typography[typographyType];
	// istanbul ignore next
	if (typographyObject && typographySize in typographyObject) {
		const typographyStyle = typographyObject[typographySize as keyof typeof typographyObject];
		return StyleSheet.create({
			typography: {
				fontWeight: typographyStyle.weight,
				fontSize: typographyStyle.size,
				lineHeight: typographyStyle.lineHeight,
				letterSpacing: typographyStyle.spacing,
			},
		});
	}

	// istanbul ignore next
	return defaultStyles;
};

export default getStyleByTypography;
