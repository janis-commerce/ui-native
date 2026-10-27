import React from 'react';
import {create} from 'react-test-renderer';
import {View} from 'react-native';
import Typography from 'atoms/Typography';
import UserInfo from './index';

const defaultProps = {
	greeting: 'Bienvenido,',
	userName: 'Juan Carlos',
};

describe('UserInfo component', () => {
	it('renders the greeting and the user name in their own heading sizes', () => {
		const {root} = create(<UserInfo {...defaultProps} />);
		const [greeting, userName] = root.findAllByType(Typography);
		expect(greeting.props).toMatchObject({type: 'heading', size: 'small', children: 'Bienvenido,'});
		expect(userName.props).toMatchObject({
			type: 'heading',
			size: 'medium',
			children: 'Juan Carlos',
		});
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
