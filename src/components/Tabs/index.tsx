/* eslint-disable react-hooks/rules-of-hooks */
import React, {FC, ReactNode, useEffect, useRef} from 'react';
import {StyleSheet, View, ViewStyle, ScrollView} from 'react-native';
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

interface WrapperTabProps {
	children: ReactNode;
	style: ViewStyle;
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
	const scrollPosition = scrollViewRef?.current?.x;

	const validScenes = scenes.filter(({scene, title}) => scene && title);
	const areScenesValid = !!validScenes && Array.isArray(validScenes) && !!validScenes.length;
	const isValidCurrentScene =
		!!validScenes[activeTab] &&
		isObject(validScenes[activeTab]) &&
		!!Object.keys(validScenes[activeTab]).length;

	const contentDirection = position === positions.bottom ? 'column-reverse' : 'column';
	const contentMargin = position === positions.bottom ? {marginBottom: 45} : {marginTop: 45};

	const isScrollViewTab = scenes?.length && scenes.length > 3;
	const hasPaddingHorizontal = isScrollViewTab ? {paddingHorizontal: 25} : {};

	const styles = StyleSheet.create({
		wrapper: {
			flex: 1,
			position: 'relative',
			flexDirection: contentDirection,
		},
		wrapperTab: {
			width: '100%',
			height: scaledForDevice(48, moderateScale),
			position: 'absolute',
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
			flex: 1,
			...contentMargin,
		},
	});

	useEffect(() => {
		scrollViewRef?.current?.scrollTo({x: scrollPosition, animated: false});
	}, [scrollPosition]);

	const WrapperTab: FC<WrapperTabProps> = ({children, ...tabProps}) => {
		const handleScroll = ({nativeEvent}: any) => {
			if (nativeEvent.contentOffset.x !== 0 && !scrollPosition) {
				return (scrollViewRef.current = {
					...scrollViewRef.current,
					x: nativeEvent.contentOffset.x,
				});
			}
		};

		return isScrollViewTab ? (
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				ref={scrollViewRef}
				onScroll={handleScroll}
				scrollEventThrottle={16}
				{...tabProps}>
				{children}
			</ScrollView>
		) : (
			<View {...tabProps}>{children}</View>
		);
	};

	return (
		<View style={[styles.wrapper, style]} {...props}>
			<WrapperTab style={styles.wrapperTab}>
				{areScenesValid &&
					validScenes.map((scene, idx) => {
						const borderBottomColor = idx === activeTab ? primary.main : base.white;
						const textColor = idx === activeTab ? primary.main : grey[400];

						const handleOnPress = (idx: number) => setActiveTab(idx);

						return (
							<BaseButton
								key={scene.title}
								style={{...styles.tabButton, borderBottomColor}}
								disabled={scene.disabled}
								onPress={() => handleOnPress(idx)}>
								<Text
									style={{...styles.title, color: textColor}}
									adjustsFontSizeToFit={true}
									selectable={false}
									numberOfLines={1}>
									{scene.title}
								</Text>
							</BaseButton>
						);
					})}
			</WrapperTab>

			{isValidCurrentScene && (
				<ScrollView contentContainerStyle={scrollContentStyle} style={styles.content}>
					{validScenes[activeTab].scene}
				</ScrollView>
			)}
		</View>
	);
};

export default Tabs;
