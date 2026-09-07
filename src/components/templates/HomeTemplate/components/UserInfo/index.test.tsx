import React from 'react';
import {create} from 'react-test-renderer';
import {View} from 'react-native';
import UserInfo from './index';

const defaultProps = {
	greeting: 'Bienvenido,\nJuan Carlos',
};

describe('UserInfo component', () => {
	it('renders the greeting it receives', () => {
		const tree = create(<UserInfo {...defaultProps} />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Juan Carlos');
	});

	it('renders environment chip with appName', () => {
		const tree = create(<UserInfo {...defaultProps} environment="beta" appName="Picking" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking BETA');
	});

	it('does not render environment chip when environment is missing', () => {
		const tree = create(<UserInfo {...defaultProps} testID="user-info" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).not.toContain('user-info-environment');
	});

	it('renders illustration when provided', () => {
		const MockIllustration = () => <View testID="illustration" />;
		const {root} = create(<UserInfo {...defaultProps} illustration={MockIllustration} />);
		expect(root.findByProps({testID: 'illustration'})).toBeTruthy();
	});

	it('renders children when provided', () => {
		const {root} = create(
			<UserInfo {...defaultProps}>
				<View testID="shift-chip" />
			</UserInfo>
		);
		expect(root.findByProps({testID: 'shift-chip'})).toBeTruthy();
	});
});
