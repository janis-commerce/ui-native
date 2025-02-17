import React, {ReactElement} from 'react';
import {Text, StyleProp, TextStyle, TextProps} from 'react-native';
import getStyleByTypography from './utils/getStyleByTypography';

export type TypographyType = 'display' | 'heading' | 'title' | 'label' | 'body' | 'overline';

export type TypographySize = 'large' | 'medium' | 'small';

interface TypographyProps extends TextProps {
	children?: ReactElement | string;
	style?: StyleProp<TextStyle>;
	type?: TypographyType;
	size?: TypographySize;
	color?: string;
}

const Typography = ({children, style, type, size, color = 'black', ...props}: TypographyProps) => {
	if (!children) {
		return null;
	}

	const typographyStyles = getStyleByTypography(
		type as TypographyType | 'string',
		size as TypographySize | 'string',
		color
	);

	return (
		<Text style={[style, typographyStyles.typography]} {...props}>
			{children}
		</Text>
	);
};

export default Typography;
