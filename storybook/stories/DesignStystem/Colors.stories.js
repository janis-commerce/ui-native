import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import Text from 'atoms/Text';
import {colors} from 'theme/colors';
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

const STATE_ORDER = ['light', 'normal', 'hover', 'pressed'];
const MONO_FONT = 'Menlo, Consolas, monospace';

const styles = {
	Page: {
		width: '100%',
		maxWidth: 1080,
		paddingVertical: 8,
	},
	PageTitle: {
		fontFamily: 'Roboto',
		fontSize: 28,
		fontWeight: '700',
		color: colors.secondary.black.normal,
		marginBottom: 4,
	},
	PageCaption: {
		fontFamily: 'Roboto',
		fontSize: 14,
		color: colors.greyScale['06'],
		marginBottom: 32,
	},
	GroupTitle: {
		fontFamily: 'Roboto',
		fontSize: 20,
		fontWeight: '700',
		textTransform: 'capitalize',
		color: colors.secondary.black.normal,
	},
	GroupPath: {
		fontFamily: MONO_FONT,
		fontSize: 12,
		color: colors.greyScale['06'],
		marginTop: 2,
		marginBottom: 16,
	},
	GroupWrapper: {
		marginBottom: 40,
	},
	CardsWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginHorizontal: -8,
	},
	Card: (isWide) => ({
		flexGrow: 1,
		flexBasis: isWide ? '100%' : 320,
		maxWidth: isWide ? '100%' : 500,
		backgroundColor: colors.greyScale.white,
		borderColor: colors.greyScale['01'],
		borderWidth: 1,
		borderRadius: 12,
		padding: 16,
		margin: 8,
	}),
	CardTitle: {
		fontFamily: 'Roboto',
		fontSize: 15,
		fontWeight: '500',
		textTransform: 'capitalize',
		color: colors.secondary.black.normal,
		marginBottom: 12,
	},
	Ramp: {
		flexDirection: 'row',
		borderRadius: 8,
		overflow: 'hidden',
		borderColor: colors.greyScale['01'],
		borderWidth: 1,
	},
	RampSegment: (color) => ({
		flex: 1,
		height: 64,
		backgroundColor: color,
	}),
	LabelsRow: {
		flexDirection: 'row',
		marginTop: 8,
	},
	Label: {
		flex: 1,
		alignItems: 'center',
	},
	LabelName: {
		fontFamily: 'Roboto',
		fontSize: 12,
		fontWeight: '500',
		color: colors.secondary.black.normal,
	},
	LabelHex: (isCopied) => ({
		fontFamily: MONO_FONT,
		fontSize: 11,
		color: isCopied ? colors.status.green.pressed : colors.greyScale['06'],
		marginTop: 2,
	}),
};

const byStateOrder = ([nameA], [nameB]) => {
	const indexA = STATE_ORDER.indexOf(nameA);
	const indexB = STATE_ORDER.indexOf(nameB);

	return indexA === -1 || indexB === -1 ? 0 : indexA - indexB;
};

const copyToClipboard = (value) => {
	if (typeof navigator !== 'undefined' && navigator.clipboard) {
		navigator.clipboard.writeText(value);
	}
};

const Ramp = ({tokens, copiedHex, onCopy}) => (
	<View>
		<View style={styles.Ramp}>
			{tokens.map(({name, value}) => (
				<Pressable key={name} style={styles.RampSegment(value)} onPress={() => onCopy(value)} />
			))}
		</View>
		<View style={styles.LabelsRow}>
			{tokens.map(({name, value}) => (
				<View key={name} style={styles.Label}>
					<Text style={styles.LabelName}>{name}</Text>
					<Text style={styles.LabelHex(copiedHex === value)}>
						{copiedHex === value ? '✓ copiado' : value.toUpperCase()}
					</Text>
				</View>
			))}
		</View>
	</View>
);

const FamilyCard = ({title, tokens, copiedHex, onCopy}) => (
	<View style={styles.Card(tokens.length > 6)}>
		<Text style={styles.CardTitle}>{title}</Text>
		<Ramp tokens={tokens} copiedHex={copiedHex} onCopy={onCopy} />
	</View>
);

const toTokens = (family) =>
	Object.entries(family)
		.sort(byStateOrder)
		.map(([name, value]) => ({name, value}));

const Group = ({name, families, path, copiedHex, onCopy}) => (
	<View style={styles.GroupWrapper}>
		<Text style={styles.GroupTitle}>{name}</Text>
		<Text style={styles.GroupPath}>{path}</Text>
		<View style={styles.CardsWrapper}>
			{families.map((family) => (
				<FamilyCard key={family.title} {...family} copiedHex={copiedHex} onCopy={onCopy} />
			))}
		</View>
	</View>
);

// greyScale es una escala plana (sin familias): se muestra como un único ramp
const toFamilies = (groupName, group) => {
	const values = Object.values(group);

	if (values.every((value) => typeof value === 'string')) {
		return [{title: groupName, tokens: toTokens(group)}];
	}

	return Object.entries(group).map(([familyName, family]) => ({
		title: familyName,
		tokens: toTokens(family),
	}));
};

const TokensGallery = ({source, rootPath, header}) => {
	const [copiedHex, setCopiedHex] = useState(null);

	const handleCopy = (value) => {
		copyToClipboard(value);
		setCopiedHex(value);
		setTimeout(() => setCopiedHex(null), 1200);
	};

	return (
		<View style={styles.Page}>
			{header}
			{Object.entries(source).map(([groupName, group]) => (
				<Group
					key={groupName}
					name={groupName}
					path={`${rootPath}.${groupName}`}
					families={toFamilies(groupName, group)}
					copiedHex={copiedHex}
					onCopy={handleCopy}
				/>
			))}
		</View>
	);
};

export const Colors = () => (
	<TokensGallery
		source={colors}
		rootPath="colors"
		header={
			<>
				<Text style={styles.PageTitle}>Color tokens</Text>
				<Text style={styles.PageCaption}>
					Espejo 1:1 de los published styles de Figma · tocá un color para copiar el hex
				</Text>
			</>
		}
	/>
);
