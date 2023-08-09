import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';
import LoadingFullScreen from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

describe('LoadingFullScreen component', () => {
	describe('returns null', () => {
		it('when is visible is false', () => {
			const component = create(<LoadingFullScreen visible={false} />);
			const {visible} = component.root.props;
			expect(visible).toBe(false);
		});
	});

	describe('render correct', () => {
		it('render only the loading', () => {
			const {toJSON} = create(<LoadingFullScreen visible />);
			expect(toJSON()).toMatchSnapshot();
		});

		it('renders well the loading next to the passed text', () => {
			const {toJSON} = create(<LoadingFullScreen visible text="Lorem ipsum" />);
			expect(toJSON()).toMatchSnapshot();
		});
	});
});
