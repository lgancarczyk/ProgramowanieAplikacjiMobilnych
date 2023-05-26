import * as React from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import AllertsScreen from '../screens/AllertsScreen';
import { COLORS } from '../resources/colors';
import TabBarButton from './TabBarButton';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
	return (
		<Tab.Navigator initialRouteName='Home'
			screenOptions={({route}) => ({
				tabBarStyle:{
					backgroundColor:COLORS.Blue
				},
				tabBarButton: props => <TabBarButton {...props} route={route}/>
			})}>
            <Tab.Screen name="Allerts" component={AllertsScreen} />
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Saved" component={SavedScreen} />
		</Tab.Navigator>
	);
}