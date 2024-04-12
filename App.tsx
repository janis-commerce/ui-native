import React from 'react';
import {View} from 'react-native';
import Button from './src/components/Button';

const App = () => (
	<View style={{padding: 20}}>
		<Button value='Button normal' icon='box' isLoading={false} onPressIn={() => {console.log('anda mierda')}} />
	</View>
);

export default App;
