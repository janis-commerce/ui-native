/* eslint-disable react-hooks/rules-of-hooks */
import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, ViewStyle, ScrollView, FlatList} from 'react-native';
import {moderateScale, scaledForDevice, viewportWidth} from 'scale';
import {base, black, grey, primary} from 'theme/palette';
import BaseButton from 'atoms/BaseButton';
import Typography from 'atoms/Typography';
import {isObject} from 'utils';

type Data = Scene[] | null | undefined;

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
	initialTab?: number | null;
	position?: keyPosition;
	onPressTabCb?: (activeTab: number) => void;
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
	initialTab = null,
	position = positions.top,
	onPressTabCb = () => {},
	scrollContentStyle = {},
	style = {},
	...props
}) => {
	if (!scenes || !Array.isArray(scenes) || !scenes.length) {
		return null;
	}

	const [activeTab, setActiveTab] = useState(0);

	const scrollViewRef = useRef<any>(null);

	const validScenes = scenes.filter(({scene, title}) => scene && title);
	const areScenesValid = !!validScenes && Array.isArray(validScenes) && !!validScenes.length;
	const isValidCurrentScene =
		!!validScenes[activeTab] &&
		isObject(validScenes[activeTab]) &&
		!!Object.keys(validScenes[activeTab]).length;

	const contentDirection = position === positions.bottom ? 'column-reverse' : 'column';

	const quantityScenes = scenes?.length;
	const isScrollViewTab = quantityScenes && quantityScenes > 3;
	const calculateTabs = isScrollViewTab ? {width: viewportWidth / 3} : {flex: 1};
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
			...calculateTabs,
			justifyContent: 'center',
			alignItems: 'center',
			borderBottomWidth: scaledForDevice(2, moderateScale),
		},
		title: {
			textTransform: 'uppercase',
			fontFamily: 'Roboto-Medium',
		},
		content: {
			...contentMargin,
		},
	});

	useEffect(() => {
		if (typeof initialTab === 'number') {
			setActiveTab(initialTab);
		}
	}, [initialTab]);

	useEffect(() => {
		if (isScrollViewTab) {
			scrollViewRef?.current?.scrollToIndex({
				index: activeTab,
				animated: true,
			});
		}
	}, [activeTab, isScrollViewTab]);

	const getItemLayout = (data: Data, index: number) => ({
		length: viewportWidth / 3,
		offset: (viewportWidth / 3) * index,
		index,
	});

	const handleScrollToIndexFailed = (info: {
		index: number;
		highestMeasuredFrameIndex: number;
		averageItemLength: number;
	}) => {
		setTimeout(() => {
			scrollViewRef?.current?.scrollToIndex({
				index: info.index,
				animated: true,
			});
		}, 300);
	};

	const TitleTab: FC<TitleTabProps> = ({title, disabled, index}) => {
		const borderBottomColor = index === activeTab ? primary.main : base.white;
		const inactiveText = disabled ? grey[400] : black.main;
		const textColor = index === activeTab ? primary.main : inactiveText;

		const handleOnPress = (idx: number) => {
			setActiveTab(idx);
			return onPressTabCb(idx);
		};

		return (
			<BaseButton
				key={title + index}
				style={{...styles.tabButton, borderBottomColor}}
				disabled={disabled}
				onPress={() => handleOnPress(index)}>
				<Typography
					style={{...styles.title, color: textColor}}
					selectable={false}
					numberOfLines={1}>
					{title}
				</Typography>
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
					getItemLayout={getItemLayout}
					onScrollToIndexFailed={handleScrollToIndexFailed}
					initialNumToRender={quantityScenes}
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
