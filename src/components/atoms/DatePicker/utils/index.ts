import {Platform} from 'react-native';
import {DatePickerProps as RNDatePickerProps} from 'react-native-date-picker';
import {palette} from 'theme/palette';
import {isDevEnv} from 'utils/index';
import {SharedDatePickerProps} from '../types';

export const getSharedProps = ({
	date,
	mode = 'date',
	theme = 'auto',
	minimumDate,
	maximumDate,
	locale,
	minuteInterval,
	timeZoneOffsetInMinutes,
	testID,
	dividerColor,
	buttonColor,
}: Omit<SharedDatePickerProps, 'date'> & {date: Date}): RNDatePickerProps => {
	if (minimumDate && maximumDate && minimumDate > maximumDate && isDevEnv()) {
		console.warn('DatePicker: `minimumDate` is greater than `maximumDate`.');
	}

	// buttonColor and dividerColor are Android-only props.
	const androidTint = Platform.select({
		android: {
			buttonColor: buttonColor ?? palette.primary.main,
			dividerColor: dividerColor ?? palette.grey[300],
		},
		default: {},
	});

	return {
		date,
		mode,
		theme,
		minimumDate,
		maximumDate,
		locale,
		minuteInterval,
		timeZoneOffsetInMinutes,
		testID,
		...androidTint,
	};
};
