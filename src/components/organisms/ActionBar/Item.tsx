import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export interface ActionBarItemProps extends ViewProps {
	children?: ReactNode;
	flex?: number;
}

/**
 * Layout slot inside an ActionBar.Row. `flex` defines the width weight within
 * the row; `flex={0}` keeps the intrinsic width of its child (e.g. icon-only buttons).
 */
const ActionBarItem: FC<ActionBarItemProps> = ({children = null, flex = 1, style, ...props}) => {
	if (!children) {
		return null;
	}

	const styles = StyleSheet.create({
		item: flex > 0 ? {flex} : {flexGrow: 0, flexShrink: 0},
	});

	return (
		<View style={[styles.item, style]} {...props}>
			{children}
		</View>
	);
};

export default ActionBarItem;
