import React from 'react';
import {create} from 'react-test-renderer';
import {Text} from 'react-native';
import Icon from '../Icon';
import Loading from '../Loading';
import Button from './';

const validData = {
	isLoading: true,
	value: 'Button Test',
	icon: 'box',
};

jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Button component', () => {
	describe('it renders correctly', () => {
		it('when it has valie as minimum prop', () => {
			const {root} = create(<Button value={validData.value} />);
			const TitleComp = root.findByType(Text);
			const {children} = TitleComp.props;

			expect(children).toEqual(validData.value);
		});

		it('when it has icon as minimum prop', () => {
			const {root} = create(<Button icon={validData.icon} />);
			const IconComp = root.findByType(Icon);
			const {name} = IconComp.props;

			expect(name).toEqual(validData.icon);
		});

		it('when isLoading is true, show an loading spinner', () => {
			const {root} = create(<Button icon={validData.icon} isLoading={validData.isLoading} />);
			const LoadingComp = root.findByType(Loading);
			const {isLoading} = LoadingComp.props;

			expect(isLoading).toEqual(validData.isLoading);
		});
	});
});
