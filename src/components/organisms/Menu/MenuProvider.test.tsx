import React from 'react';
import {act, create, ReactTestRenderer} from 'react-test-renderer';
import {Animated, Modal, Text} from 'react-native';
import {MenuProvider, useMenu} from './index';

const menuProps = {
	userInfo: {name: 'Juan Carlos', email: 'juan@janis.com'},
	menuItems: [{id: 'settings', icon: 'gear', title: 'Configuración', onPress: jest.fn()}],
	onLogout: jest.fn(),
	logoutLabel: 'Cerrar sesión',
	versionLabel: 'Versión 1.0.0',
	testID: 'menu',
};

let menu: ReturnType<typeof useMenu>;

const Screen = () => {
	menu = useMenu();
	return <Text>Pantalla</Text>;
};

const render = (element: React.ReactElement) => {
	let tree!: ReactTestRenderer;
	act(() => {
		tree = create(element);
	});
	return tree;
};

const renderWithMenu = () =>
	render(
		<MenuProvider {...menuProps}>
			<Screen />
		</MenuProvider>
	);

const isMenuVisible = (tree: ReactTestRenderer) => tree.root.findByType(Modal).props.visible;

describe('MenuProvider', () => {
	let finishLastAnimation: (result: {finished: boolean}) => void;

	beforeEach(() => {
		jest.clearAllMocks();
		jest.spyOn(Animated, 'parallel').mockReturnValue({
			start: (onAnimationEnd: (result: {finished: boolean}) => void) => {
				finishLastAnimation = onAnimationEnd;
			},
			stop: jest.fn(),
		} as any);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('renders the screens it wraps with the menu closed', () => {
		const tree = renderWithMenu();
		expect(JSON.stringify(tree.toJSON())).toContain('Pantalla');
		expect(isMenuVisible(tree)).toBe(false);
	});

	it('gives no menu to the screens outside a provider', () => {
		render(<Screen />);
		expect(menu).toBeNull();
	});

	it('opens the menu from any screen inside the provider', () => {
		const tree = renderWithMenu();
		act(() => menu?.openMenu());
		expect(isMenuVisible(tree)).toBe(true);
	});

	it('keeps the same openMenu while the menu data changes', () => {
		const tree = renderWithMenu();
		const firstOpenMenu = menu?.openMenu;
		act(() => {
			tree.update(
				<MenuProvider {...menuProps} versionLabel="Versión 2.0.0">
					<Screen />
				</MenuProvider>
			);
		});
		expect(menu?.openMenu).toBe(firstOpenMenu);
	});

	it('closes the menu and runs the item action once the close animation ends', () => {
		const tree = renderWithMenu();
		act(() => menu?.openMenu());
		act(() => tree.root.findByProps({title: 'Configuración'}).props.onPress());

		expect(menuProps.menuItems[0].onPress).not.toHaveBeenCalled();
		act(() => finishLastAnimation({finished: true}));
		expect(menuProps.menuItems[0].onPress).toHaveBeenCalledTimes(1);
		expect(isMenuVisible(tree)).toBe(false);
	});

	it('closes the menu and logs out once the close animation ends', () => {
		const tree = renderWithMenu();
		act(() => menu?.openMenu());
		act(() => tree.root.findByProps({testID: 'menu-logout'}).props.onPress());

		expect(menuProps.onLogout).not.toHaveBeenCalled();
		act(() => finishLastAnimation({finished: true}));
		expect(menuProps.onLogout).toHaveBeenCalledTimes(1);
	});

	it('closes without running any action from the back button', () => {
		const tree = renderWithMenu();
		act(() => menu?.openMenu());
		act(() => tree.root.findByType(Modal).props.onRequestClose());
		act(() => finishLastAnimation({finished: true}));

		expect(isMenuVisible(tree)).toBe(false);
		expect(menuProps.onLogout).not.toHaveBeenCalled();
		expect(menuProps.menuItems[0].onPress).not.toHaveBeenCalled();
	});
});
