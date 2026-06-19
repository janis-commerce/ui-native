import React, {FC} from 'react';
import RNDatePicker from 'react-native-date-picker';
import {getSharedProps, DatePickerProps} from './utils';

const DatePicker: FC<DatePickerProps> = ({onDateChange, ...sharedProps}) => {
	const baseProps = getSharedProps(sharedProps);

	return <RNDatePicker {...baseProps} onDateChange={onDateChange} />;
};

export default DatePicker;
