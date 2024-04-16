import React from 'react';
import {View} from 'react-native';
import Button, { Color, Type, Variant, IconPosition } from './src/components/Button';

const App = () => (
	<View style={{padding: 20, flexDirection: 'row'}}>
		<Button 
			// value='CANCEL'
			icon='box'
			isLoading={false}
			type={Type.Main}
			variant={Variant.Contained}
			color={Color.Primary}
			// iconPosition={IconPosition.Right}
			disabled={false}
			// style={}
		/>
				<Button 
			value='Button'
			icon='box'
			isLoading={false}
			type={Type.Main}
			variant={Variant.Outlined}
			color={Color.Primary}
			iconPosition={IconPosition.Left}
			disabled={false}
			style={{marginLeft: 6}}
			iconStyle={{color: 'red', fontSize: 30}}
		/>
	</View>
);

export default App;
