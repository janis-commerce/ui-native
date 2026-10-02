import React from 'react';
import {create, act, ReactTestInstance} from 'react-test-renderer';
import {View, Text, ScrollView} from 'react-native';
import {ModuleCardSkeleton} from './components/ModuleCard';
import HomeTemplate from './index';

const defaultProps = {
	userName: 'Juan Carlos',
	greeting: 'Bienvenido,\nJuan Carlos',
	sectionTitle: 'Seleccioná un módulo',
	onMenuPress: jest.fn(),
	modules: [
		{id: 'picking', icon: 'picking', title: 'Picking', onPress: jest.fn()},
		{id: 'control', icon: 'auditory', title: 'Control', onPress: jest.fn()},
	],
};

const modulesWithDisabled = [
	{id: 'picking', icon: 'picking', title: 'Picking', onPress: jest.fn()},
	{id: 'consolidation', icon: 'round', title: 'Consolidation', onPress: jest.fn(), disabled: true},
];

const MockIllustration = () => <View testID="illustration" />;

describe('HomeTemplate component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
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

	it('renders the greeting it receives', () => {
		const tree = create(<HomeTemplate {...defaultProps} greeting="Good morning, Juan" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Good morning, Juan');
	});

	it('renders with custom section title', () => {
		const tree = create(<HomeTemplate {...defaultProps} sectionTitle="Elige un modulo" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Elige un modulo');
	});

	it('renders illustration when provided', () => {
		const {root} = create(<HomeTemplate {...defaultProps} illustration={MockIllustration} />);
		expect(root.findByProps({testID: 'illustration'})).toBeTruthy();
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

	it('hides the toggle while loading', () => {
		const tree = create(
			<HomeTemplate {...defaultProps} modules={modulesWithDisabled} loading testID="home" />
		);
		expect(tree.root.findAllByProps({testID: 'home-toggle-visibility'})).toHaveLength(0);
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

	it('passes the client to the header', () => {
		const tree = create(
			<HomeTemplate {...defaultProps} client={{name: 'Disco Martinez', onPress: jest.fn()}} />
		);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Disco Martinez');
	});

	it('renders disabled modules after enabled ones', () => {
		const modules = [...modulesWithDisabled].reverse();
		const tree = create(<HomeTemplate {...defaultProps} modules={modules} />);
		const json = JSON.stringify(tree.toJSON());
		const pickingIdx = json.indexOf('Picking');
		const consolIdx = json.indexOf('Consolidation');
		expect(pickingIdx).toBeLessThan(consolIdx);
	});

	it('hides disabled modules when toggle is off', () => {
		const tree = create(
			<HomeTemplate {...defaultProps} modules={modulesWithDisabled} initialShowDisabled={false} />
		);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking');
		expect(json).not.toContain('Consolidation');
	});

	it('toggles disabled modules visibility when eye button is pressed', () => {
		const tree = create(
			<HomeTemplate
				{...defaultProps}
				modules={modulesWithDisabled}
				initialShowDisabled={true}
				testID="home"
			/>
		);

		const json1 = JSON.stringify(tree.toJSON());
		expect(json1).toContain('Consolidation');

		const toggleButton = tree.root.findByProps({testID: 'home-toggle-visibility'});
		act(() => {
			toggleButton.props.onPress();
		});

		const json2 = JSON.stringify(tree.toJSON());
		expect(json2).not.toContain('Consolidation');
	});

	it('renders with appName in environment chip', () => {
		const tree = create(<HomeTemplate {...defaultProps} appName="Picking" environment="beta" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking BETA');
	});
});
