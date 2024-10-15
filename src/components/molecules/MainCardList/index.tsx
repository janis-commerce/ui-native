import BaseCardList from 'atoms/BaseCardList';
import Text from 'atoms/Text';
import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {palette} from 'theme/palette';

export interface Block {
	component: ReactNode;
	hasSeparator?: boolean;
}

export interface MainCardListProps extends ViewProps {
	displayId: string;
	children?: ReactNode;
	blocks?: Block[];
	isSelected?: boolean;
}

const MainCardList: FC<MainCardListProps> = ({
	displayId,
	children,
	blocks,
	isSelected,
	style,
	...props
}) => {
	if (!displayId || typeof displayId !== 'string') {
		return null;
	}

	const styles = StyleSheet.create({
		innerContainer: {},
		blockContainer: {
			marginTop: 12,
			paddingTop: 12,
		},
		blockWithSeparator: {
			borderTopWidth: 1,
			borderTopColor: palette.white.main,
		},
		displayIdText: {
			fontFamily: 'Roboto',
			fontWeight: '700',
			fontSize: 18,
			color: palette.black.main,
		},
		selectedDisplayIdText: {
			color: palette.primary.main,
		},
		childrenContainer: {
			marginTop: 4,
		},
	});

	const renderBlocks = () => {
		if (!blocks || !Array.isArray(blocks) || !blocks.length) {
			return null;
		}

		return blocks.map((block, idx) => {
			const {component, hasSeparator = true} = block;

			const activeBlockStyles = [
				styles.blockContainer,
				hasSeparator && styles.blockWithSeparator,
			].filter(Boolean);

			return (
				<View key={idx} style={activeBlockStyles}>
					{component}
				</View>
			);
		});
	};

	const activeDisplayIdStyles = [
		styles.displayIdText,
		isSelected && styles.selectedDisplayIdText,
	].filter(Boolean);

	return (
		<BaseCardList isSelected={isSelected} style={style && style} {...props}>
			<View>
				<Text style={activeDisplayIdStyles}>{displayId}</Text>
				{children && <View style={styles.childrenContainer}>{children}</View>}
				<View>{renderBlocks()}</View>
			</View>
		</BaseCardList>
	);
};

export default MainCardList;
