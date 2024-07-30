import React, {FC, Ref} from 'react';
import SwipeUp, {SwipeUpProps} from 'atoms/SwipeUp';
import Button, {ButtonProps} from 'molecules/Button';
import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import {SwipeUpScrollView} from 'atoms/SwipeUp/childComponents';
import {StyleSheet, View} from 'react-native';
import {verticalScale} from 'scale';

interface SwipeListProps extends SwipeUpProps, BottomSheetProps {
	renderHeader?: () => void;
	actions?: ButtonProps[];
}

const styles = StyleSheet.create({
	footerContainer: {
		padding: verticalScale(17),
	},
});

const SwipeList: FC<SwipeListProps> = React.forwardRef(
	({renderHeader = () => {}, actions = [], children, ...props}, ref: Ref<BottomSheet>) => {
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
			<SwipeUp ref={ref} footerComponent={renderActions} enableDynamicSizing {...props}>
				{isRenderHeaderValid && renderHeader()}
				<SwipeUpScrollView>{children}</SwipeUpScrollView>
			</SwipeUp>
		);
	}
);

export default SwipeList;
