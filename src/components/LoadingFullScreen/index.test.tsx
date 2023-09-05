import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import LoadingFullScreen from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

describe('LoadingFullScreen component', () => {
	describe('Modal is not visible', () => {
		it('when is visible is false', () => {
			const component = create(<LoadingFullScreen isLoading={false} />);
			const {isLoading} = component.root.props;
			expect(isLoading).toBe(false);
		});
	});

	describe('render correct', () => {
		it('render only the loading', () => {
			const {toJSON} = create(<LoadingFullScreen isLoading />);
			expect(toJSON()).toMatchSnapshot();
		});

		it('renders well the loading next to the passed text', () => {
			const {toJSON} = create(<LoadingFullScreen isLoading text="Lorem ipsum" />);
			expect(toJSON()).toMatchSnapshot();
		});
	});
});
