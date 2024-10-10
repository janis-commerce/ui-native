import React from 'react';
import {create} from 'react-test-renderer';
import SwipeList from './';
import Text from 'atoms/Typography';
import SwipeUp from 'atoms/SwipeUp';

describe('SwipeList component', () => {
	describe('does not render', () => {
		it('as it has no children', () => {
			const {toJSON} = create(<SwipeList children={null} />);
			expect(toJSON()).toBeNull();
		});
	});

	describe('renders correctly', () => {
		it('as it does not have actions nor header', () => {
			const {root} = create(
				<SwipeList>
					<Text>Hola</Text>
				</SwipeList>
			);

			// Renders footer component
			const {footerComponent} = root.findByType(SwipeUp).props;
			footerComponent({animatedFooterPosition: 2});

			expect(root).toBeTruthy();
		});

		it('as it has all its possible props', () => {
			const renderHeader = () => <Text>Header</Text>;
			const actions = [{value: 'Continuar'}];

			const {root} = create(
				<SwipeList renderHeader={renderHeader} actions={actions}>
					<Text>Hola</Text>
				</SwipeList>
			);

			// Renders footer component
			const {footerComponent} = root.findByType(SwipeUp).props;
			footerComponent({animatedFooterPosition: 2});

			expect(root).toBeTruthy();
		});
	});
});
