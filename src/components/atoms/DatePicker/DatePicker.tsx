import React, {FC} from 'react';
import RNDatePicker from 'react-native-date-picker';
import {getSharedProps, DatePickerProps} from './utils';

const DatePicker: FC<DatePickerProps> = ({onDateChange, onStateChange, ...sharedProps}) => {
	const baseProps = getSharedProps(sharedProps);

	return <RNDatePicker {...baseProps} onDateChange={onDateChange} onStateChange={onStateChange} />;
};

export default DatePicker;
