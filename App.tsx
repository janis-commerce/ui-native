import React from 'react';
import {Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import BottomDrawer from './src/components/BottomDrawer';
import RadioButton from './src/components/RadioButton'

	const dataItem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

	const renderItem = ({item,index}) => {
		return (
			<RadioButton checkSize='md' checkPosition='left' key={index}>
				<Text>{item}</Text>
			</RadioButton>
		)
	}

const App = () => (
	<GestureHandlerRootView style={{ flex: 1 }}>
		<BottomDrawer 
			typeList='flatList'
			snapPoints={['25%', '50%','75%']}
            index={0}
			data={dataItem}
			renderItem={renderItem}
			children={null}
			containerStyle={{backgroundColor:'rgba(0,0,0,0.5)'}}
			/>
	</GestureHandlerRootView>
);

export default App;
