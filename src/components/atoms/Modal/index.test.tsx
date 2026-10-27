import React, {createRef} from 'react';
import {render} from '@testing-library/react-native';
import {act, create} from 'react-test-renderer';
import Modal, {ModalMethods} from './index';
import {View, Modal as NativeModal} from 'react-native';

describe('Modal component', () => {
	it('closes when the native modal requests it', () => {
		const ModalRef = createRef<ModalMethods>();
		const ModalComp = create(
			<Modal ref={ModalRef}>
				<View />
			</Modal>
		);
		const renderedModal = ModalComp.root.findByType(NativeModal);

		act(() => {
			ModalRef.current?.open?.();
		});
		expect(renderedModal.props.visible).toBe(true);

		act(() => {
			renderedModal.props.onRequestClose();
		});
		expect(renderedModal.props.visible).toBe(false);
	});

	it('render full screen modal', () => {
		const mockFn = jest.fn();
		const ModalComp = create(<Modal fullScreen showCloseButton oncloseCallback={mockFn} />);
		const renderedModal = ModalComp.root.findByType(NativeModal);
		renderedModal.props.onRequestClose();

		expect(mockFn).toHaveBeenCalled();
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

			const {queryByTestId} = render(<Modal ref={ModalRef} testID="modal-component" />);

			act(() => {
				ModalRef.current?.close();
			});

			expect(ModalRef.current).toBeDefined();
			expect(queryByTestId('modal-component')).toBeNull();
		});
	});
});
