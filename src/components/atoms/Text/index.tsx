import React, {ReactElement} from 'react';
import {
	StyleProp,
	StyleSheet,
	Text as TextComponent,
	TextProps as TextComponentProps,
	TextStyle,
} from 'react-native';
import {moderateScale, scaledForDevice} from 'scale';
import getStyleByTypography from './utils/getStyleByTypography';

export type TypographyType = 'display' | 'heading' | 'title' | 'label' | 'body' | 'overline';

export type TypographySize = 'large' | 'medium' | 'small';

interface TextProps extends TextComponentProps {
	children?: ReactElement | string;
	style?: StyleProp<TextStyle>;
	type?: TypographyType;
	size?: TypographySize;
}

const Text = ({children, style, type, size, ...props}: TextProps) => {
	if (!children) {
		return null;
	}

	const validFontSize = scaledForDevice(13, moderateScale);

	const styles = StyleSheet.create({
		TextStyles: {
			fontSize: validFontSize,
			fontFamily: 'Roboto',
		},
	});

	const typographyStyles = getStyleByTypography(
		type as TypographyType | 'string',
		size as TypographySize | 'string'
	);

	return (
		<TextComponent style={[styles.TextStyles, style, typographyStyles.typography]} {...props}>
			{children}
		</TextComponent>
	);
};

export default Text;
