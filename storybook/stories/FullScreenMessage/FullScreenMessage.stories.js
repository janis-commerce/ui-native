import React, {useState} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import FullScreenMessage, {animationTypes} from '../../../src/components/FullScreenMessage';
import {base, primary, success} from '../../../src/theme/palette';
import Icon from '../../../src/components/Icon';

export default {
	title: 'Components/FullScreenMessage',
	argTypes: {
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

	const Toogle = () => {
		setVisible(true);
		setTimeout(() => {
			setVisible(false);
		}, 3000);
	};

	return (
		<>
			<TouchableHighlight style={styles.ButtonStyle} onPress={Toogle}>
				<Text style={styles.TextStyles}>Preview FullScreenMessage</Text>
			</TouchableHighlight>
			<FullScreenMessage {...props} isVisible={visible} />
		</>
	);
};

DefaultProps.storyName = 'default props';

DefaultProps.args = {
	animationType: animationTypes.Slide,
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

	const Toogle = () => {
		setVisible(true);
		setTimeout(() => {
			setVisible(false);
		}, 3000);
	};

	return (
		<>
			<TouchableHighlight style={styles.ButtonStyle} onPress={Toogle}>
				<Text style={styles.TextStyles}>Preview FullScreenMessage</Text>
			</TouchableHighlight>
			<FullScreenMessage {...props} isVisible={visible}>
				{props.children}
			</FullScreenMessage>
		</>
	);
};

WithChildren.storyName = 'with children prop';

WithChildren.args = {
	animationType: animationTypes.Fade,
	backgroundColor: success.main,
	children: Children,
};
