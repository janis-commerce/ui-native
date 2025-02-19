import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import typography from 'theme/typography';
import TypographyComponent from 'atoms/Typography';
import CenterScrollView from '../../decorators/CenterScrollView';
import {primary} from '../../../src/theme/palette';

export default {
	title: 'Design system/Typography',
	decorators: [
		(Story) => (
			<CenterScrollView>
				<Story />
			</CenterScrollView>
		),
	],
};
export const Typography = () => {
	const typographyArray = Object.entries(typography).map(([type, sizes]) =>
		Object.entries(sizes).map(([size, properties]) => ({
			type,
			size,
			...properties,
		}))
	);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			padding: 16,
			backgroundColor: '#f5f5f5',
		},
		section: {
			marginBottom: 20,
		},
		sectionTitle: {
			fontSize: 18,
			fontWeight: 'bold',
			marginBottom: 8,
			textTransform: 'capitalize',
		},
		row: {
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		box: {
			flex: 1,
			backgroundColor: '#ffffff',
			padding: 20,
			margin: 4,
			borderRadius: 8,
			shadowColor: '#000',
			shadowOffset: {width: 0, height: 2},
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
	});

	return (
		<View style={styles.container}>
			{typographyArray.map((typographies, index) => (
				<View key={index} style={styles.section}>
					<Text style={styles.sectionTitle}>{typographies[0].type}</Text>
					<View style={styles.row}>
						{typographies.map((typography, idx) => (
							<View key={idx} style={styles.box}>
								<TypographyComponent
									color={primary.main}
									type={typography.type}
									size={typography.size}>
									Janis Commerce
								</TypographyComponent>
								<Text>Type: {typography.type}</Text>
								<Text>Size: {typography.size}</Text>
								<Text>Font size: {typography.fontSize}</Text>
								<Text>Font weight: {typography.fontWeight}</Text>
								<Text>Line height: {typography.lineHeight}</Text>
							</View>
						))}
					</View>
				</View>
			))}
		</View>
	);
};
