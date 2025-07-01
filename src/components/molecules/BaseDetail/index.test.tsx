import React, {createRef} from 'react';
import {create} from 'react-test-renderer';
import BaseDetail, {BaseDetailMethods} from './index';
import {BaseDetailModal, BaseDetailSwipe} from './components';

describe('BaseDetail', () => {
	it('should return BaseDetailSwipe when componentType is "swipe"', () => {
		const BaseDetailComp = create(<BaseDetail componentType="swipe">{null}</BaseDetail>).root;

		const BaseDetailSwipeComp = BaseDetailComp.findByType(BaseDetailSwipe);

		expect(BaseDetailSwipeComp).toBeTruthy();
	});

	it('should return BaseDetailModal when componentType is "modal"', () => {
		const ModalRef = createRef<BaseDetailMethods>();

		const BaseDetailComp = create(
			<BaseDetail componentType="modal" ref={ModalRef}>
				{null}
			</BaseDetail>
		).root;

		const BaseDetailModalComp = BaseDetailComp.findByType(BaseDetailModal);

		expect(ModalRef.current).toBeTruthy();
		expect(typeof ModalRef.current?.open).toBe('function');
		expect(typeof ModalRef.current?.close).toBe('function');
		expect(BaseDetailModalComp).toBeTruthy();
	});
});
