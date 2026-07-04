import React from 'react';
import {View} from 'react-native';
import Text from 'atoms/Text';
import {colors} from 'theme/colors';
import {palette} from 'theme/palette';
import CenterScrollView from '../../decorators/CenterScrollView';

export default {
	title: 'Design system/Colors',
	parameters: {
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},
	},
	decorators: [
		(Story) => (
			<CenterScrollView>
				<Story />
			</CenterScrollView>
		),
	],
};

const styles = {
	Base: {fontFamily: 'Roboto'},
	Container: {
		width: '100%',
	},
	ColorWrapper: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: 30,
	},
	ColorSquare: (color) => ({
		backgroundColor: color,
		width: 100,
		height: 100,
		borderColor: colors.greyScale['02'],
		borderWidth: 1,
		marginRight: 10,
	}),
	TitleWrapper: {
		fontSize: 24,
		textTransform: 'capitalize',
		marginBottom: 30,
	},
	FamilyTitle: {
		fontSize: 16,
		marginBottom: 10,
	},
	Title: {
		marginVertical: 5,
	},
};

const Swatch = ({title, value}) => (
	<View>
		<Text style={styles.Title}>{title}</Text>
		<View style={styles.ColorSquare(value)} />
		<Text style={styles.Title}>{value}</Text>
	</View>
);

const isToken = (value) => typeof value === 'string';

const renderTokens = (tokens, path = []) => {
	const entries = Object.entries(tokens);
	const swatches = entries.filter(([, value]) => isToken(value));
	const families = entries.filter(([, value]) => !isToken(value));

	return (
		<View>
			{path.length > 1 && !!swatches.length && (
				<Text style={[styles.FamilyTitle, styles.Base]}>{path.join('.')}</Text>
			)}
			<View style={styles.ColorWrapper}>
				{swatches.map(([name, value]) => (
					<Swatch key={name} title={[...path, name].join('.')} value={value} />
				))}
			</View>
			{families.map(([name, value]) => (
				<View key={name}>{renderTokens(value, [...path, name])}</View>
			))}
		</View>
	);
};

const renderGroups = (groups) =>
	Object.entries(groups).map(([groupName, group]) => (
		<View key={groupName}>
			<Text style={[styles.TitleWrapper, styles.Base]}>{groupName}</Text>
			{renderTokens(group, [groupName])}
		</View>
	));

export const Colors = () => <View style={styles.Container}>{renderGroups(colors)}</View>;

export const PaletteDeprecated = () => (
	<View style={styles.Container}>
		<Text style={[styles.FamilyTitle, styles.Base]}>
			⚠️ Deprecada: usar los tokens de Colors. Cada valor mapea 1:1 a un token nuevo (ver JSDoc en
			theme/palette).
		</Text>
		{renderGroups(palette)}
	</View>
);

PaletteDeprecated.storyName = 'Palette (deprecated)';
