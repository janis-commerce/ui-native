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
		const ModalComp = create(<Modal fullScreen showCloseButton oncloseCallback={mockFn} />);
		const renderedModal = ModalComp.root.findByType(NativeModal);
		renderedModal.props.onRequestClose();

		expect(mockFn).toHaveBeenCalled();
		expect(ModalComp.toJSON()).toBeTruthy();
	});

	describe('should allow access to modal methods', () => {
		it('for open modal', () => {
			const ModalRef = createRef<{
				open: () => void;
				close: () => void;
			}>();

			const {getByTestId} = render(<Modal ref={ModalRef} testID="modal-component" />);

			act(() => {
				ModalRef.current?.open();
			});

			expect(ModalRef.current).toBeDefined();
			expect(getByTestId('modal-component').props.visible).toBe(true);
		});
		it('for close modal', () => {
			const ModalRef = createRef<{
				open: () => void;
				close: () => void;
			}>();

			render(<Modal ref={ModalRef} />);

			act(() => {
				ModalRef.current?.close();
			});

			expect(ModalRef.current).toBeDefined();
		});
	});
});
