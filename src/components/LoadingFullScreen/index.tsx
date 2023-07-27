import React, {ReactElement} from 'react';
import {StyleSheet, Text as TextComponent, TextProps as TextComponentProps} from 'react-native';

interface TextProps extends TextComponentProps {
	children?: ReactElement | string;
}

const LoadingFullScreen = ({children, ...props}: TextProps) => {
	if (!children) {
		return null;
	}

	return (
		<TextComponent style={styles.TextStyles} {...props}>
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

export default LoadingFullScreen;
