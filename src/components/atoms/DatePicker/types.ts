import {DatePickerProps as RNDatePickerProps} from 'react-native-date-picker';

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
