import React from 'react';
import BaseCollapsible from 'atoms/BaseCollapsible';
import {View, Text, StyleSheet} from 'react-native';
import {palette} from 'theme/palette';

export default {
	title: 'Components/BaseCollapsible',
	argTypes: {
		duration: 1000,
		expandMultiple: {control: 'boolean'},
		expandFromBottom: {control: 'boolean'},
	},
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerWrapper: {
		width: '95%',
		height: 49,
		borderRadius: 4,
		paddingHorizontal: 14,
		backgroundColor: palette.primary.main,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentWrapper: {
		width: '95%',
		height: 'auto',
		display: 'flex',
		position: 'relative',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingVertical: 3,
		marginVertical: 2,
		backgroundColor: palette.white.main,
	},
	Title: {
		color: palette.base.white,
		fontSize: 20,
		fontWeight: '700',
		marginLeft: 9,
		marginRight: 'auto',
		textTransform: 'uppercase',
	},

	BodyTitle: {
		fontSize: 18,
		paddingVertical: 5,
		fontWeight: '600',
	},
	BodySubtitle: {
		fontSize: 16,
		fontWeight: '400',
	},
	SectionContainerStyle: {
		paddingBottom: 8,
	},
});

export const DefaultProps = (props) => {
	const {duration, expandMultiple, expandFromBottom} = props;

	const sections = [
		{title: 'Header 1', bodyTitle: 'Content 1'},
		{title: 'Header 2', bodyTitle: 'Content 2'},
		{title: 'Header 3', bodyTitle: 'Content 3'},
	];

	const renderHeader = (content) => {
		return (
			<View style={Styles.headerWrapper}>
				<Text style={Styles.Title}>{content.title}</Text>
			</View>
		);
	};

	const renderContent = (content) => {
		const subtitle =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proi.';

		return (
			<View style={Styles.contentWrapper}>
				<Text style={Styles.BodyTitle}>{content.bodyTitle}</Text>
				<Text style={Styles.BodySubtitle}>{subtitle}</Text>
			</View>
		);
	};

	return (
		<View style={Styles.container}>
			<BaseCollapsible
				sections={sections}
				duration={duration}
				renderHeader={renderHeader}
				renderContent={renderContent}
				activeSections={[]}
				expandMultiple={expandMultiple}
				expandFromBottom={expandFromBottom}
				sectionContainerStyle={Styles.SectionContainerStyle}
			/>
		</View>
	);
};

DefaultProps.args = {
	duration: 1000,
	expandMultiple: false,
	expandFromBottom: false,
};
