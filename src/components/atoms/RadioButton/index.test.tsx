import React from 'react';
import {create} from 'react-test-renderer';
import RadioButton from './index';
import Typography from 'atoms/Typography';
import {TouchableOpacity} from 'react-native';

describe('radioButton component', () => {
	it('not rendered when not receive a valid text', () => {
		const {toJSON} = create(<RadioButton children="" />);

		expect(toJSON()).toStrictEqual(null);
	});

	it('should render correctly when receives a valid text as child', () => {
		const {toJSON} = create(<RadioButton checkPosition="right">Example text</RadioButton>);
		expect(toJSON()).toBeTruthy();
	});

	it('should render correctly when receives a valid child', () => {
		const child = <Typography>valid child</Typography>;

		const {toJSON} = create(<RadioButton>{child}</RadioButton>);
		expect(toJSON()).toBeTruthy();
	});

	it('should execute the onPress function when it is received', () => {
		const onPressFunc = jest.fn();

		const {root} = create(<RadioButton onPress={onPressFunc}>Example text</RadioButton>);

		const [pressableText] = root.findAllByType(TouchableOpacity);

		pressableText.props.onPress();

		expect(onPressFunc).toBeCalled();
	});
});
