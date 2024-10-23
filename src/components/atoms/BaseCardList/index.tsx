import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {palette} from 'theme/palette';

export interface BaseCardListProps extends ViewProps {
	children: ReactNode;
	isSelected?: boolean;
}

const BaseCardList: FC<BaseCardListProps> = ({children, isSelected = false, style, ...props}) => {
	if (!children) {
		return null;
	}

	const styles = StyleSheet.create({
		container: {
			backgroundColor: palette.base.white,
			borderRadius: 20,
			width: '100%',
			padding: 16,
			elevation: 2,
			shadowColor: palette.black.main,
		},
		selectedContainer: {
			borderWidth: 2,
			borderColor: palette.primary.main,
			elevation: 4,
			shadowColor: palette.primary.main,
		},
	});

	const activeStyles = [
		styles.container,
		isSelected && styles.selectedContainer,
		style && style,
	].filter(Boolean);

	return (
		<View style={activeStyles} {...props}>
			{children}
		</View>
	);
};

export default BaseCardList;
