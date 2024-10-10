import React, {ReactElement} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import getStyleByTypography from './utils/getStyleByTypography';
import Text, {TextProps} from 'atoms/Text';

export type TypographyType = 'display' | 'heading' | 'title' | 'label' | 'body' | 'overline';

export type TypographySize = 'large' | 'medium' | 'small';

interface TypographyProps extends TextProps {
	children?: ReactElement | string;
	style?: StyleProp<TextStyle>;
	type?: TypographyType;
	size?: TypographySize;
}

const Typography = ({children, style, type, size, ...props}: TypographyProps) => {
	if (!children) {
		return null;
	}

	const typographyStyles = getStyleByTypography(
		type as TypographyType | 'string',
		size as TypographySize | 'string'
	);

	return (
		<Text style={[style, typographyStyles.typography]} {...props}>
			{children}
		</Text>
	);
};

export default Typography;
