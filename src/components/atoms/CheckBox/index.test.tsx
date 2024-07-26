import React from 'react';
import CheckBox from './index';
import {create} from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';

describe('CheckBox component', () => {
	it('render correctly', () => {
		const {toJSON} = create(<CheckBox checked={false} />);

		expect(toJSON()).toBeTruthy();
	});

	describe('value', () => {
		it('when is true, backgroundColor is #2979FF', () => {
			const {root} = create(<CheckBox checked={true} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			const {style} = ViewComponent.props.children.props;

			expect(style.backgroundColor).toBe('#2979FF');
		});

		it('when is false, borderColor is #939598', () => {
			const {root} = create(<CheckBox checked={false} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			const {style} = ViewComponent.props.children.props;

			expect(style.borderColor).toBe('#939598');
		});
	});

	describe('disabled', () => {
		it('when is checked is false color is grey[200] (#D5D7DB)', () => {
			const {root} = create(<CheckBox checked={false} disabled={true} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			const {style} = ViewComponent.props.children.props;

			expect(style.borderColor).toBe('#D5D7DB');
		});

		it('when is checked is true color is grey[200] (#D5D7DB)', () => {
			const {root} = create(<CheckBox checked disabled={true} />);
			const ViewComponent = root.findByType(TouchableOpacity);
			const {style} = ViewComponent.props.children.props;

			expect(style.backgroundColor).toBe('#D5D7DB');
		});
	});

	describe('has border radius', () => {
		const borderRadiusMock = 30;

		const {root} = create(<CheckBox checked={false} borderRadius={borderRadiusMock} />);
		const ViewComponent = root.findByType(TouchableOpacity);
		const {borderRadius} = ViewComponent.props.children.props.style;

		expect(borderRadius).toBe(borderRadiusMock);
	});

	describe('hasnt border radius', () => {
		const {root} = create(<CheckBox checked={false} />);
		const ViewComponent = root.findByType(TouchableOpacity);
		const {borderRadius} = ViewComponent.props.children.props.style;

		expect(borderRadius).toBe(4);
	});
});
