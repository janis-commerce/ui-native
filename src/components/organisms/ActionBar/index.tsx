import React, {ReactNode, useContext} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {palette} from 'theme/palette';
import Button from 'molecules/Button';
import ActionBarRow from './Row';
import ActionBarItem from './Item';
import {ActionBarContext} from './context';
import {chromePadding, normalizeActions, rowGap} from './utils';
import type {ActionBarVariant, ActionConfig, ActionsRows} from './utils';

export interface ActionBarProps extends ViewProps {
	actions?: ActionsRows;
	children?: ReactNode;
	variant?: ActionBarVariant;
	backgroundColor?: string;
	withSafeArea?: boolean;
}

const renderConfigRows = (rows: ActionConfig[][]) =>
	rows.map((row, rowIndex) => (
		<ActionBarRow key={rowIndex.toString()}>
			{row.map(({flex, ...buttonProps}, actionIndex) => (
				<ActionBarItem key={actionIndex.toString()} flex={flex}>
					<Button {...buttonProps} />
				</ActionBarItem>
			))}
		</ActionBarRow>
	));

/**
 * Bottom bar of action buttons. Layouts are expressed as stacked rows whose
 * items share the width by flex weights, either via the `actions` config
 * (an array where a nested array is a row) or by composing Row/Item children.
 * It only owns the bar chrome (padding, gap, background, bottom safe area);
 * the visual hierarchy of each action belongs to the Button itself.
 */
const ActionBarComponent = ({
	actions,
	children = null,
	variant = 'rounded',
	backgroundColor,
	withSafeArea = true,
	style,
	...props
}: ActionBarProps) => {
	const insets = useContext(SafeAreaInsetsContext);
	const rows = normalizeActions(actions);
	const hasConfigActions = !!rows.length;

	if (!hasConfigActions && !children) {
		return null;
	}

	const padding = chromePadding(variant);
	const bottomInset = withSafeArea ? insets?.bottom ?? 0 : 0;

	const styles = StyleSheet.create({
		container: {
			padding,
			paddingBottom: padding + bottomInset,
			gap: rowGap(variant),
			backgroundColor: backgroundColor || palette.base.white,
		},
	});

	return (
		<ActionBarContext.Provider value={variant}>
			<View style={[styles.container, style]} {...props}>
				{hasConfigActions ? renderConfigRows(rows) : children}
			</View>
		</ActionBarContext.Provider>
	);
};

const ActionBar = Object.assign(ActionBarComponent, {
	Row: ActionBarRow,
	Item: ActionBarItem,
});

export default ActionBar;
