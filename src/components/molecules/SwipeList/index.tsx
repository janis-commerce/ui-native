import React, {FC, ReactNode, Ref} from 'react';
import SwipeUp, {SwipeUpProps} from 'atoms/SwipeUp';
import Button, {ButtonProps} from 'molecules/Button';
import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import {SwipeUpScrollView} from 'atoms/SwipeUp/childComponents';
import {StyleSheet, View} from 'react-native';
import {verticalScale} from 'scale';

export interface SwipeListProps
	extends Omit<SwipeUpProps, 'children'>,
		Omit<BottomSheetProps, 'children'> {
	children?: ReactNode;
	ref?: Ref<BottomSheet>;
	renderHeader?: () => ReactNode;
	actions?: ButtonProps[];
}

const styles = StyleSheet.create({
	footerContainer: {
		padding: verticalScale(17),
	},
});

const SwipeList: FC<SwipeListProps> = React.forwardRef(
	({renderHeader = () => null, actions = [], children, ...props}, ref: Ref<BottomSheet>) => {
		if (!children) {
			return null;
		}

		const isRenderHeaderValid = typeof renderHeader === 'function';
		const areThereValidActions = Array.isArray(actions) && actions.length > 0;

		const renderActions = () => {
			if (!areThereValidActions) {
				return null;
			}

			return (
				<View style={styles.footerContainer}>
					{actions?.map((action, idx) => (
						<Button key={idx} {...action} />
					))}
				</View>
			);
		};

		return (
			<SwipeUp ref={ref} footerComponent={renderActions} {...props}>
				{isRenderHeaderValid && renderHeader()}
				<SwipeUpScrollView>{children}</SwipeUpScrollView>
			</SwipeUp>
		);
	}
);

export default SwipeList;
