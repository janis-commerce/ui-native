import React from 'react';
import {create} from 'react-test-renderer';
import {View, Text} from 'react-native';
import HomeTemplate from './index';

const defaultProps = {
	userName: 'Juan Carlos',
	onMenuPress: jest.fn(),
	modules: [
		{icon: 'picking', title: 'Picking', onPress: jest.fn()},
		{icon: 'auditory', title: 'Control', onPress: jest.fn()},
	],
};

const MockIllustration = () => <View testID="illustration" />;

describe('HomeTemplate component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly with required props', () => {
		const {toJSON} = create(<HomeTemplate {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('returns null when userName is missing', () => {
		const {toJSON} = create(<HomeTemplate {...defaultProps} userName="" />);
		expect(toJSON()).toBeNull();
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

	it('renders with custom section title', () => {
		const tree = create(<HomeTemplate {...defaultProps} sectionTitle="Elige un modulo" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Elige un modulo');
	});

	it('renders illustration when provided', () => {
		const {toJSON} = create(<HomeTemplate {...defaultProps} illustration={MockIllustration} />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders with environment chip', () => {
		const {toJSON} = create(<HomeTemplate {...defaultProps} environment="qa" />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders header extra content', () => {
		const {toJSON} = create(
			<HomeTemplate {...defaultProps} headerExtra={<View testID="shift-chip" />} />
		);
		expect(toJSON()).toBeTruthy();
	});

	it('renders footer extra content', () => {
		const {toJSON} = create(<HomeTemplate {...defaultProps} footerExtra={<Text>Footer</Text>} />);
		expect(toJSON()).toBeTruthy();
	});

	it('passes loading state to module cards', () => {
		const {toJSON} = create(<HomeTemplate {...defaultProps} loading testID="home" />);
		expect(toJSON()).toBeTruthy();
	});

	it('passes topBarLabel to UserHeader', () => {
		const tree = create(<HomeTemplate {...defaultProps} topBarLabel="Disco Martinez" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Disco Martinez');
	});

	it('renders disabled modules after enabled ones', () => {
		const modules = [
			{icon: 'round', title: 'Consolidation', onPress: jest.fn(), disabled: true},
			{icon: 'picking', title: 'Picking', onPress: jest.fn()},
		];
		const tree = create(<HomeTemplate {...defaultProps} modules={modules} />);
		const json = JSON.stringify(tree.toJSON());
		const pickingIdx = json.indexOf('Picking');
		const consolIdx = json.indexOf('Consolidation');
		expect(pickingIdx).toBeLessThan(consolIdx);
	});

	it('hides disabled modules when toggle is off', () => {
		const modules = [
			{icon: 'picking', title: 'Picking', onPress: jest.fn()},
			{icon: 'round', title: 'Consolidation', onPress: jest.fn(), disabled: true},
		];
		const tree = create(
			<HomeTemplate {...defaultProps} modules={modules} initialShowDisabled={false} />
		);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking');
		expect(json).not.toContain('Consolidation');
	});
});
