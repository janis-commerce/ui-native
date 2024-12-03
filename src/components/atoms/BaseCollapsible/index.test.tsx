import React from 'react';
import BaseCollapsible from './';
import {View} from 'react-native';
import {create} from 'react-test-renderer';
import Accordion from 'react-native-collapsible/Accordion';

describe('BaseCollapsible component', () => {
	const useStateSpy = jest.spyOn(React, 'useState');

	const RendererFunction = <T,>(): React.ReactElement<T> => <View />;
	const onChangeFn = jest.fn();
	const sectionsArray = [1, 2, 3, 4, 5];

	describe('should render correctly', () => {
		it('should render correctly when receive render header and render content', () => {
			const BaseCollapsibleComp = create(
				<BaseCollapsible
					renderHeader={RendererFunction}
					renderContent={RendererFunction}
					activeSections={[]}
					onChange={() => {}}
					onChangeCallback={undefined}
					sections={sectionsArray}
				/>
			);

			expect(BaseCollapsibleComp.toJSON()).toBeTruthy();
		});
	});

	describe('should execute onChangeCallbak', () => {
		it('should execute when onChange is execute and onChangeCallback is passed', () => {
			const mockSetOpenSections = jest.fn();
			useStateSpy.mockReturnValueOnce([false, mockSetOpenSections]);

			const BaseCollapsibleComp = create(
				<BaseCollapsible
					renderHeader={RendererFunction}
					renderContent={RendererFunction}
					activeSections={[0]}
					onChange={() => {}}
					onChangeCallback={onChangeFn}
					sections={sectionsArray}
				/>
			).root;

			const AccordionComp = BaseCollapsibleComp.findByType(Accordion);

			const {onChange} = AccordionComp.props;

			onChange();

			expect(onChangeFn).toHaveBeenCalled();
		});

		it('otherwise, thats not execute', () => {
			const mockSetOpenSections = jest.fn();
			useStateSpy.mockReturnValueOnce([false, mockSetOpenSections]);

			const BaseCollapsibleComp = create(
				<BaseCollapsible
					renderHeader={RendererFunction}
					renderContent={RendererFunction}
					activeSections={[0]}
					onChange={() => {}}
					sections={sectionsArray}
				/>
			).root;

			const AccordionComp = BaseCollapsibleComp.findByType(Accordion);

			const {onChange} = AccordionComp.props;

			onChange();

			expect(onChangeFn).not.toHaveBeenCalled();
		});
	});
});
