import React, {forwardRef} from 'react';
import SwipeUp from 'atoms/SwipeUp';
import {BaseSwipeUpProps} from 'molecules/BaseDetail/types';
import {SwipeUpScrollView} from 'atoms/SwipeUp/childComponents';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

const BaseDetailSwipe = forwardRef<BottomSheet, BaseSwipeUpProps>((props, ref) => {
	const {children, scrollProps = {}, ...rest} = props;

	return (
		<SwipeUp ref={ref} {...rest}>
			<SwipeUpScrollView showsVerticalScrollIndicator={false} {...scrollProps}>
				{children}
			</SwipeUpScrollView>
		</SwipeUp>
	);
});

export default BaseDetailSwipe;
