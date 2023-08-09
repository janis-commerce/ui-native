// import React, {useState} from 'react';
// import {StyleSheet, SafeAreaView, View, TouchableHighlight, Text} from 'react-native';
// import LoadingFullScreen from './index';

// const Container = () => {
// 	const [isloading, setisloading] = useState(false);
// 	const Toogle = () => {
// 		setisloading(true);
// 		setTimeout(() => {
// 			setisloading(false);
// 		}, 3000);
// 	};

// 	return (
// 		<SafeAreaView style={styles.ContainerStyles}>
// 			<View style={styles.ContainerStyles}>
// 				<TouchableHighlight style={styles.ButonStyle} onPress={Toogle}>
// 					<Text style={styles.TextStyles}>{isloading ? 'Loading' : 'press'}</Text>
// 				</TouchableHighlight>
// 				<LoadingFullScreen visible={isloading} text="Aguarde mientras procesamos los datos.." />
// 			</View>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	ContainerStyles: {
// 		flex: 1,
// 		// width: 100,
// 		// height: 500,
// 		backgroundColor: 'white',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	ButonStyle: {
// 		width: 200,
// 		height: 50,
// 		backgroundColor: 'red',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	TextStyles: {
// 		color: 'white',
// 		fontSize: 24,
// 	},
// });

// export default Container;
