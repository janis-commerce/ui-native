import React from 'react';
import BaseDetailModal from './index';
import {create} from 'react-test-renderer';
import {View, Text} from 'react-native';

describe('BaseDetailModal', () => {
	it('should return modal with nested children', () => {
		const BaseDetailModalComp = create(
			<BaseDetailModal componentType="modal">
				<View>
					<Text>Modal component</Text>
				</View>
			</BaseDetailModal>
		).root;

		expect(BaseDetailModalComp).toBeTruthy();
	});
});
