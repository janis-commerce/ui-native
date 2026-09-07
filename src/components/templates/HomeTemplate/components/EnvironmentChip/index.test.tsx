import React from 'react';
import {create} from 'react-test-renderer';
import EnvironmentChip from './index';

describe('EnvironmentChip component', () => {
	it('returns null when environment is missing', () => {
		const {toJSON} = create(<EnvironmentChip />);
		expect(toJSON()).toBeNull();
	});

	it('renders only the environment when appName is missing', () => {
		const tree = create(<EnvironmentChip environment="qa" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('QA');
	});

	it('renders appName next to the environment', () => {
		const tree = create(<EnvironmentChip environment="beta" appName="Picking" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking BETA');
	});

	it('renders dev environment', () => {
		const tree = create(<EnvironmentChip environment="dev" testID="chip" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('DEV');
	});
});
