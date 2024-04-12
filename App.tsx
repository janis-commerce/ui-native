import React from 'react';
import {View} from 'react-native';
import Button, { Color, Type, Variant, IconPosition } from './src/components/Button';

const App = () => (
	<View style={{padding: 20}}>
		<Button 
			value='Button normal'
			icon='box'
			isLoading={false}
			type={Type.Main}
			variant={Variant.Contained}
			color={Color.Success}
			iconPosition={IconPosition.Left}
			disabled={false}
		/>
	</View>
);

export default App;
