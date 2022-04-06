import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { scale } from '@app/utils';

const Header = () => {
	const navigation = useNavigation<NavigationProp<RootNavigatorParamsList>>();
	return (
		<SafeAreaView style={styles.container}>
			<Image style={styles.logo} source={require('@app/assets/images/InstagramLogo.png')} />
			<View style={styles.iconContainer}>
				<Pressable onPress={() => navigation.navigate('StoryCreator')}>
					<Image style={styles.icon} source={require('@app/assets/icons/CreatePostIcon.png')} />
				</Pressable>
				<Image style={styles.icon} source={require('@app/assets/icons/NotificationsIcon.png')} />
				<Image style={styles.icon} source={require('@app/assets/icons/MessangerIcon.png')} />
			</View>
		</SafeAreaView>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FAFAFA',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: scale(10),
		paddingVertical: scale(8)
	},
	logo: {
		width: scale(105),
		height: scale(28),
		resizeMode: 'contain'
	},
	iconContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	icon: {
		width: scale(24),
		height: scale(22),
		resizeMode: 'contain',
		marginHorizontal: scale(8)
	}
});
