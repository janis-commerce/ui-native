/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Button from './src/components/Button';

const App = () => (
	<View style={{padding: 20, flexDirection: 'row'}}>
		<Button
			value="Box Container"
			icon="box"
			type={'main'}
			variant={'outlined'}
			color="warning"
			isLoading={false}
			// iconPosition={'right'}
			disabled={false}
			style={{flex: 1}}
		/>
		<Button
			value="Button with Box Icon"
			icon="box"
			isLoading={false}
			type={'main'}
			variant={'outlined'}
			color={'primary'}
			// iconPosition="right"
			disabled={false}
			style={{flex: 1}}
			// iconStyle={{color: 'red', fontSize: 30}}
		/>
	</View>
);

export default App;
