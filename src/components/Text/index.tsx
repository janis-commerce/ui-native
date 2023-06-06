import React, {ReactElement} from 'react';
import {StyleSheet, Text as TextComponent, TextStyle} from 'react-native';

type TextProps = {
	children?: ReactElement | string;
	style?: TextStyle | TextStyle[];
};

const Text = ({children, style, ...props}: TextProps) => {
	if (!children) {
		return null;
	}

	const validStyles = style ? StyleSheet.flatten([styles.TextStyles, style]) : styles.TextStyles;

	return (
		<TextComponent style={validStyles} {...props}>
			{children}
		</TextComponent>
	);
};

const styles = StyleSheet.create({
	TextStyles: {
		fontSize: 16,
		fontFamily: 'Roboto',
	},
});

export default Text;
