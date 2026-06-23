import React, {forwardRef, memo, useImperativeHandle, useMemo, useState} from 'react';
import RNDatePicker from 'react-native-date-picker';
import {DatePickerModalProps, DatePickerModalRef} from './types';
import {getSharedProps} from './utils';

const DatePickerModal = memo(
	forwardRef<DatePickerModalRef, DatePickerModalProps>(
		({onConfirm, onCancel, title, confirmText, cancelText, date, ...sharedProps}, ref) => {
			const [isVisible, setIsVisible] = useState(false);
			// Resolved once per `date` reference. Callers should stabilise the `date` prop
			// (e.g. via useState/useMemo) to avoid the fallback regenerating on every render.
			const resolvedDate = useMemo(() => date ?? new Date(), [date]);
			const baseProps = getSharedProps({...sharedProps, date: resolvedDate});

			useImperativeHandle(
				ref,
				() => ({
					open: () => setIsVisible(true),
					close: () => setIsVisible(false),
				}),
				[]
			);

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
	)
);

DatePickerModal.displayName = 'DatePickerModal';

export default DatePickerModal;
