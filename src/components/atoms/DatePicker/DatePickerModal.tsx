import React, {forwardRef, useImperativeHandle, useState} from 'react';
import RNDatePicker from 'react-native-date-picker';
import {getSharedProps, DatePickerModalProps, DatePickerModalRef} from './utils';

const DatePickerModal = forwardRef<DatePickerModalRef, DatePickerModalProps>(
	({onConfirm, onCancel, title, confirmText, cancelText, ...sharedProps}, ref) => {
		const [isVisible, setIsVisible] = useState(false);
		const baseProps = getSharedProps(sharedProps);

		useImperativeHandle(ref, () => ({
			open: () => setIsVisible(true),
			close: () => setIsVisible(false),
		}));

		const handleConfirm = (selectedDate: Date) => {
			setIsVisible(false);
			onConfirm(selectedDate);
		};

		// The library fires onCancel both on the Cancel button and on tap-outside.
		const handleCancel = () => {
			setIsVisible(false);
			onCancel?.();
		};

		return (
			<RNDatePicker
				{...baseProps}
				modal
				open={isVisible}
				onConfirm={handleConfirm}
				onCancel={handleCancel}
				title={title}
				confirmText={confirmText}
				cancelText={cancelText}
			/>
		);
	}
);

export default DatePickerModal;
