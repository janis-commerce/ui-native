import React, {ReactElement} from 'react';
import {StyleSheet, Text as TextComponent, TextProps as TextComponentProps} from 'react-native';

interface TextProps extends TextComponentProps {
	children?: ReactElement | string;
}

const Text = ({children, ...props}: TextProps) => {
	if (!children) {
		return null;
	}

	const styles = StyleSheet.create({
		TextStyles: {
			fontSize: 16,
			fontFamily: 'Roboto',
			...props,
		},
	});

	return <TextComponent style={styles.TextStyles}>{children}</TextComponent>;
};

export default Text;
