import React from 'react';
import CheckBox from './index';
import {create} from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';

describe('CheckBox component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<CheckBox value={false} />);

		expect(toJSON()).toBeTruthy();
	});

	describe('value', () => {
		it('when is true, backgroundColor is #2979FF', () => {
			const {root} = create(<CheckBox value={true} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			const {style} = ViewComponent.props.children.props;

			expect(style.backgroundColor).toBe('#2979FF');
			expect(style.width).toBe(18);
		});

		it('when is false, borderColor is #939598', () => {
			const {root} = create(<CheckBox value={false} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			const {style} = ViewComponent.props.children.props;

			expect(style.borderColor).toBe('#939598');
			expect(style.width).toBe(18);
		});
	});

	describe('disabled', () => {
		it('when is true, opacity is 0.6', () => {
			const {root} = create(<CheckBox value={false} disabled={true} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			const {style} = ViewComponent.props.children.props;

			expect(style.opacity).toBe(0.6);
		});

		it('when is false, opacity is 1', () => {
			const {root} = create(<CheckBox value={false} disabled={false} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			const {style} = ViewComponent.props.children.props;

			expect(style.opacity).toBe(1);
		});
	});

	describe('onValueChange', () => {
		it('when is called', () => {
			const valueChangeFn = jest.fn();

			const {root} = create(<CheckBox value={false} onValueChange={valueChangeFn} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			ViewComponent.props.onPress();

			expect(valueChangeFn).toHaveBeenCalledTimes(1);
			expect(valueChangeFn).toBeCalled();
		});

		it('when is an anonymous function and is called when ViewComponent is pressed', () => {
			const {root} = create(<CheckBox value={false} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			ViewComponent.props.onPress();

			expect(root).toBeTruthy();
		});
	});
});
