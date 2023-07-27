import React from 'react';
import {create} from 'react-test-renderer';
import {Animated, Text, View} from 'react-native';
import Loading from './';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

const validProps = {
	color: 'red',
	isLoading: true,
	duration: 2000,
	children: <Text>Valid Children</Text>,
};
const defaultProps = {
	color: '#2979FF',
	duration: 1000,
	children: null,
};

describe('Loading component', () => {
	describe('render correctly', () => {
		it('when is loading is true', () => {
			const {toJSON} = create(
				<Loading
					color={validProps.color}
					isLoading={validProps.isLoading}
					duration={validProps.duration}
					children={validProps.children}
				/>
			);
			expect(toJSON()).toBeTruthy();
		});

		it('children component when it exist', () => {
			const {root} = create(
				<Loading
					color={validProps.color}
					isLoading={validProps.isLoading}
					duration={validProps.duration}
					children={validProps.children}
				/>
			);
			const TextComponent = root.findByType(Text);
			const {children} = TextComponent.props;

			expect(children).toBe('Valid Children');
		});
	});

	describe('default value of', () => {
		it('color when it is not exist', () => {
			const {root} = create(
				<Loading
					isLoading={validProps.isLoading}
					duration={validProps.duration}
					children={validProps.children}
				/>
			);
			const ViewComponent = root.findByType(Animated.View);
			const {borderBottomColor, borderLeftColor, borderRightColor} = ViewComponent.props.style;

			expect(borderBottomColor).toBe(defaultProps.color);
			expect(borderLeftColor).toBe(defaultProps.color);
			expect(borderRightColor).toBe(defaultProps.color);
		});

		it('duration when it is not exist', () => {
			const {toJSON} = create(
				<Loading isLoading={validProps.isLoading} children={validProps.children} />
			);
			expect(toJSON()).toBeTruthy();
		});

		it('children when it is not exist', () => {
			const {root} = create(<Loading isLoading={validProps.isLoading} />);

			const ViewComponent = root.findByType(View);
			const [, ChildrenText] = ViewComponent.props.children;

			expect(ChildrenText).toBeNull();
		});
	});
	describe('returns null', () => {
		it('when is loading is false', () => {
			const {toJSON} = create(
				<Loading
					isLoading={false}
					color={validProps.color}
					duration={validProps.duration}
					children={validProps.children}
				/>
			);
			expect(toJSON()).not.toBeTruthy();
		});
	});
});
