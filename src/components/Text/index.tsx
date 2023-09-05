import React, {ReactElement} from 'react';
import {
	StyleProp,
	StyleSheet,
	Text as TextComponent,
	TextProps as TextComponentProps,
	TextStyle,
} from 'react-native';

interface TextProps extends TextComponentProps {
	children?: ReactElement | string;
	style?: StyleProp<TextStyle>;
}

const Text = ({children, style, ...props}: TextProps) => {
	if (!children) {
		return null;
	}

	const styles = StyleSheet.create({
		TextStyles: {
			fontSize: 13,
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
