import React, {FC, Ref} from 'react';
import SwipeUp, {SwipeUpProps} from 'atoms/SwipeUp';
import Button, {ButtonProps} from 'molecules/Button';
import BottomSheet, {
	BottomSheetProps,
	BottomSheetFooter,
	BottomSheetFooterProps,
} from '@gorhom/bottom-sheet';
import {SwipeUpScrollView} from 'atoms/SwipeUp/childComponents';

interface SwipeListProps extends SwipeUpProps, BottomSheetProps {
	renderHeader?: () => void;
	actions?: ButtonProps[];
}

interface CustomFooterProps extends BottomSheetFooterProps {}

const SwipeList: FC<SwipeListProps> = React.forwardRef(
	({renderHeader = () => {}, actions = [], children, ...props}, ref: Ref<BottomSheet>) => {
		if (!children) {
			return null;
		}

		const isRenderHeaderValid = typeof renderHeader === 'function';
		const areThereValidActions = Array.isArray(actions) && actions.length > 0;

		const renderActions = ({animatedFooterPosition}: CustomFooterProps) => {
			if (!areThereValidActions) {
				return null;
			}

			return (
				<BottomSheetFooter animatedFooterPosition={animatedFooterPosition}>
					{actions?.map((action, idx) => (
						<Button key={idx} {...action} />
					))}
				</BottomSheetFooter>
			);
		};

		return (
			<SwipeUp ref={ref} footerComponent={renderActions} enableDynamicSizing {...props}>
				{isRenderHeaderValid && renderHeader()}
				<SwipeUpScrollView enableFooterMarginAdjustment>{children}</SwipeUpScrollView>
			</SwipeUp>
		);
	}
);

export default SwipeList;
