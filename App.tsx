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
			variant={Variant.Outlined}
			color={Color.Primary}
			// iconPosition={IconPosition.Right}
			disabled={false}
			style={{width: '100%'}}
		/>
	</View>
);

export default App;
