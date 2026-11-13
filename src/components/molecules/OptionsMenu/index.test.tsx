import React from 'react';
import {create, act, ReactTestRenderer} from 'react-test-renderer';
import {Dimensions, Modal, Pressable, View} from 'react-native';
import Icon from 'atoms/Icon';
import OptionsMenu, {OptionsMenuOption} from './index';
import Option from './components/Option';

const buttonLayout = {x: 300, y: 20, width: 24, height: 24};

type MeasureCallback = (x: number, y: number, width: number, height: number) => void;

const render = (options: OptionsMenuOption[]) => {
	let tree: ReactTestRenderer;
	act(() => {
		tree = create(<OptionsMenu options={options} testID="options-menu" />);
	});
	// RN's jest preset stubs View.measureInWindow with a no-op jest.fn, so createNodeMock never reaches it.
	tree!.root
		.findAllByType(View)[0]
		.instance.measureInWindow.mockImplementation((cb: MeasureCallback) =>
			cb(buttonLayout.x, buttonLayout.y, buttonLayout.width, buttonLayout.height)
		);
	return tree!;
};

const openMenu = (tree: ReactTestRenderer) =>
	act(() => {
		tree.root
			.find((node) => node.type === Pressable && node.props.testID === 'options-menu')
			.props.onPress();
	});

describe('OptionsMenu', () => {
	const edit = {title: 'Editar', onPress: jest.fn()};
	const remove = {title: 'Eliminar', onPress: jest.fn(), disabled: true};

	beforeEach(() => jest.clearAllMocks());

	it('renders nothing when there are no options', () => {
		expect(create(<OptionsMenu options={[]} />).toJSON()).toBeNull();
	});

	it('renders the options icon rotated so it reads vertical', () => {
		const icon = render([edit]).root.findByType(Icon);
		expect(icon.props.name).toBe('options');
		expect(icon.props.style.transform).toEqual([{rotate: '90deg'}]);
	});

	it('starts closed and opens below the button, aligned to its right edge', () => {
		const tree = render([edit]);
		expect(tree.root.findByType(Modal).props.visible).toBe(false);

		openMenu(tree);

		expect(tree.root.findByType(Modal).props.visible).toBe(true);
		const menu = tree.root
			.findByType(Modal)
			.find((node) => node.type === View && Array.isArray(node.props.style));
		expect(menu.props.style[1]).toEqual({
			top: 44,
			right: Dimensions.get('window').width - 324,
		});
	});

	it('keeps touches on the menu itself from reaching the backdrop', () => {
		const tree = render([edit]);
		openMenu(tree);

		const menu = tree.root
			.findByType(Modal)
			.find((node) => node.type === View && Array.isArray(node.props.style));
		expect(menu.props.onStartShouldSetResponder()).toBe(true);
	});

	it('closes and runs the action when an option is chosen', () => {
		const tree = render([edit]);
		openMenu(tree);

		act(() => tree.root.findByType(Option).props.onPress());

		expect(edit.onPress).toHaveBeenCalledTimes(1);
		expect(tree.root.findByType(Modal).props.visible).toBe(false);
	});

	it('closes without running any action when tapping outside', () => {
		const tree = render([edit]);
		openMenu(tree);

		act(() => tree.root.findByType(Modal).findAllByType(Pressable)[0].props.onPress());

		expect(edit.onPress).not.toHaveBeenCalled();
		expect(tree.root.findByType(Modal).props.visible).toBe(false);
	});

	it('closes on the Android back button', () => {
		const tree = render([edit]);
		openMenu(tree);

		act(() => tree.root.findByType(Modal).props.onRequestClose());

		expect(tree.root.findByType(Modal).props.visible).toBe(false);
	});

	it('renders one Option per entry, keeping its disabled state', () => {
		const tree = render([edit, remove]);
		openMenu(tree);

		const rendered = tree.root.findAllByType(Option);
		expect(rendered.map((option) => option.props.title)).toEqual(['Editar', 'Eliminar']);
		expect(rendered[1].props.disabled).toBe(true);
	});
});
