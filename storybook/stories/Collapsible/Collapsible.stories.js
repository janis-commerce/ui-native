import React from 'react';
import Collapsible from 'atoms/Collapsible';
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

const Header = ({headerTitle}) => {
	return (
		<View style={styles.headerWrapper}>
			<Text style={styles.title}>{headerTitle}</Text>
		</View>
	);
};

export const CollapsibleWithText = ({headerTitle, duration}) => {
	const ContentWithText = ({headerContent}) => {
		return (
			<View style={[styles.contentWrapper]}>
				<Text style={styles.text}>{headerContent}</Text>
			</View>
		);
	};

	const data = [
		{
			headerContent:
				'Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla lectus mollis maecenas gravida tortor nunc, inceptos curabitur eros vestibulum leo sociosqu. Integer porta aenean lacus mollis condimentum a tellus porttitor ligula varius vehicula erat luctus morbi tempus, habitasse dictum tortor placerat fermentum dis ut aliquet eget blandit habitant molestie sem.',
		},
	];

	return (
		<Collapsible
			header={() => Header({headerTitle})}
			content={ContentWithText}
			data={data}
			duration={duration}
			pressableComponent={TouchableOpacity}
		/>
	);
};

export const CollapsibleWithCard = ({headerTitle, duration}) => {
	const ContentWithCard = ({imageUrl, text}) => {
		return (
			<View style={[styles.contentWrapper, styles.contentCardWrapper]}>
				<View style={styles.imageContainer}>
					<Image style={styles.imageStyle} source={{uri: imageUrl}} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>{text}</Text>
				</View>
			</View>
		);
	};

	const data = [
		{
			imageUrl: 'https://avatars.githubusercontent.com/u/49998302?s=200&v=4',
			text: 'Somos la solución tecnológica líder del mercado retail para la inteligencia de la logística Omnicanal.',
		},
	];

	return (
		<Collapsible
			header={() => Header({headerTitle})}
			content={ContentWithCard}
			data={data}
			duration={duration}
			pressableComponent={TouchableOpacity}
		/>
	);
};

export const CollapsibleWithLongText = ({headerTitle, duration}) => {
	const ContentWithLongText = ({text}) => {
		return (
			<View style={[styles.contentWrapper]}>
				<Text style={styles.text}>{text}</Text>
			</View>
		);
	};

	const data = [
		{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id tellus rhoncus, bibendum lacus venenatis, consectetur eros. In blandit erat ut orci viverra, gravida scelerisque neque vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla suscipit mi in erat vestibulum finibus. Quisque nulla sapien, egestas nec mauris posuere, fermentum lacinia ligula. Sed in est quis tortor imperdiet scelerisque in non felis. Pellentesque non enim malesuada augue aliquet lobortis ut sed augue. Phasellus posuere, ipsum eu sollicitudin lobortis, est quam finibus nisl, sed ultrices eros erat eget metus. Phasellus sed viverra tortor, sed aliquet tellus. Proin suscipit, sem vel sagittis eleifend, est leo eleifend nibh, eget commodo velit lorem vel massa. Maecenas ultricies, orci sit amet posuere sodales, nisi leo elementum ex, a tristique enim odio eu velit. Duis convallis est ac ullamcorper rhoncus. Morbi dictum odio finibus libero varius, non posuere lacus imperdiet. Praesent nulla nulla, varius et varius id, rutrum at lectus. In sod',
		},
	];

	return (
		<ScrollView>
			<Collapsible
				header={() => Header({headerTitle})}
				content={ContentWithLongText}
				data={data}
				duration={duration}
				pressableComponent={TouchableOpacity}
			/>
		</ScrollView>
	);
};

CollapsibleWithText.args = {
	headerTitle: 'Header title',
	duration: 300,
};

CollapsibleWithLongText.args = {
	headerTitle: 'Big collapsible',
	duration: 1000,
};

CollapsibleWithCard.args = {
	headerTitle: 'Janis commerce',
	duration: 500,
};

const styles = StyleSheet.create({
	viewWrapper: {
		flex: 1,
		alignItems: 'center',
	},
	headerWrapper: {
		paddingVertical: 5,
		paddingHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2979FF',
	},
	contentWrapper: {
		flex: 1,
		paddingVertical: 5,
		paddingHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderWidth: 1,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	title: {
		fontSize: 18,
		fontWeight: '800',
		color: 'white',
	},
	text: {
		fontSize: 14,
		fontWeight: '500',
		color: 'black',
	},
	contentCardWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageStyle: {
		width: 100,
		height: 100,
	},
	textContainer: {
		flex: 2,
	},
});

export default {
	title: 'Components/Collapsible',
};
