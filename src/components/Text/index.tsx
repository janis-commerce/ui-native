import React, {ReactElement} from 'react';
import {StyleSheet, Text as TextComponent} from 'react-native';
import {node, arrayOf, oneOfType} from 'prop-types';

type TextProps = {
	children?: ReactElement | string;
};

const Text = ({children, ...props}: TextProps) => {
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

Text.propTypes = {
	children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default Text;
