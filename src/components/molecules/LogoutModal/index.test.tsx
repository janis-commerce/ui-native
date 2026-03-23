import React from 'react';
import {create, act} from 'react-test-renderer';
import {Modal, Pressable} from 'react-native';
import LogoutModal from './index';

const defaultProps = {
	visible: true,
	onConfirm: jest.fn(),
	onCancel: jest.fn(),
};

describe('LogoutModal component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders correctly when visible', () => {
		const {toJSON} = create(<LogoutModal {...defaultProps} />);
		expect(toJSON()).toBeTruthy();
	});

	it('renders with custom title and message', () => {
		const {toJSON} = create(
			<LogoutModal {...defaultProps} title="Custom Title" message="Custom message" />
		);
		expect(toJSON()).toBeTruthy();
	});

	it('renders default message with app name', () => {
		const tree = create(<LogoutModal {...defaultProps} appName="Picking" />);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Picking');
	});

	it('renders with custom button labels', () => {
		const tree = create(
			<LogoutModal {...defaultProps} confirmLabel="Salir" cancelLabel="Volver" />
		);
		const json = JSON.stringify(tree.toJSON());
		expect(json).toContain('Salir');
		expect(json).toContain('Volver');
	});

	it('is not visible when visible is false', () => {
		const {root} = create(<LogoutModal {...defaultProps} visible={false} />);
		const modal = root.findByType(Modal);
		expect(modal.props.visible).toBe(false);
	});

	it('calls onCancel when overlay is pressed', () => {
		const {root} = create(<LogoutModal {...defaultProps} />);
		const pressables = root.findAllByType(Pressable);
		act(() => {
			pressables[0].props.onPress();
		});
		expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
	});
});
