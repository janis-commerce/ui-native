import React, {useRef, useState} from 'react';
import {Button, Image, View} from 'react-native';
import Text from '../../../src/components/Text';
import Carousel from '../../../src/components/Carousel';
import {white} from '../../../src/theme/palette';
import {StyleSheet} from 'react-native';

const TextComponent = ({text}) => (
	<View style={styles.view}>
		<Image
			source={{
				uri: 'https://janis.im/wp-content/uploads/2023/06/logo2.png',
			}}
			style={styles.image}
		/>
		<Text style={styles.text}>{text}</Text>
	</View>
);

const defaultPages = [
	<TextComponent text="Page 1" />,
	<TextComponent text="Page 2" />,
	<TextComponent text="Page 3" />,
];

export default {
	title: 'Components/Carousel',
	argTypes: {
		isLoop: {
			control: 'boolean',
		},
		autoplay: {
			control: 'boolean',
		},
		autoPlayReverse: {
			control: 'boolean',
		},
		intervalTime: {
			control: 'number',
		},
		customWidth: {
			control: 'number',
		},
	},
};

export const DefaultProps = (props) => {
	const [{activePage = 0, pagesLength = 0}, setPages] = useState({});
	const previewPage = activePage + 1;
	const totalPages = pagesLength + 1;

	const buttonsRef = useRef({});

	return (
		<>
			<View style={styles.container}>
				<Carousel
					buttonsCallback={(params) => (buttonsRef.current = params)}
					pagesCallback={(params) => setPages(params)}
					{...props}
				/>
			</View>
			<View style={styles.containerButtons}>
				<Button onPress={() => buttonsRef.current.goPrev()} title=" <  prev " />
				<Text style={styles.pages}>
					{previewPage} / {totalPages}
				</Text>
				<Button onPress={() => buttonsRef.current.goNext()} title=" next  > " />
			</View>
		</>
	);
};

DefaultProps.storyName = 'Default props';

DefaultProps.args = {
	pages: defaultPages,
	intervalTime: 4000,
	customWidth: 800,
};

const styles = StyleSheet.create({
	view: {
		width: 300,
		padding: 30,
		borderRadius: 4,
		backgroundColor: white.main,
		alignItems: 'center',
	},
	image: {
		height: 80,
		width: 300,
	},
	text: {
		fontSize: 13,
		fontFamily: 'Roboto',
	},
	container: {
		width: 800,
		paddingVertical: 10,
	},
	containerButtons: {
		width: 800,
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	pages: {
		padding: 5,
	},
});
