import {Platform} from 'react-native';
import {DatePickerProps as RNDatePickerProps} from 'react-native-date-picker';
import {palette} from 'theme/palette';
import {isDevEnv} from 'utils/index';

export type SharedDatePickerProps = Pick<
	RNDatePickerProps,
	| 'mode'
	| 'minimumDate'
	| 'maximumDate'
	| 'locale'
	| 'minuteInterval'
	| 'timeZoneOffsetInMinutes'
	| 'theme'
	| 'dividerColor'
	| 'buttonColor'
> & {
	date?: Date | null;
	testID?: string;
};

export interface DatePickerProps extends SharedDatePickerProps {
	onDateChange: (date: Date) => void;
	onStateChange?: (state: 'spinning' | 'idle') => void;
}

export interface DatePickerModalProps extends SharedDatePickerProps {
	onConfirm: (date: Date) => void;
	onCancel?: () => void;
	title?: string;
	confirmText?: string;
	cancelText?: string;
}

export interface DatePickerModalRef {
	open: () => void;
	close: () => void;
}

export const getSharedProps = ({
	date = null,
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
}: SharedDatePickerProps): RNDatePickerProps => {
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
		date: date ?? new Date(),
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
