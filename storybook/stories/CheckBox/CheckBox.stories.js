import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {boolean, number, color} from '@storybook/addon-knobs';
import CheckBox from '../../../src/components/CheckBox';
import CenterView from '../CenterView';

storiesOf('CheckBox', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('default props', () => (
		<CheckBox
			value={boolean('value', {OFF: false}, false)}
			customSize={number('customSize', 18)}
			checkOnColor={color('checkOnColor', '#2979FF')}
			checkOffColor={color('checkOffColor', '#939598')}
			iconCheckColor={color('iconCheckColor', '#FFF')}
			disabled={boolean('disabld', {OFF: false}, false)}
		/>
	));
