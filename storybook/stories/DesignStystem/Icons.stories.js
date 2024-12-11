import React from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import Icon from '../../../src/components/atoms/Icon';
import palette from '../../../src/theme/palette';
import iconsSelection from '../../../src/components/atoms/Icon/assets/fonts/selection.json';
import CenterScrollView from '../../decorators/CenterScrollView';

export default {
	title: 'Design system/Icons',
	argTypes: {color: {control: {type: 'color'}}},
	decorators: [
		(Story) => (
			<CenterScrollView>
				<Story />
			</CenterScrollView>
		),
	],
};

export const DefaultProps = ({color, size, ...props}) => {
	const windowDimensions = useWindowDimensions();
	const widthWrapper = windowDimensions.width >= 640 ? 233 : '100%';

	const icons = iconsSelection.icons;
	const janisIcons = icons.map(({properties}) => ({
		name: properties.name,
		prevSize: properties.prevSize,
	}));

	const styles = StyleSheet.create({
		wrapperIcon: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			padding: 10,
			width: widthWrapper,
		},
		textIcon: {
			marginRight: 10,
		},
	});

	return (
		<>
			{janisIcons.map(({name, prevSize}, index) => (
				<View style={styles.wrapperIcon} key={name + index}>
					<Text key={name} style={styles.textIcon}>
						<Icon name={name} color={color} size={prevSize} {...props} />
					</Text>
					<Text>{name}</Text>
				</View>
			))}
		</>
	);
};

DefaultProps.storyName = 'Icons';

DefaultProps.args = {
	color: palette.primary.blue.normal,
};
