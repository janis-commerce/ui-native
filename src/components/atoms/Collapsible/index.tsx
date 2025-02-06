import List from 'atoms/List';
import React, {useState} from 'react';
import {StyleSheet, View, LayoutChangeEvent, Pressable, ViewStyle} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';

interface CollapsibleProps<HeaderProps = {}, ContentProps = {}> {
	header: React.ComponentType<HeaderProps>;
	content: React.ComponentType<ContentProps & {index: number}>;
	data?: Record<string, any>[];
	pressableComponent?: React.ComponentType;
	duration?: number;
	onPressCallback?: null | (() => void);
	wrapperStyle?: ViewStyle;
}

const Collapsible: React.FC<CollapsibleProps<{isOpen: boolean}, {isOpen?: boolean}>> = ({
	header: Header,
	content: Content,
	data = [],
	onPressCallback = null,
	pressableComponent: PressableComponent = Pressable,
	duration = 500,
	wrapperStyle = {},
}) => {
	const isOpen = useSharedValue(false);
	const [measuredHeight, setMeasuredHeight] = useState(0);
	const contentHeight = useSharedValue(0);
	const hasHeightBeenMeasured = !!measuredHeight;

	const handleOpen = () => {
		// istanbul ignore next
		if (!isOpen.value && measuredHeight > 0) {
			contentHeight.value = measuredHeight;
		}
		isOpen.value = !isOpen.value;

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
		maxHeight: withTiming(isOpen.value ? contentHeight.value : 0, {duration}),
		overflow: 'hidden',
	}));

	const styles = StyleSheet.create({
		wrapperView: {
			flex: 1,
			width: '100%',
		},
		animatedView: {
			overflow: 'hidden',
			width: '100%',
		},
		contentWrapper: {
			position: 'absolute',
			opacity: 0,
		},
	});

	const renderContent = (contentData: any) => {
		const {item, index} = contentData;
		return <Content {...item} index={index} isOpen={isOpen} />;
	};

	return (
		<View style={[wrapperStyle, styles.wrapperView]}>
			<PressableComponent onPress={handleOpen}>
				<Header isOpen={isOpen.value} />
			</PressableComponent>
			{!hasHeightBeenMeasured && (
				<View style={styles.contentWrapper} onLayout={handleContentLayout}>
					<List
						data={data}
						renderComponent={renderContent}
						keyExtractor={(_, index) => String(index)}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			)}
			<Animated.View style={[styles.animatedView, bodyStyle]}>
				<List
					data={data}
					renderComponent={renderContent}
					keyExtractor={(_, index) => String(index)}
					showsVerticalScrollIndicator={false}
				/>
			</Animated.View>
		</View>
	);
};

export default Collapsible;
