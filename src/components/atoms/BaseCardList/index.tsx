import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {palette} from 'theme/palette';

export interface BaseCardListProps {
	children: ReactNode;
	isSelected?: boolean;
	style?: ViewStyle;
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
		},
		selectedContainer: {
			borderWidth: 2,
			borderColor: palette.primary.main,
		},
	});

	const activeStyles = [styles.container, isSelected && styles.selectedContainer, style && style];

	return (
		<View style={activeStyles} {...props}>
			{children}
		</View>
	);
};

export default BaseCardList;
