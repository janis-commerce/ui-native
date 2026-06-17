import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {palette} from 'theme/palette';
import Button from 'molecules/Button';
import {chromePadding, iconButtonMinWidth, normalizeActions, rowGap} from './utils';
import type {ScreenActionsVariant, ActionsRows} from './utils';

export interface ScreenActionsProps extends ViewProps {
	actions?: ActionsRows;
	variant?: ScreenActionsVariant;
	backgroundColor?: string;
}

const itemStyle = (flex = 1) => (flex > 0 ? {flex} : {flexGrow: 0, flexShrink: 0});

/**
 * Bottom bar of screen action buttons. Layouts are declared through the
 * `actions` config, where a nested array is a row and its items share the width
 * by flex weights (`flex={0}` keeps a button's intrinsic width). It owns the bar
 * chrome (padding, gap, background) and gives icon-only actions a minimum width
 * so they read as a pill instead of a circle; the rest of each action's visual
 * hierarchy belongs to the Button itself.
 *
 * The bottom safe-area inset is owned by the screen/app root (a SafeAreaView
 * with the `bottom` edge): reading it here too would add the inset twice.
 */
const ScreenActions = ({
	actions,
	variant = 'rounded',
	backgroundColor,
	style,
	...props
}: ScreenActionsProps) => {
	const rows = normalizeActions(actions);

	if (!rows.length) {
		return null;
	}

	const padding = chromePadding(variant);
	const gap = rowGap(variant);

	const styles = StyleSheet.create({
		container: {
			padding,
			gap,
			backgroundColor: backgroundColor || palette.base.white,
		},
		row: {
			flexDirection: 'row',
			alignItems: 'stretch',
			gap,
		},
		iconButton: {
			minWidth: iconButtonMinWidth,
		},
	});

	return (
		<View style={[styles.container, style]} {...props}>
			{rows.map((row, rowIndex) => (
				<View key={rowIndex.toString()} style={styles.row}>
					{row.map(({flex, style: buttonStyle, ...buttonProps}, actionIndex) => {
						const isIconOnly = !!buttonProps.icon && !buttonProps.value;

						return (
							<View key={actionIndex.toString()} style={itemStyle(flex)}>
								<Button
									{...buttonProps}
									style={StyleSheet.flatten([isIconOnly && styles.iconButton, buttonStyle])}
								/>
							</View>
						);
					})}
				</View>
			))}
		</View>
	);
};

export default ScreenActions;
