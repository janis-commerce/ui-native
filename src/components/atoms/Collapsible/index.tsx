import List from 'atoms/List';
import React, {useState} from 'react';
import {StyleSheet, View, LayoutChangeEvent, Pressable, ViewStyle} from 'react-native';
import Animated, {
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

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
	const handleOpen = () => {
		isOpen.value = !isOpen.value;
		setOpen(!isOpen.value);
	};

	const [open, setOpen] = useState(isOpen.value);

	const contentHeight = useSharedValue(0);
	const derivedHeight = useDerivedValue(() =>
		withTiming(contentHeight.value * Number(isOpen.value), {
			duration,
		})
	);

	const bodyStyle = useAnimatedStyle(() => ({
		height: derivedHeight.value,
	}));

	const handleOnPress = () => {
		if (onPressCallback) {
			onPressCallback();
		}
		handleOpen();
	};

	const handleContentLayout = (e: LayoutChangeEvent): void => {
		contentHeight.value = e.nativeEvent.layout.height;
	};

	const styles = StyleSheet.create({
		wrapperView: {
			flex: 1,
			flexDirection: 'column',
			width: '100%',
		},
		animatedView: {
			overflow: 'hidden',
			width: '100%',
		},
		contentView: {
			width: '100%',
			position: 'absolute',
		},
	});

	const renderContent = (contentData: any) => {
		const {item, index} = contentData;

		return <Content {...item} index={index} isOpen={isOpen} />;
	};

	return (
		<View style={[wrapperStyle, styles.wrapperView]}>
			<PressableComponent onPress={handleOnPress}>
				<Header isOpen={open} />
			</PressableComponent>
			<Animated.View style={[styles.animatedView, bodyStyle]}>
				<View onLayout={handleContentLayout} style={styles.contentView}>
					<List
						data={data}
						renderComponent={renderContent}
						keyExtractor={(_, index) => String(index)}
					/>
				</View>
			</Animated.View>
		</View>
	);
};

export default Collapsible;
