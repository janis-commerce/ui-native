import React from 'react';
import {create} from 'react-test-renderer';
import {StyleSheet, View} from 'react-native';
import Badge from './index';

const badgeStyle = (element: React.ReactElement) =>
	StyleSheet.flatten(
		create(element).root.find((node) => node.type === View && node.props.testID === 'badge').props
			.style
	);

describe('Badge component', () => {
	it('renders the count it receives', () => {
		const tree = create(<Badge count={23} />);
		expect(JSON.stringify(tree.toJSON())).toContain('"23"');
	});

	it('returns null when the count is 0', () => {
		const {toJSON} = create(<Badge count={0} />);
		expect(toJSON()).toBeNull();
	});

	it('returns null when there is no count', () => {
		const {toJSON} = create(<Badge />);
		expect(toJSON()).toBeNull();
	});

	it('keeps a round shape for its size', () => {
		const {borderRadius, height} = badgeStyle(<Badge count={3} testID="badge" />);
		expect(borderRadius).toBe(height / 2);
	});

	it('applies custom style', () => {
		expect(
			badgeStyle(<Badge count={3} style={{marginRight: 8}} testID="badge" />).marginRight
		).toBe(8);
	});
});
