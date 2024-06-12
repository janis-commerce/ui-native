/* eslint-disable react-hooks/rules-of-hooks */
import React, {FC, ReactNode, useEffect, useRef} from 'react';
import {StyleSheet, View, ViewStyle, ScrollView, FlatList} from 'react-native';
import {moderateScale, scaledForDevice} from '../../scale';
import {base, grey, primary} from '../../theme/palette';
import BaseButton from '../BaseButton';
import Text from '../Text';
import {isObject} from './utils';

interface Scene {
	title: string;
	scene: ReactNode;
	disabled?: boolean;
}

export const positions = {
	top: 'top',
	bottom: 'bottom',
};

export type positionsType = typeof positions;
export type keyPosition = keyof positionsType;

interface TabsProps {
	scenes: Scene[];
	indexChanger: any;
	position?: keyPosition;
	scrollContentStyle?: ViewStyle;
	style?: ViewStyle;
}

interface TitleTabProps {
	title: string;
	index: number;
	disabled: boolean | undefined;
}

const Tabs: FC<TabsProps> = ({
	scenes,
	indexChanger,
	position = positions.top,
	scrollContentStyle = {},
	style = {},
	...props
}) => {
	if (!scenes || !Array.isArray(scenes) || !scenes.length) {
		return null;
	}
	if (!indexChanger || !Array.isArray(indexChanger) || !indexChanger.length) {
		return null;
	}

	const [activeTab, setActiveTab] = indexChanger;

	const scrollViewRef = useRef<any>(null);

	const validScenes = scenes.filter(({scene, title}) => scene && title);
	const areScenesValid = !!validScenes && Array.isArray(validScenes) && !!validScenes.length;
	const isValidCurrentScene =
		!!validScenes[activeTab] &&
		isObject(validScenes[activeTab]) &&
		!!Object.keys(validScenes[activeTab]).length;

	const contentDirection = position === positions.bottom ? 'column-reverse' : 'column';

	const isScrollViewTab = scenes?.length && scenes.length > 3;
	const hasPaddingHorizontal = isScrollViewTab ? {paddingHorizontal: 25} : {};
	const contentMargin = position === positions.bottom ? {marginBottom: 45} : {marginTop: 45};

	const styles = StyleSheet.create({
		wrapper: {
			flex: 1,
			position: 'relative',
			flexDirection: contentDirection,
		},
		wrapperTab: {
			position: 'absolute',
			width: '100%',
			height: scaledForDevice(48, moderateScale),
			flexDirection: 'row',
			backgroundColor: base.white,
			zIndex: 1,
			elevation: scaledForDevice(5, moderateScale),
		},
		tabButton: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			borderBottomWidth: scaledForDevice(2, moderateScale),
		},
		title: {
			...hasPaddingHorizontal,
			textTransform: 'uppercase',
			fontFamily: 'Roboto-Medium',
		},
		content: {
			...contentMargin,
		},
	});

	useEffect(() => {
		if (isScrollViewTab) {
			scrollViewRef?.current?.scrollToIndex({
				index: activeTab,
				animated: true,
			});
		}
	}, [activeTab, isScrollViewTab]);

	const TitleTab: FC<TitleTabProps> = ({title, disabled, index}) => {
		const borderBottomColor = index === activeTab ? primary.main : base.white;
		const textColor = index === activeTab ? primary.main : grey[400];

		const handleOnPress = (idx: number) => setActiveTab(idx);

		return (
			<BaseButton
				key={title + index}
				style={{...styles.tabButton, borderBottomColor}}
				disabled={disabled}
				onPress={() => handleOnPress(index)}>
				<Text
					style={{...styles.title, color: textColor}}
					adjustsFontSizeToFit={true}
					selectable={false}
					numberOfLines={1}>
					{title}
				</Text>
			</BaseButton>
		);
	};

	const renderItem = ({item, index}: any) => (
		<TitleTab title={item.title} disabled={item.disabled} index={index} />
	);

	return (
		<View style={[styles.wrapper, style]} {...props}>
			{!isScrollViewTab && (
				<View style={styles.wrapperTab}>
					{areScenesValid &&
						validScenes.map((scene, idx) => (
							<TitleTab
								key={scene.title}
								title={scene.title}
								disabled={scene.disabled}
								index={idx}
							/>
						))}
				</View>
			)}

			{isScrollViewTab && (
				<FlatList
					style={styles.wrapperTab}
					data={scenes}
					renderItem={renderItem}
					ref={scrollViewRef}
					horizontal
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item, index) => item.title + index}
				/>
			)}

			{isValidCurrentScene && (
				<ScrollView contentContainerStyle={scrollContentStyle} style={styles.content}>
					{validScenes[activeTab].scene}
				</ScrollView>
			)}
		</View>
	);
};

export default Tabs;