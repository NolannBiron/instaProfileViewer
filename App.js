
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import axios  from 'axios';
import AppRouter from './src/router/Router';
import GlobalProvider from './src/provider/GlobalProvider';

export default function App() {

	const [loaded] = useFonts({
		CeraPro: require('./src/fonts/CeraPRO-Regular.ttf'),
		CeraProBold: require('./src/fonts/CeraPRO-Bold.ttf'),
		CeraProMedium: require('./src/fonts/CeraPRO-Medium.ttf'),
	  });
	  
	  if (!loaded) {
		return null;
	  }else{
		return (
				<NativeBaseProvider>
					<GlobalProvider>
						<AppRouter />
					</GlobalProvider>
				</NativeBaseProvider>
		);
	}
}

const styles = StyleSheet.create({
	tabBox :{
		//alignSelf: 'flex-end',
	}
})