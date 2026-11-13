import React from 'react';
import {act, create} from 'react-test-renderer';
import {PanResponder, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'atoms/Icon';
import Switch from './index';

const render = (element: React.ReactElement) => create(element).root;

const findStyles = (root: ReturnType<typeof render>, match: (style: any) => boolean) =>
	root
		.findAllByType(View)
		.map(({props}) => StyleSheet.flatten(props.style))
		.filter((style) => style && match(style));

const getTrack = (root: ReturnType<typeof render>) =>
	findStyles(root, ({flexDirection}) => flexDirection === 'row')[0];

const findHalos = (root: ReturnType<typeof render>) =>
	findStyles(root, ({position}) => position === 'absolute');

const spyOnSwipe = () => {
	const spy = jest.spyOn(PanResponder, 'create');
	const getConfig = () => spy.mock.calls[0][0] as any;

	return {
		shouldCapture: (dx: number, dy: number) =>
			getConfig().onMoveShouldSetPanResponder({}, {dx, dy}),
		release: (dx: number) => getConfig().onPanResponderRelease({}, {dx}),
	};
};

describe('Switch', () => {
	describe('onChange', () => {
		it('sends true when it is unchecked', () => {
			const onChange = jest.fn();
			const root = render(<Switch checked={false} onChange={onChange} />);

			root.findByType(Pressable).props.onPress();

			expect(onChange).toHaveBeenCalledWith(true);
		});

		it('sends false when it is checked', () => {
			const onChange = jest.fn();
			const root = render(<Switch checked onChange={onChange} />);

			root.findByType(Pressable).props.onPress();

			expect(onChange).toHaveBeenCalledWith(false);
		});

		it('does not fail when onChange is not passed', () => {
			const root = render(<Switch checked />);

			expect(() => root.findByType(Pressable).props.onPress()).not.toThrow();
		});
	});

	it('is announced as a switch with its checked and disabled state', () => {
		const {props} = render(<Switch checked disabled />).findByType(Pressable);

		expect(props.accessibilityRole).toBe('switch');
		expect(props.accessibilityState).toEqual({checked: true, disabled: true});
	});

	it('shows the check_bold icon', () => {
		const root = render(<Switch checked />);

		expect(root.findByType(Icon).props.name).toBe('check_bold');
	});

	it('passes disabled to the pressable so it ignores touches', () => {
		const root = render(<Switch checked disabled />);

		expect(root.findByType(Pressable).props.disabled).toBe(true);
	});

	describe('colors', () => {
		it.each`
			checked  | disabled | color
			${true}  | ${false} | ${'#2979FF'}
			${false} | ${false} | ${'#939598'}
			${true}  | ${true}  | ${'#C4C6CC'}
			${false} | ${true}  | ${'#D5D7DB'}
		`(
			'track and check are $color when checked is $checked and disabled is $disabled',
			({checked, disabled, color}) => {
				const root = render(<Switch checked={checked} disabled={disabled} />);

				expect(getTrack(root).backgroundColor).toBe(color);
				expect(root.findByType(Icon).props.color).toBe(color);
			}
		);
	});

	describe('thumb position', () => {
		it('is at the end when checked', () => {
			const root = render(<Switch checked />);

			expect(getTrack(root).justifyContent).toBe('flex-end');
		});

		it('is at the start when unchecked', () => {
			const root = render(<Switch checked={false} />);

			expect(getTrack(root).justifyContent).toBeUndefined();
		});
	});

	describe('halo', () => {
		it('is not shown when not pressed', () => {
			const root = render(<Switch checked />);

			expect(findHalos(root)).toHaveLength(0);
		});

		it('is shown with the track color at 20% opacity when pressed', () => {
			const root = render(<Switch checked testOnly_pressed />);
			const [halo] = findHalos(root);

			expect(halo.backgroundColor).toBe('#2979FF33');
		});
	});

	describe('swipe', () => {
		afterEach(() => jest.restoreAllMocks());

		it('captures horizontal moves longer than 10', () => {
			const swipe = spyOnSwipe();
			render(<Switch checked={false} />);

			expect(swipe.shouldCapture(11, 0)).toBe(true);
			expect(swipe.shouldCapture(10, 0)).toBe(false);
			expect(swipe.shouldCapture(20, 30)).toBe(false);
		});

		it('does not capture when disabled', () => {
			const swipe = spyOnSwipe();
			render(<Switch checked={false} disabled />);

			expect(swipe.shouldCapture(20, 0)).toBe(false);
		});

		it('sends true when swiped right and false when swiped left', () => {
			const swipe = spyOnSwipe();
			const onChange = jest.fn();
			const renderer = create(<Switch checked={false} onChange={onChange} />);

			swipe.release(20);
			expect(onChange).toHaveBeenLastCalledWith(true);

			act(() => renderer.update(<Switch checked onChange={onChange} />));
			swipe.release(-20);
			expect(onChange).toHaveBeenLastCalledWith(false);
		});

		it('does not send anything when swiped towards the side it is already on', () => {
			const swipe = spyOnSwipe();
			const onChange = jest.fn();
			render(<Switch checked onChange={onChange} />);

			swipe.release(20);

			expect(onChange).not.toHaveBeenCalled();
		});

		it('does not fail when onChange is not passed', () => {
			const swipe = spyOnSwipe();
			render(<Switch checked={false} />);

			expect(() => swipe.release(20)).not.toThrow();
		});
	});
});
