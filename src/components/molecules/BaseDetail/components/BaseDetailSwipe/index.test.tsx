import React from 'react';
import BaseDetailSwipe from './index';
import {create} from 'react-test-renderer';
import {SwipeUpScrollView} from 'atoms/SwipeUp/childComponents';

describe('BaseDetailSwipe', () => {
	it('should return Scrolleable Swipe with nested children', () => {
		const BaseDetailSwipeComp = create(
			<BaseDetailSwipe componentType="swipe">
				<></>
			</BaseDetailSwipe>
		).root;

		const ScrolleableComp = BaseDetailSwipeComp.findByType(SwipeUpScrollView);

		expect(ScrolleableComp).toBeTruthy();
		expect(BaseDetailSwipeComp).toBeTruthy();
	});
});
