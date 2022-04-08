import React from 'react';
import FirebaseAuth from '@react-native-firebase/auth';
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenProps } from '@app/@types/navigation';
import { scale } from '@app/utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SignInScreen = (props: ScreenProps<RootNavigatorParamsList, 'SignIn'>) => {
	const [ form, setForm ] = React.useState({
		email: '',
		password: ''
	});
	const insets = useSafeAreaInsets();
	const handleSignIn = () =>
		FirebaseAuth()
			.signInWithEmailAndPassword(form.email, form.password)
			.then(() => console.log('Signed in'))
			.catch((error) => console.log(error));
	return (
		<View style={styles.container}>
			<Pressable
				onPress={() => props.navigation.goBack()}
				style={[
					styles.goBackButton,
					{
						top: scale(16) + insets.top + 10
					}
				]}
			>
				<Image source={require('@app/assets/icons/BackIcon.png')} style={styles.goBackIcon} />
			</Pressable>
			<Image source={require('@app/assets/images/InstagramLogo.png')} style={styles.logo} />
			<View style={styles.formSignIn}>
				<TextInput
					autoFocus
					style={styles.input}
					placeholder="Email"
					value={form.email}
					onChangeText={(e) =>
						setForm({
							...form,
							email: e
						})}
				/>
				<TextInput
					autoFocus
					style={[ styles.input, { marginBottom: scale(19) } ]}
					placeholder="password"
					secureTextEntry={true}
					value={form.password}
					onChangeText={(e) =>
						setForm({
							...form,
							password: e
						})}
				/>
				<TouchableOpacity>
					<Text style={styles.link}>Forgot password</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleSignIn} style={styles.button}>
					<Text
						style={{
							color: 'white'
						}}
					>
						Login
					</Text>
				</TouchableOpacity>
				<View
					style={{
						marginTop: scale(41),
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<View style={styles.grayLine} />
					<Text
						style={{
							color: 'rgba(0,0,0,.4)',
							fontWeight: '600',
							fontSize: scale(12),
							marginHorizontal: scale(30)
						}}
					>
						OR
					</Text>
					<View style={styles.grayLine} />
				</View>
				<Text
					style={{
						textAlign: 'center',
						color: 'rgba(0,0,0,.4)',
						marginTop: scale(41)
					}}
				>
					Don't have an account?{' '}
					<Text
						onPress={() => props.navigation.navigate('SignUp')}
						style={{
							color: '#3797EF'
						}}
					>
						Sign up.
					</Text>
				</Text>
			</View>
			<View
				style={{
					position: 'absolute',
					bottom: 0.5,
					width: '100%',
					height: scale(79),
					justifyContent: 'center',
					alignItems: 'center',
					borderTopWidth: scale(0.33),
					borderTopColor: 'rgba(0,0,0,.4)'
				}}
			>
				<Text
					style={{
						color: 'rgba(0,0,0,.4)',
						fontSize: scale(12)
					}}
				>
					Instagram from Facebook
				</Text>
			</View>
		</View>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	goBackButton: {
		position: 'absolute',
		left: scale(16),
		zIndex: 2
	},
	goBackIcon: {
		resizeMode: 'contain',
		width: scale(20),
		height: scale(20)
	},
	logo: {
		width: scale(182),
		height: scale(49),
		resizeMode: 'contain'
	},
	formSignIn: {
		width: '100%',
		paddingHorizontal: scale(16),
		marginTop: scale(39)
	},
	input: {
		width: '100%',
		marginBottom: scale(12),
		backgroundColor: '#FAFAFA',
		paddingVertical: scale(13.5),
		borderRadius: scale(5),
		paddingHorizontal: scale(15),
		borderWidth: 0.5,
		borderColor: 'rgba(0,0,0,.1)'
	},
	link: {
		color: '#3797EF',
		fontWeight: '500',
		textAlign: 'right',
		marginBottom: scale(30)
	},
	button: {
		backgroundColor: '#3797EF',
		height: scale(44),
		borderRadius: scale(5),
		justifyContent: 'center',
		alignItems: 'center'
	},
	grayLine: {
		flex: 1,
		height: 0.8,
		backgroundColor: 'rgba(0,0,0,.2)'
	}
});
