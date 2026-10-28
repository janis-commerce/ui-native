import React, {
	FC,
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from 'react';
import Drawer from 'organisms/Drawer';
import Menu, {MenuProps} from './Menu';

interface MenuContextValue {
	openMenu: () => void;
}

export interface MenuProviderProps extends MenuProps {
	children: ReactNode;
}

const MenuContext = createContext<MenuContextValue | null>(null);

const MenuProvider: FC<MenuProviderProps> = ({children, menuItems, onLogout, ...menuProps}) => {
	const [isOpen, setIsOpen] = useState(false);
	const pendingActionRef = useRef<(() => void) | null>(null);

	const openMenu = useCallback(() => setIsOpen(true), []);
	const contextValue = useMemo(() => ({openMenu}), [openMenu]);

	const closeMenu = () => setIsOpen(false);

	const closeBefore = (action: () => void) => () => {
		pendingActionRef.current = action;
		closeMenu();
	};

	const runPendingAction = () => {
		const pendingAction = pendingActionRef.current;
		pendingActionRef.current = null;
		pendingAction?.();
	};

	const menuItemsClosingFirst = menuItems.map((menuItem) => ({
		...menuItem,
		onPress: closeBefore(menuItem.onPress),
	}));

	return (
		<MenuContext.Provider value={contextValue}>
			{children}
			<Drawer isOpen={isOpen} onClose={closeMenu} onClosed={runPendingAction}>
				<Menu {...menuProps} menuItems={menuItemsClosingFirst} onLogout={closeBefore(onLogout)} />
			</Drawer>
		</MenuContext.Provider>
	);
};

export const useMenu = () => useContext(MenuContext);

export default MenuProvider;
