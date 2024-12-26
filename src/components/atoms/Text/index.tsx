import React, {ReactElement} from 'react';
import {
	StyleProp,
	StyleSheet,
	Text as TextComponent,
	TextProps as TextComponentProps,
	TextStyle,
} from 'react-native';
import {moderateScale, scaledForDevice} from 'scale';
import {isDevEnv} from 'utils/index';

export interface TextProps extends TextComponentProps {
	children?: ReactElement | string;
	style?: StyleProp<TextStyle>;
}

const Text = ({children, style, ...props}: TextProps) => {
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

	// istanbul ignore next
	if (isDevEnv()) {
		console.warn('This component is going to be deprecated soon.');
	}
	return (
		<TextComponent style={[styles.TextStyles, style]} {...props}>
			{children}
		</TextComponent>
	);
};

export default Text;
