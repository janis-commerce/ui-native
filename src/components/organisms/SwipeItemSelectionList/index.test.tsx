import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import SwipeItemSelectionList from './index';
import ItemSelectionButton from 'molecules/ItemSelectionButton';
import {act, fireEvent} from '@testing-library/react-native';

describe('SwipeItemSelectionList component', () => {
	describe('does not render', () => {
		it('as no data is passed', () => {
			const {toJSON} = create(<SwipeItemSelectionList data={[]} />);

			expect(toJSON()).toBeNull();
		});
	});

	describe('renders correctly, select and unselect it', () => {
		it('with checkbox, selects and unselects it', async () => {
			const {toJSON, root} = create(<SwipeItemSelectionList data={[{id: '1', name: '1'}]} />);

			const ItemSelectionButtonComp = root.findByType(ItemSelectionButton);

			await act(async () => fireEvent(ItemSelectionButtonComp, 'onSelection'));
			await act(async () => fireEvent(ItemSelectionButtonComp, 'onSelection'));

			expect(toJSON()).toMatchSnapshot();
		});

		it('with radioButton, selects and unselect it', async () => {
			const {toJSON, root} = create(
				<SwipeItemSelectionList data={[{id: '1', name: '1'}]} multiselect />
			);

			const ItemSelectionButtonComp = root.findByType(ItemSelectionButton);
			await act(async () => fireEvent(ItemSelectionButtonComp, 'onSelection'));
			await act(async () => fireEvent(ItemSelectionButtonComp, 'onSelection'));

			expect(toJSON()).toMatchSnapshot();
		});
	});
});
