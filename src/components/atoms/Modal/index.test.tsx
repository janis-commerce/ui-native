import React, {createRef} from 'react';
import {render} from '@testing-library/react-native';
import {act, create} from 'react-test-renderer';
import Modal from './index';
import {View, Modal as NativeModal} from 'react-native';

describe('Modal component', () => {
	it('render defaulModal', () => {
		const ModalComp = create(
			<Modal>
				<View />
			</Modal>
		);
		const renderedModal = ModalComp.root.findByType(NativeModal);
		renderedModal.props.onRequestClose();

		expect(ModalComp.toJSON()).toBeTruthy();
	});

	it('render full screen modal', () => {
		const mockFn = jest.fn();
		const ModalComp = create(<Modal fullScreen showCloseButton customClose={mockFn} />);
		const renderedModal = ModalComp.root.findByType(NativeModal);
		renderedModal.props.onRequestClose();

		expect(mockFn).toHaveBeenCalled();
		expect(ModalComp.toJSON()).toBeTruthy();
	});

	describe('should allow access to modal methods', () => {
		it('for open modal', () => {
			const ModalRef = createRef<any>();

			render(<Modal ref={ModalRef} />);

			expect(ModalRef.current).toBeDefined();
			act(() => {
				ModalRef.current.openModal();
			});

			expect(ModalRef.current.isOpen).toBe(true);
		});
		it('for close modal', () => {
			const ModalRef = createRef<any>();

			render(<Modal ref={ModalRef} />);

			expect(ModalRef.current).toBeDefined();
			act(() => {
				ModalRef.current.openModal();
				ModalRef.current.closeModal();
			});

			expect(ModalRef.current.isOpen).toBe(false);
		});
	});
});
