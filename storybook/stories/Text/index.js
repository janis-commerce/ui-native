import React from 'react';
import TextComponent from '../../../src/components/Text';
import {StyleSheet} from 'react-native';

const Text = ({children, ...props}) => {
	const styles = StyleSheet.create({
		text: {
			...props,
		},
	});

	return <TextComponent style={styles.text}>{children}</TextComponent>;
};

export default Text;
