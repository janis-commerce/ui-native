import React from 'react';
import Collapsible from './index';
import {Pressable, View} from 'react-native';
import {create} from 'react-test-renderer';

const HeaderMock = () => <View />;
const ContentMock = () => <View />;
const mockedFunction = jest.fn();

describe('Collapsible component', () => {
	it('should render correctly when receive expected components', () => {
		const data = [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}];

		const {root: CollapsibleComp, toJSON} = create(
			<Collapsible header={HeaderMock} content={ContentMock} data={data} />
		);

		const PressableComp = CollapsibleComp.findByType(Pressable);
		const {onPress} = PressableComp.props;

		onPress();

		expect(mockedFunction).not.toHaveBeenCalled();
		expect(toJSON()).toBeTruthy();
	});

	it('should execute onPressCallback when onPress event is called', () => {
		const CollapsibleComp = create(
			<Collapsible
				header={HeaderMock}
				content={ContentMock}
				onPressCallback={mockedFunction}
				duration={600}
				pressableComponent={Pressable}
			/>
		).root;

		const PressableComp = CollapsibleComp.findByType(Pressable);
		const [, , , , ViewLayoutWrapper] = CollapsibleComp.findAllByType(View);

		const {onLayout} = ViewLayoutWrapper.props;

		const {onPress} = PressableComp.props;

		const event = {
			nativeEvent: {
				layout: {
					height: 15,
				},
			},
		};
		onLayout(event);
		onPress();

		expect(mockedFunction).toHaveBeenCalled();
	});
});
