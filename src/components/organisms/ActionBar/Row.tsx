import React, {FC, ReactNode, useContext} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {ActionBarContext} from './context';
import {rowGap} from './utils';

export interface ActionBarRowProps extends ViewProps {
	children?: ReactNode;
}

/**
 * Horizontal row of actions inside an ActionBar. Items share the width
 * according to their flex weights.
 */
const ActionBarRow: FC<ActionBarRowProps> = ({children = null, style, ...props}) => {
	const variant = useContext(ActionBarContext);

	if (!children) {
		return null;
	}

	const styles = StyleSheet.create({
		row: {
			flexDirection: 'row',
			alignItems: 'stretch',
			gap: rowGap(variant),
		},
	});

	return (
		<View style={[styles.row, style]} {...props}>
			{children}
		</View>
	);
};

export default ActionBarRow;
