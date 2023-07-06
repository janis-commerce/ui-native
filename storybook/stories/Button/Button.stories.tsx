/* Libraries */
import React from 'react';
import {Text} from 'react-native';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from './Button';
import CenterView from '../../decorators/CenterView';

export default {
	title: 'Button',
	decorators: [
		(Story): JSX.Element => (
			<CenterView>
				<Story />
			</CenterView>
		),
	],
} as ComponentMeta<typeof Button>;

export const WithText: ComponentStory<typeof Button> = ({children, onPress}) => (
	<Button onPress={onPress}>{children}</Button>
);

WithText.args = {
	onPress: action('clicked-with-text'),
	children: <Text>Hola</Text>,
};
WithText.storyName = 'with text';

export const WithSomeEmoji: ComponentStory<typeof Button> = ({onPress, children}) => (
	<Button onPress={onPress}>{children}</Button>
);

WithSomeEmoji.args = {
	onPress: action('clicked-with-some-emoji'),
	children: <Text>😀 😎 👍 💯</Text>,
};
WithSomeEmoji.storyName = 'with some emoji';
