import React, {memo, useMemo} from 'react';
import RNDatePicker from 'react-native-date-picker';
import {DatePickerProps} from './types';
import {getSharedProps} from './utils';

const DatePicker = memo<DatePickerProps>(({onDateChange, onStateChange, date, ...sharedProps}) => {
	// Resolved once per `date` reference. Callers should stabilise the `date` prop
	// (e.g. via useState/useMemo) to avoid the fallback regenerating on every render.
	const resolvedDate = useMemo(() => date ?? new Date(), [date]);
	const baseProps = getSharedProps({...sharedProps, date: resolvedDate});

	return <RNDatePicker {...baseProps} onDateChange={onDateChange} onStateChange={onStateChange} />;
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
