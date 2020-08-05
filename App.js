import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/components/Home/home.js';
import Dashboard from './app/components/Dashboard/dashboard.js'
import SignUp from './app/components/SignUp/SignUp.js'


const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
				<Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
				<Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;