import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark as faBookmarkSolid, faCogs, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { StatusBar } from 'expo-status-bar';

import SearchPage from '../pages/SearchPage';
import SettingsPage from '../pages/SettingsPage';
import BookmarksPage from '../pages/BookmarksPage';
import UserPage from "../pages/UserPage";
import { Modal } from "react-native";
import PictureModal from "../pages/PictureModal";

const tabBarOptions = {
	showLabel: false,
	 style: {
		 backgroundColor: 'white',
		 shadowColor: 'rgba(52, 52, 52, 100)',
		 shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 1,
		borderRadius: 50,
		 position: 'absolute',
		 left: 50,
		 right: 50,
		 bottom: 30,
		 paddingBottom: 0,
		paddingTop: 0,
		height: 60,
	},
}


const RootStack = createStackNavigator();
const UserStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabScreen() {
  return (
	<Tab.Navigator tabBarOptions={tabBarOptions}>
		<Tab.Screen 
			name="Search" 
			component={MainUserStack} 
			options={{
			tabBarLabel: '',
			tabBarIcon: ({ focused, size }) => (
				<FontAwesomeIcon size={20} color={focused ? 'black' : 'lightgrey'} icon={faSearch} />
			),
		}}/>
		<Tab.Screen 
			name="Bookmarks" 
			component={BookmarksPage} 
			options={{
				tabBarLabel: '',
				tabBarIcon: ({ focused, size }) => (
					<FontAwesomeIcon size={20} color={focused ? 'black' : 'lightgrey'} icon={focused ? faBookmarkSolid : faBookmark } />
				)
			}}	/>
		<Tab.Screen 
			name="Settings" 
			component={SettingsPage} 
			options={{
				tabBarLabel: '',
				tabBarIcon: ({focused, size}) => (
					<FontAwesomeIcon size={20} color={focused ? 'black' : 'lightgrey'} icon={faCogs} />
				)
			}}
		/>
	</Tab.Navigator>
  );
} 

function MainUserStack() {

	return(
		<UserStack.Navigator>
			<UserStack.Screen 
				name="Search" 
				component={SearchPage} 
				options={{ headerShown: false }}
			/>
			<UserStack.Screen 
				name="UserDetails"
				component={UserPage}
				options={{ headerShown: false }}
			/>
		</UserStack.Navigator>
	)
}


export default class AppRouter extends React.Component{


    render(){
        return(
            <NavigationContainer>
				<RootStack.Navigator options={{gestureResponseDistance: { vertical: 1000 }}} mode='modal'>
					<RootStack.Screen
						name="Main"
						component={MainTabScreen}
						options={{ headerShown: false }}
					/>
					<RootStack.Screen
						name="UserModal"
						component={PictureModal}
						options={{ 
							headerShown: false, 
							cardStyle:{
								backgroundColor:"transparent",
								opacity:0.99
							}
						}}
					/>					
				</RootStack.Navigator>
				<StatusBar style="auto" />
			</NavigationContainer>
        )
    }

}