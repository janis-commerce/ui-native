import React, {ReactElement} from 'react';
import {
	StyleProp,
	StyleSheet,
	Text as TextComponent,
	TextProps as TextComponentProps,
	TextStyle,
} from 'react-native';
import {moderateScale} from '../../scale';
import {LOAD_STORYBOOK} from '../../../env.json';

interface TextProps extends TextComponentProps {
	children?: ReactElement | string;
	style?: StyleProp<TextStyle>;
}

const Text = ({children, style, ...props}: TextProps) => {
	if (!children) {
		return null;
	}

	const validFontSize = !LOAD_STORYBOOK ? moderateScale(13) : 13;

	const styles = StyleSheet.create({
		TextStyles: {
			fontSize: validFontSize,
			fontFamily: 'Roboto',
		},
	});

	return (
		<TextComponent style={[styles.TextStyles, style]} {...props}>
			{children}
		</TextComponent>
	);
};

export default Text;
