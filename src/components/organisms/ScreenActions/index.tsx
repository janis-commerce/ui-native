import React from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {palette} from 'theme/palette';
import Button from 'molecules/Button';
import type {ButtonProps} from 'molecules/Button';
import {barPadding, iconButtonMinWidth, normalizeActions, rowGap} from './utils';

export interface ActionConfig extends ButtonProps {
	flex?: number;
}

/**
 * A row slot: an action config, or a falsy value that gets filtered out. The
 * falsy union lets callers inline conditionals (`canDelete && deleteAction`),
 * the same way React accepts a falsy `ReactNode` child.
 */
type Action = ActionConfig | null | false | undefined;
export type ActionsRows = Array<Action | Action[]>;

export interface ScreenActionsProps extends ViewProps {
	actions?: ActionsRows;
	backgroundColor?: string;
}

const itemStyle = (flex = 1): ViewStyle => (flex > 0 ? {flex} : {flexGrow: 0, flexShrink: 0});

/**
 * Bottom bar of screen action buttons. Layouts are declared through the
 * `actions` config, where a nested array is a row and its items share the width
 * by flex weights (`flex={0}` keeps a button's intrinsic width). Falsy entries
 * are skipped, so callers can inline conditional actions without extra ternaries.
 * It owns the bar framing (padding, gap, background) and gives icon-only actions a minimum width
 * so they read as a pill instead of a circle; the rest of each action's visual
 * hierarchy belongs to the Button itself.
 *
 * The bottom safe-area inset is owned by the screen/app root (a SafeAreaView
 * with the `bottom` edge): reading it here too would add the inset twice.
 */
const ScreenActions = ({actions, backgroundColor, style, ...props}: ScreenActionsProps) => {
	const rows = normalizeActions(actions);

	if (!rows.length) {
		return null;
	}

	const styles = StyleSheet.create({
		container: {
			padding: barPadding,
			gap: rowGap,
			backgroundColor: backgroundColor || palette.base.white,
		},
		row: {
			flexDirection: 'row',
			alignItems: 'stretch',
			gap: rowGap,
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
