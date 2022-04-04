import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScreenProps } from '@app/@types/navigation';

const SignInScreen = (props: ScreenProps<RootNavigatorParamsList, 'SignIn'>) => {
	return (
		<View style={styles.container}>
			<Text>SignInScreen</Text>
			<TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
				<Text>Ir al registro</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
				<Text>Ir al main</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
