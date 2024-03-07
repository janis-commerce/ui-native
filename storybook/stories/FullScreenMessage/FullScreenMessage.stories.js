import React, {useState} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import FullScreenMessage, {animationTypes} from '../../../src/components/FullScreenMessage';
import {base, primary, success} from '../../../src/theme/palette';
import Icon from '../../../src/components/Icon';

export default {
	title: 'Components/FullScreenMessage',
	argTypes: {
		duration: {
			control: 'number',
		},
		animationType: {
			options: ['slide', 'fade', 'none'],
			control: {type: 'select'},
		},
	},
};

const styles = StyleSheet.create({
	ButtonStyle: {
		paddingLeft: 15,
		paddingRight: 15,
		height: 50,
		borderRadius: 25,
		backgroundColor: primary.main,
		justifyContent: 'center',
		alignItems: 'center',
	},
	TextStyles: {
		color: 'white',
		fontSize: 18,
	},
	Title: {
		textAlign: 'center',
		fontSize: 20,
		marginBottom: 20,
		color: 'white',
	},
});

export const DefaultProps = (props) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<TouchableHighlight style={styles.ButtonStyle} onPress={() => setVisible(true)}>
				<Text style={styles.TextStyles}>Preview FullScreenMessage</Text>
			</TouchableHighlight>
			<FullScreenMessage isVisible={visible} onEndDuration={() => setVisible(false)} {...props} />
		</>
	);
};

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	animationType: animationTypes.Slide,
	duration: 3000,
	backgroundColor: primary.main,
	title: 'Janis',
	subtitle: 'Subtitle text',
	iconName: 'iso_janis',
	textsColor: base.white,
	iconColor: base.white,
	children: null,
};

const Children = (
	<>
		<Text style={styles.Title} color={base.main}>
			Fizzmod Custom Text
		</Text>
		<Icon color={base.white} size={160} name="logo_fizzmod" />
	</>
);

export const WithChildren = (props) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<TouchableHighlight style={styles.ButtonStyle} onPress={() => setVisible(true)}>
				<Text style={styles.TextStyles}>Preview FullScreenMessage</Text>
			</TouchableHighlight>
			<FullScreenMessage isVisible={visible} onEndDuration={() => setVisible(false)} {...props}>
				{props.children}
			</FullScreenMessage>
		</>
	);
};

WithChildren.storyName = 'with children prop';

WithChildren.args = {
	duration: 3000,
	animationType: animationTypes.Fade,
	backgroundColor: success.main,
	children: Children,
};
