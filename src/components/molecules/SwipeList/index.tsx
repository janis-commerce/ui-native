import React, {FC} from 'react';
import SwipeUp, {SwipeUpProps} from 'atoms/SwipeUp';
import Button, {ButtonProps} from 'molecules/Button';
import {BottomSheetFooter, BottomSheetFooterProps} from '@gorhom/bottom-sheet';

interface SwipeListProps extends SwipeUpProps {
	renderHeader?: () => void;
	actions?: ButtonProps[];
}

interface CustomFooterProps extends BottomSheetFooterProps {}

const SwipeList: FC<SwipeListProps> = ({
	renderHeader = () => {},
	actions = [],
	children,
	...props
}) => {
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
				{actions?.map((action) => (
					<Button {...action} />
				))}
			</BottomSheetFooter>
		);
	};

	return (
		<SwipeUp footerComponent={renderActions} {...props}>
			{isRenderHeaderValid && renderHeader()}
			{children}
		</SwipeUp>
	);
};

export default SwipeList;
