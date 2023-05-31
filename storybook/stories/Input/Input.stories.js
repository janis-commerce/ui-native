import {storiesOf} from '@storybook/react-native';
import {text, select} from '@storybook/addon-knobs';
import Input from '../../../src/components/Input';
import CenterView from '../CenterView';
import React from 'react';

storiesOf('Input', module)
	.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
	.add('read only', () => <Input readOnly placeholder={text('placeholder', 'Document')} />)
	.add('editable', () => (
		<Input
			label={text('label', 'First name')}
			placeholder={text('placeholder', 'First name')}
			keyboardType={select(
				'keyboardType',
				['default', 'number-pad', 'decimal-pad', 'numeric', 'email-address', 'phone-pad', 'url'],
				'default'
			)}
		/>
	))
	.add('disabled', () => (
		<Input
			disabled
			placeholder={text('placeholder', 'First name')}
			label={text('label', 'First name')}
		/>
	))
	.add('with an error', () => (
		<Input
			placeholder={text('placeholder', 'First name')}
			label={text('label', 'First name')}
			statusMessage={text('statusMessage', 'Invalid name')}
		/>
	));
