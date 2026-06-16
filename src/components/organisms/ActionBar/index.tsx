import React, {useContext} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {palette} from 'theme/palette';
import Button from 'molecules/Button';
import {chromePadding, normalizeActions, rowGap} from './utils';
import type {ActionBarVariant, ActionsRows} from './utils';

export interface ActionBarProps extends ViewProps {
	actions?: ActionsRows;
	variant?: ActionBarVariant;
	backgroundColor?: string;
	withSafeArea?: boolean;
}

const itemStyle = (flex = 1) => (flex > 0 ? {flex} : {flexGrow: 0, flexShrink: 0});

/**
 * Bottom bar of action buttons. Layouts are declared through the `actions`
 * config, where a nested array is a row and its items share the width by flex
 * weights (`flex={0}` keeps a button's intrinsic width). It only owns the bar
 * chrome (padding, gap, background, bottom safe area); the visual hierarchy of
 * each action belongs to the Button itself.
 */
const ActionBar = ({
	actions,
	variant = 'rounded',
	backgroundColor,
	withSafeArea = true,
	style,
	...props
}: ActionBarProps) => {
	const insets = useContext(SafeAreaInsetsContext);
	const rows = normalizeActions(actions);

	if (!rows.length) {
		return null;
	}

	const padding = chromePadding(variant);
	const gap = rowGap(variant);
	const bottomInset = withSafeArea ? insets?.bottom ?? 0 : 0;

	const styles = StyleSheet.create({
		container: {
			padding,
			paddingBottom: padding + bottomInset,
			gap,
			backgroundColor: backgroundColor || palette.base.white,
		},
		row: {
			flexDirection: 'row',
			alignItems: 'stretch',
			gap,
		},
	});

	return (
		<View style={[styles.container, style]} {...props}>
			{rows.map((row, rowIndex) => (
				<View key={rowIndex.toString()} style={styles.row}>
					{row.map(({flex, ...buttonProps}, actionIndex) => (
						<View key={actionIndex.toString()} style={itemStyle(flex)}>
							<Button {...buttonProps} />
						</View>
					))}
				</View>
			))}
		</View>
	);
};

export default ActionBar;
