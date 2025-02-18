import {StyleSheet, TextStyle} from 'react-native';
import typography, {Typography} from 'theme/typography';
type TypographyType = keyof Typography;
type TypographySize = 'large' | 'medium' | 'small';
interface TypographyStyle {
	[key: string]: TextStyle;
}
const getStyleByTypography = (
	type: TypographyType | string = 'body',
	size: TypographySize | string = 'medium',
	color?: string
): {typography: TextStyle} => {
	const validType: TypographyType = Object.keys(typography).includes(type)
		? (type as TypographyType)
		: 'body';

	const typographyCategory: TypographyStyle = typography[validType];

	const validSize: TypographySize = Object.keys(typographyCategory).includes(size)
		? (size as TypographySize)
		: 'medium';

	const typographyStyle: TextStyle = typographyCategory[validSize];

	return StyleSheet.create({
		typography: {
			...typographyStyle,
			...(color && {color}),
		},
	});
};

export default getStyleByTypography;
