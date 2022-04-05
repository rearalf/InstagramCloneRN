import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '@app/screens/SignIn';
import SignUpScreen from '@app/screens/SignUp';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

function RootNavigation() {
	return (
		<Stack.Navigator
			screenOptions={({ route, navigation }) => {
				return {
					headerShown: false
				};
			}}
		>
			<Stack.Screen name="SignIn" component={SignInScreen} />
			<Stack.Screen name="SignUp" component={SignUpScreen} />
			<Stack.Screen name="Main" component={MainNavigator} />
		</Stack.Navigator>
	);
}

export default RootNavigation;
