import React from 'react';
import {StyleSheet, View} from 'react-native';
import {create} from 'react-test-renderer';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import ActionBar from './index';
import Button from 'molecules/Button';
import {chromePadding, rowGap} from './utils';
import {palette} from 'theme/palette';

const insets = {top: 0, right: 0, bottom: 34, left: 0};

const containerStyle = (root: ReturnType<typeof create>['root']) =>
	StyleSheet.flatten(root.findByType(View).props.style);

describe('ActionBar component', () => {
	describe('returns null', () => {
		it('when there are no actions nor children', () => {
			expect(create(<ActionBar />).toJSON()).toBeNull();
		});

		it('when actions only contains falsy entries', () => {
			expect(create(<ActionBar actions={[false, null, [undefined]]} />).toJSON()).toBeNull();
		});
	});

	describe('config API', () => {
		it('renders one row per entry, where a nested array is a multi-item row', () => {
			const {root} = create(
				<ActionBar actions={[[{value: 'Choose'}, {value: 'Postpone'}], {value: 'Start'}]} />
			);

			expect(root.findAllByType(ActionBar.Row)).toHaveLength(2);
			expect(root.findAllByType(Button)).toHaveLength(3);
		});

		it('uses flex for the item slot and passes the rest of the props to the Button', () => {
			const {root} = create(
				<ActionBar
					actions={[
						[
							{value: 'Call', flex: 0},
							{value: 'Confirm', flex: 2, disabled: true},
						],
					]}
				/>
			);

			const [callItem, confirmItem] = root.findAllByType(ActionBar.Item);
			expect(callItem.props.flex).toBe(0);
			expect(confirmItem.props.flex).toBe(2);

			const [callButton, confirmButton] = root.findAllByType(Button);
			expect(callButton.props.value).toBe('Call');
			expect(callButton.props.flex).toBeUndefined();
			expect(confirmButton.props.disabled).toBe(true);
		});

		it('takes precedence over children', () => {
			const {root} = create(
				<ActionBar actions={[{value: 'Config'}]}>
					<ActionBar.Row>
						<ActionBar.Item>
							<Button value="Composed" />
						</ActionBar.Item>
					</ActionBar.Row>
				</ActionBar>
			);

			const buttons = root.findAllByType(Button);
			expect(buttons).toHaveLength(1);
			expect(buttons[0].props.value).toBe('Config');
		});
	});

	describe('composition API', () => {
		it('renders Row/Item children when no actions are given', () => {
			const {root} = create(
				<ActionBar>
					<ActionBar.Row>
						<ActionBar.Item flex={0}>
							<Button value="Scan" />
						</ActionBar.Item>
						<ActionBar.Item>
							<Button value="Start" />
						</ActionBar.Item>
					</ActionBar.Row>
				</ActionBar>
			);

			expect(root.findAllByType(Button)).toHaveLength(2);
		});
	});

	describe('chrome', () => {
		it('applies rounded padding and gap by default, with white background', () => {
			const {root} = create(<ActionBar actions={[{value: 'A'}]} />);
			const style = containerStyle(root);

			expect(style.padding).toBe(chromePadding('rounded'));
			expect(style.paddingBottom).toBe(chromePadding('rounded'));
			expect(style.gap).toBe(rowGap('rounded'));
			expect(style.backgroundColor).toBe(palette.base.white);
		});

		it('applies no spacing for the flush variant', () => {
			const {root} = create(<ActionBar variant="flush" actions={[{value: 'A'}]} />);
			const style = containerStyle(root);

			expect(style.padding).toBe(0);
			expect(style.paddingBottom).toBe(0);
			expect(style.gap).toBe(0);
		});

		it('supports a custom background color and custom styles', () => {
			const {root} = create(
				<ActionBar actions={[{value: 'A'}]} backgroundColor="#EEE" style={{marginTop: 4}} />
			);
			const style = containerStyle(root);

			expect(style.backgroundColor).toBe('#EEE');
			expect(style.marginTop).toBe(4);
		});
	});

	describe('safe area', () => {
		it('adds the bottom inset to the padding when there is a provider', () => {
			const {root} = create(
				<SafeAreaInsetsContext.Provider value={insets}>
					<ActionBar actions={[{value: 'A'}]} />
				</SafeAreaInsetsContext.Provider>
			);

			expect(containerStyle(root).paddingBottom).toBe(chromePadding('rounded') + insets.bottom);
		});

		it('ignores the inset when withSafeArea is false', () => {
			const {root} = create(
				<SafeAreaInsetsContext.Provider value={insets}>
					<ActionBar withSafeArea={false} actions={[{value: 'A'}]} />
				</SafeAreaInsetsContext.Provider>
			);

			expect(containerStyle(root).paddingBottom).toBe(chromePadding('rounded'));
		});
	});
});

describe('ActionBar.Row component', () => {
	it('returns null without children', () => {
		expect(create(<ActionBar.Row />).toJSON()).toBeNull();
	});

	it('lays out its children in a row with the variant gap', () => {
		const {root} = create(
			<ActionBar.Row>
				<Button value="A" />
			</ActionBar.Row>
		);
		const style = StyleSheet.flatten(root.findByType(View).props.style);

		expect(style.flexDirection).toBe('row');
		expect(style.gap).toBe(rowGap('rounded'));
	});

	it('uses no gap inside a flush ActionBar', () => {
		const {root} = create(
			<ActionBar variant="flush">
				<ActionBar.Row>
					<Button value="A" />
				</ActionBar.Row>
			</ActionBar>
		);
		const rowView = root.findByType(ActionBar.Row).findByType(View);

		expect(StyleSheet.flatten(rowView.props.style).gap).toBe(0);
	});
});

describe('ActionBar.Item component', () => {
	it('returns null without children', () => {
		expect(create(<ActionBar.Item />).toJSON()).toBeNull();
	});

	it('grows with flex 1 by default', () => {
		const {root} = create(
			<ActionBar.Item>
				<Button value="A" />
			</ActionBar.Item>
		);

		expect(StyleSheet.flatten(root.findByType(View).props.style).flex).toBe(1);
	});

	it('keeps the intrinsic width with flex 0', () => {
		const {root} = create(
			<ActionBar.Item flex={0}>
				<Button value="A" />
			</ActionBar.Item>
		);
		const style = StyleSheet.flatten(root.findByType(View).props.style);

		expect(style.flex).toBeUndefined();
		expect(style.flexGrow).toBe(0);
		expect(style.flexShrink).toBe(0);
	});
});
