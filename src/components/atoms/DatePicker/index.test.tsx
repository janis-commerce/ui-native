import React from 'react';
import {create, act, ReactTestRenderer} from 'react-test-renderer';
import RNDatePicker from 'react-native-date-picker';
import DatePicker from './DatePicker';
import DatePickerModal from './DatePickerModal';
import {DatePickerModalRef} from './utils';

const getPickerProps = (renderer: ReactTestRenderer) =>
	renderer.root.findByType(RNDatePicker).props as Record<string, any>;

describe('DatePicker (inline)', () => {
	it('should render correctly with the provided date', () => {
		const date = new Date('2026-06-18T12:00:00Z');
		const renderer = create(<DatePicker date={date} mode="date" onDateChange={jest.fn()} />);

		expect(renderer.toJSON()).toBeTruthy();
		expect(getPickerProps(renderer).date).toBe(date);
	});

	it('should fire onDateChange with the selected date on change', () => {
		const onDateChange = jest.fn();
		const selected = new Date('2026-01-01T00:00:00Z');
		const renderer = create(<DatePicker date={null} onDateChange={onDateChange} />);

		act(() => {
			getPickerProps(renderer).onDateChange(selected);
		});

		expect(onDateChange).toHaveBeenCalledWith(selected);
	});

	it('should default the date to today and not emit when date is null', () => {
		const onDateChange = jest.fn();
		const renderer = create(<DatePicker date={null} onDateChange={onDateChange} />);

		expect(getPickerProps(renderer).date).toBeInstanceOf(Date);
		expect(onDateChange).not.toHaveBeenCalled();
	});
});

describe('DatePickerModal', () => {
	it('should render correctly and start closed', () => {
		const renderer = create(<DatePickerModal date={new Date()} onConfirm={jest.fn()} />);

		expect(renderer.toJSON()).toBeTruthy();
		expect(getPickerProps(renderer).modal).toBe(true);
		expect(getPickerProps(renderer).open).toBe(false);
	});

	it('should open and close the modal imperatively via ref', () => {
		const ref = React.createRef<DatePickerModalRef>();
		const renderer = create(<DatePickerModal ref={ref} date={new Date()} onConfirm={jest.fn()} />);

		act(() => ref.current?.open());
		expect(getPickerProps(renderer).open).toBe(true);

		act(() => ref.current?.close());
		expect(getPickerProps(renderer).open).toBe(false);
	});

	it('should emit the date and close the modal on confirm', () => {
		const onConfirm = jest.fn();
		const selected = new Date('2026-03-10T00:00:00Z');
		const ref = React.createRef<DatePickerModalRef>();
		const renderer = create(<DatePickerModal ref={ref} date={selected} onConfirm={onConfirm} />);

		act(() => ref.current?.open());
		act(() => {
			getPickerProps(renderer).onConfirm(selected);
		});

		expect(onConfirm).toHaveBeenCalledWith(selected);
		expect(getPickerProps(renderer).open).toBe(false);
	});

	it('should fire onCancel and close the modal on cancel', () => {
		const onCancel = jest.fn();
		const ref = React.createRef<DatePickerModalRef>();
		const renderer = create(
			<DatePickerModal ref={ref} date={new Date()} onConfirm={jest.fn()} onCancel={onCancel} />
		);

		act(() => ref.current?.open());
		act(() => {
			getPickerProps(renderer).onCancel();
		});

		expect(onCancel).toHaveBeenCalled();
		expect(getPickerProps(renderer).open).toBe(false);
	});

	it('should close without error on cancel when no onCancel is provided', () => {
		const ref = React.createRef<DatePickerModalRef>();
		const renderer = create(<DatePickerModal ref={ref} date={new Date()} onConfirm={jest.fn()} />);

		act(() => ref.current?.open());
		act(() => {
			getPickerProps(renderer).onCancel();
		});

		expect(getPickerProps(renderer).open).toBe(false);
	});

	it('should emit the current date on confirm when date is null and untouched', () => {
		const onConfirm = jest.fn();
		const ref = React.createRef<DatePickerModalRef>();
		const renderer = create(<DatePickerModal ref={ref} date={null} onConfirm={onConfirm} />);

		act(() => ref.current?.open());
		act(() => {
			getPickerProps(renderer).onConfirm(getPickerProps(renderer).date);
		});

		expect(onConfirm).toHaveBeenCalledTimes(1);
		expect(onConfirm.mock.calls[0][0]).toBeInstanceOf(Date);
	});

	it('should reopen after a native close (state stays in sync)', () => {
		const ref = React.createRef<DatePickerModalRef>();
		const renderer = create(<DatePickerModal ref={ref} date={new Date()} onConfirm={jest.fn()} />);

		act(() => ref.current?.open());
		expect(getPickerProps(renderer).open).toBe(true);

		act(() => {
			getPickerProps(renderer).onCancel();
		});
		expect(getPickerProps(renderer).open).toBe(false);

		act(() => ref.current?.open());
		expect(getPickerProps(renderer).open).toBe(true);
	});
});
