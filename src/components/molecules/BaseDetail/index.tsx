import React from 'react';
import {forwardRef} from 'react';
import {BaseModalProps, BaseSwipeUpProps} from './types';
import {BaseDetailModal, BaseDetailSwipe} from './components';
import {ModalMethods} from 'atoms/Modal';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

type BaseDetailProps = BaseModalProps | BaseSwipeUpProps;
type BaseDetailMethods = ModalMethods & BottomSheetMethods;

const BaseDetail = forwardRef<BaseDetailMethods, BaseDetailProps>((props, ref) => {
	if (props.componentType === 'swipe') {
		return <BaseDetailSwipe {...props} ref={ref} enablePanDownToClose index={-1} />;
	}

	return <BaseDetailModal {...props} fullScreen componentType="modal" ref={ref} />;
});

export default BaseDetail;
