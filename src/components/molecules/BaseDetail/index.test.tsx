import React from 'react';
import {create} from 'react-test-renderer';
import BaseDetail from './index';
import {BaseDetailModal, BaseDetailSwipe} from './components';

describe('BaseDetail', () => {
	it('should return BaseDetailSwipe when componentType is "swipe"', () => {
		const BaseDetailComp = create(
			<BaseDetail componentType="swipe">
				<></>
			</BaseDetail>
		).root;

		const BaseDetailSwipeComp = BaseDetailComp.findByType(BaseDetailSwipe);

		expect(BaseDetailSwipeComp).toBeTruthy();
	});

	it('should return BaseDetailModal when componentType is "swipe"', () => {
		const BaseDetailComp = create(
			<BaseDetail componentType="modal">
				<></>
			</BaseDetail>
		).root;

		const BaseDetailModalComp = BaseDetailComp.findByType(BaseDetailModal);

		expect(BaseDetailModalComp).toBeTruthy();
	});
});
