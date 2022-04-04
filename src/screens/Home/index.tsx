import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ScreenProps } from '@app/@types/navigation';
import StoriesSlider from '@app/components/StoriesSlider';
import Post from '@app/components/Post';

interface HomeScreenProps extends ScreenProps<MainNavigationParamsList, 'Home'> {}

const HomeScreen = (props: HomeScreenProps) => {
	return (
		<View style={styles.container}>
			<ScrollView>
				<StoriesSlider />
				<Post />
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white'
	}
});
