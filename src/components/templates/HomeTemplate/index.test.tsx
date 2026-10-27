import React from 'react';
import {create, act, ReactTestInstance} from 'react-test-renderer';
import {View, Text, ScrollView, Modal} from 'react-native';
import Avatar from 'molecules/Avatar';
import {MenuProvider} from 'organisms/Menu';
import {ModuleCardSkeleton} from './components/ModuleCard';
import HomeTemplate from './index';

const defaultProps = {
	userName: 'Juan Carlos',
	greeting: 'Bienvenido,',
	sectionTitle: 'Seleccioná un módulo',
	modules: [
		{id: 'picking', icon: 'picking', title: 'Picking', onPress: jest.fn()},
		{id: 'control', icon: 'auditory', title: 'Control', onPress: jest.fn()},
	],
};

const modulesWithDisabled = [
	{id: 'picking', icon: 'picking', title: 'Picking', onPress: jest.fn()},
	{id: 'consolidation', icon: 'round', title: 'Consolidation', onPress: jest.fn(), disabled: true},
];

describe('HomeTemplate component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('opens the menu from the header inside a MenuProvider', () => {
		const tree = create(
			<MenuProvider
				userInfo={{name: 'Juan Carlos', email: 'juan@janis.com'}}
				menuItems={[]}
				onLogout={jest.fn()}
				logoutLabel="Cerrar sesión"
				versionLabel="Versión 1.0.0">
				<HomeTemplate {...defaultProps} testID="home" />
			</MenuProvider>
		);
		act(() => tree.root.findByProps({testID: 'home-header-menu'}).props.onPress());
		expect(tree.root.findByType(Modal).props.visible).toBe(true);
		act(() => {
			tree.unmount();
		});
	});

	it('hides the menu button outside a MenuProvider', () => {
		const {root} = create(<HomeTemplate {...defaultProps} testID="home" />);
		expect(root.findAllByProps({testID: 'home-header-menu'})).toHaveLength(0);
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<HomeTemplate {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('still renders the home when userName is empty', () => {
		const tree = create(<HomeTemplate {...defaultProps} userName="" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking');
	});

	it('returns null when modules is null', () => {
		const {toJSON} = create(<HomeTemplate {...defaultProps} modules={null as any} />);
		expect(toJSON()).toBeNull();
	});

	it('renders all module cards', () => {
		const tree = create(<HomeTemplate {...defaultProps} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking');
		expect(json).toContain('Control');
	});

	it('renders the greeting and the user name it receives', () => {
		const tree = create(
			<HomeTemplate {...defaultProps} greeting="Good morning," userName="Juan" />
		);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Good morning,');
		expect(json).toContain('Juan');
	});

	it('renders with custom section title', () => {
		const tree = create(<HomeTemplate {...defaultProps} sectionTitle="Elige un modulo" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Elige un modulo');
	});

	it('renders with environment chip', () => {
		const tree = create(<HomeTemplate {...defaultProps} environment="qa" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('QA');
	});

	it('renders header extra content', () => {
		const {root} = create(
			<HomeTemplate {...defaultProps} headerExtra={<View testID="shift-chip" />} />
		);
		expect(root.findByProps({testID: 'shift-chip'})).toBeTruthy();
	});

	it('renders footer extra content', () => {
		const tree = create(<HomeTemplate {...defaultProps} footerExtra={<Text>Footer</Text>} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Footer');
	});

	it('renders one skeleton per visible module while loading', () => {
		const tree = create(<HomeTemplate {...defaultProps} loading />);
		expect(tree.root.findAllByType(ModuleCardSkeleton)).toHaveLength(2);
		expect(JSON.stringify(tree.toJSON())).not.toContain('Picking');
		act(() => {
			tree.unmount();
		});
	});

	it('renders the default amount of skeletons on the first load, before the modules arrive', () => {
		const tree = create(<HomeTemplate {...defaultProps} modules={[]} loading />);
		expect(tree.root.findAllByType(ModuleCardSkeleton)).toHaveLength(4);
		act(() => {
			tree.unmount();
		});
	});

	it('keeps the section title outside the scrollable cards', () => {
		const {root} = create(<HomeTemplate {...defaultProps} />);
		const isSectionTitle = (node: ReactTestInstance) =>
			node.props.children === defaultProps.sectionTitle;
		expect(root.findAll(isSectionTitle).length).toBeGreaterThan(0);
		expect(root.findByType(ScrollView).findAll(isSectionTitle)).toHaveLength(0);
	});

	it('passes the client and the selector to the header', () => {
		const {root} = create(
			<HomeTemplate
				{...defaultProps}
				client={{name: 'fizzmodarg', logoUrl: 'https://example.com/logo.png'}}
				selector={{label: 'Belgrano', onPress: jest.fn()}}
				testID="home"
			/>
		);
		expect(root.findByType(Avatar).props.imageUrl).toBe('https://example.com/logo.png');
		expect(root.findByProps({testID: 'home-header-selector'}).props.label).toBe('Belgrano');
	});

	it('renders disabled modules after enabled ones', () => {
		const modules = [...modulesWithDisabled].reverse();
		const tree = create(<HomeTemplate {...defaultProps} modules={modules} />);
		const json = JSON.stringify(tree.toJSON());
		const pickingIdx = json.indexOf('Picking');
		const consolIdx = json.indexOf('Consolidation');
		expect(pickingIdx).toBeLessThan(consolIdx);
	});

	it('renders with appName in environment chip', () => {
		const tree = create(<HomeTemplate {...defaultProps} appName="Picking" environment="beta" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking BETA');
	});
});
