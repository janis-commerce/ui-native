import React from 'react';
import {View} from 'react-native';
import Text from '../../../src/components/Text';
import {palette} from '../../../src/theme/palette';

export default {
	title: 'Design system/Colors',
	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},
	},
};

const styles = {
	Base: {fontFamily: 'Roboto'},
	Container: {
		width: '100%',
	},
	ColorWrapper: {
		display: 'flex',
		flexDirection: 'row',
		gap: 40,
		marginBottom: 30,
	},
	ColorContainer: {
		display: 'flex',
	},
	ColorSquare: (color) => ({
		backgroundColor: color,
		width: 100,
		height: 100,
	}),
	TitleWrapper: {
		fontSize: 24,
		textTransform: 'capitalize',
		marginBottom: 30,
	},
};

const colorsKeys = Object.keys(palette);

const renderColor = (colorData) => {
	const colorObject = palette[colorData];

	if (!colorObject || !Object.keys(colorObject).length) {
		return null;
	}

	const arrayComponent = Object.keys(colorObject).reduce((acc, act) => {
		if (!palette[colorData][act]) {
			return acc;
		}

		return [...acc, {title: `${colorData}.${act}`, value: palette[colorData][act]}];
	}, []);

	return arrayComponent.map(({title, value}) => (
		<View key={`${title}-${value}`} style={styles.ColorContainer}>
			<Text>{title}</Text>
			<View style={styles.ColorSquare(value)} />
			<Text>{value}</Text>
		</View>
	));
};

export const Colors = () => (
	<View style={styles.Container}>
		{colorsKeys.map((title) => {
			return (
				<View key={title}>
					<Text style={[styles.TitleWrapper, styles.Base]}>{title}</Text>
					<View style={styles.ColorWrapper}> {renderColor(title)}</View>
				</View>
			);
		})}
	</View>
);
