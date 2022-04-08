import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '@app/screens/SignIn';
import SignUpScreen from '@app/screens/SignUp';
import MainNavigator from './MainNavigator';
import StoryCreatorScreen from '@app/screens/StoryCreator';
import FirebaseAuth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function RootNavigation() {
	const [ initializing, setInitializing ] = React.useState(true);
	const [ user, setUser ] = React.useState<FirebaseAuthTypes.User | null>();
	const handleAuthStateChange = (user: FirebaseAuthTypes.User | null) => {
		setUser(user);
		if (initializing) setInitializing(false);
	};

	React.useEffect(() => {
		const subscriber = FirebaseAuth().onAuthStateChanged(handleAuthStateChange);
		return subscriber;
	}, []);

	return (
		<Stack.Navigator
			screenOptions={({ route, navigation }) => {
				return {
					headerShown: false
				};
			}}
		>
			{!user && (
				<React.Fragment>
					<Stack.Screen name="SignUp" component={SignUpScreen} />
					<Stack.Screen name="SignIn" component={SignInScreen} />
				</React.Fragment>
			)}
			{!!user && (
				<React.Fragment>
					<Stack.Screen name="Main" component={MainNavigator} />
					<Stack.Screen name="StoryCreator" component={StoryCreatorScreen} />
				</React.Fragment>
			)}
		</Stack.Navigator>
	);
}

export default RootNavigation;
