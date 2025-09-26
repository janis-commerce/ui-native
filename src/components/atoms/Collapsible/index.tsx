import List from 'atoms/List';
import React, {useState} from 'react';
import {StyleSheet, View, LayoutChangeEvent, Pressable, ViewStyle} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';

interface CollapsibleHeaderProps {
	isOpen: boolean;
}

interface CollapsibleContentProps {
	index: number;
	isOpen?: boolean;
}

interface CollapsibleProps<HeaderProps = {}, ContentProps = {}> {
	header: React.ComponentType<HeaderProps>;
	content: React.ComponentType<ContentProps & {index: number}>;
	data?: Record<string, any>[];
	pressableComponent?: React.ComponentType;
	duration?: number;
	onPressCallback?: null | (() => void);
	wrapperStyle?: ViewStyle;
	isDefaultOpen?: boolean;
}

const Collapsible: React.FC<CollapsibleProps<CollapsibleHeaderProps, CollapsibleContentProps>> = ({
	header: Header,
	content: Content,
	data = [],
	onPressCallback = null,
	pressableComponent: PressableComponent = Pressable,
	duration = 500,
	wrapperStyle = {},
	isDefaultOpen = false,
}) => {
	const [isOpen, setIsOpen] = useState(isDefaultOpen);
	const [measuredHeight, setMeasuredHeight] = useState(0);
	const contentHeight = useSharedValue(0);
	const hasHeightBeenMeasured = !!measuredHeight;

	const handleOpen = () => {
		// istanbul ignore next
		if (!isOpen && measuredHeight > 0) {
			contentHeight.value = measuredHeight;
		}
		setIsOpen(!isOpen);

		if (onPressCallback) {
			onPressCallback();
		}
	};

	const handleContentLayout = (e: LayoutChangeEvent): void => {
		// istanbul ignore next
		if (measuredHeight === 0) {
			const newHeight = e.nativeEvent.layout.height;
			setMeasuredHeight(newHeight);
			contentHeight.value = newHeight;
		}
	};

	// istanbul ignore next
	const bodyStyle = useAnimatedStyle(() => ({
		maxHeight: withTiming(isOpen ? contentHeight.value : 0, {duration}),
		overflow: 'hidden',
	}));

	const styles = StyleSheet.create({
		wrapperView: {flex: 1, width: '100%'},
		animatedView: {
			overflow: 'hidden',
			width: '100%',
		},
		contentWrapper: {
			position: 'absolute',
			opacity: 0,
		},
	});

	const renderContent = ({item, index}: {item: any; index: number}) => {
		return <Content {...item} index={index} isOpen={isOpen} />;
	};

	return (
		<View style={[wrapperStyle, styles.wrapperView]}>
			<PressableComponent onPress={handleOpen}>
				<Header isOpen={isOpen} />
			</PressableComponent>
			{!hasHeightBeenMeasured && (
				<View style={styles.contentWrapper} onLayout={handleContentLayout}>
					<List
						data={data}
						renderComponent={renderContent}
						keyExtractor={(_, index) => String(index)}
						showsVerticalScrollIndicator={false}
						nestedScrollEnabled={true}
					/>
				</View>
			)}
			<Animated.View style={[styles.animatedView, bodyStyle]}>
				<List
					data={data}
					renderComponent={renderContent}
					keyExtractor={(_, index) => String(index)}
					showsVerticalScrollIndicator={false}
					nestedScrollEnabled={true}
				/>
			</Animated.View>
		</View>
	);
};

export default Collapsible;
export type {CollapsibleHeaderProps, CollapsibleContentProps};
