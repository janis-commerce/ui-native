import React, {EffectCallback, DependencyList, JSX, Ref} from 'react';
import {
	BottomSheetFlatList,
	BottomSheetFlatListMethods,
	BottomSheetScrollView,
	BottomSheetScrollViewMethods,
	BottomSheetScrollableProps,
	BottomSheetView,
} from '@gorhom/bottom-sheet';
import {FlatListProps, ScrollViewProps, ViewProps} from 'react-native';

interface BottomSheetFocusProps {
	focusHook?: (effect: EffectCallback, deps?: DependencyList) => void;
}

type SwipeUpFlatListProps<T> = FlatListProps<T> & BottomSheetScrollableProps;
type SwipeUpScrollViewProps = ScrollViewProps & BottomSheetScrollableProps;
type SwipeUpViewProps = ViewProps & BottomSheetFocusProps;

export const SwipeUpFlatList = React.forwardRef(
	<T,>(
		{data, renderItem, ...props}: SwipeUpFlatListProps<T>,
		ref: Ref<BottomSheetFlatListMethods>
	): JSX.Element | null => {
		if (!data || !data.length || !renderItem) {
			return null;
		}

		return <BottomSheetFlatList ref={ref} data={data} renderItem={renderItem} {...props} />;
	}
);

export const SwipeUpScrollView = React.forwardRef(
	(
		{children, ...props}: SwipeUpScrollViewProps,
		ref: Ref<BottomSheetScrollViewMethods>
	): JSX.Element | null => {
		if (!children) {
			return null;
		}

		return (
			<BottomSheetScrollView ref={ref} {...props}>
				{children}
			</BottomSheetScrollView>
		);
	}
);

export const SwipeUpView = ({children, ...props}: SwipeUpViewProps): JSX.Element | null => {
	if (!children) {
		return null;
	}

	return <BottomSheetView {...props}>{children}</BottomSheetView>;
};
