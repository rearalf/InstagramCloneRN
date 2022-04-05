import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '@app/@types/navigation';

interface CreatePostScreenProps extends ScreenProps<MainNavigationParamsList, 'CreatePost'> {}

const CreatePostScreen = (porps: CreatePostScreenProps) => {
	return (
		<View style={styles.container}>
			<Text>CreatePostScreen</Text>
		</View>
	);
};

export default CreatePostScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
