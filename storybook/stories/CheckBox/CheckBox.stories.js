import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {boolean, number, color} from '@storybook/addon-knobs';
import CheckBox from '../../../src/components/CheckBox';
import CenterView from '../CenterView';
import {action} from '@storybook/addon-actions';

storiesOf('CheckBox', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('default props', () => (
		<CheckBox
			checked={boolean('checked', true)}
			onValueChange={action('onValueChange')}
			customSize={number('customSize', 18)}
			checkOnColor={color('checkOnColor', '#2979FF')}
			checkOffColor={color('checkOffColor', '#939598')}
			iconCheckColor={color('iconCheckColor', '#FFF')}
			borderRadius={number('borderRadius', 2)}
			disabled={boolean('disabld', false)}
		/>
	));
