import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from '@app/utils';

interface StoriesSliderProps {}

const STORIES = [
	{
		userName: 'Persona 1',
		avatarUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
	},
	{
		userName: 'Persona 2',
		avatarUrl:
			'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
	},
	{
		userName: 'Persona 3',
		avatarUrl:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
	},
	{
		userName: 'Persona 4',
		avatarUrl:
			'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
	},
	{
		userName: 'Persona 6',
		avatarUrl:
			'https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80'
	},
	{
		userName: 'Persona 5',
		avatarUrl:
			'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
	}
];

const GRADIENT_COLORS = [ '#FBAA47', '#D91A46', '#A60F93' ];

const Story = ({ userName, avatarUrl }: { userName: string; avatarUrl: string }) => {
	return (
		<TouchableOpacity style={styles.storyContainer}>
			<LinearGradient colors={GRADIENT_COLORS} style={styles.gradientContainer} />
			<Image source={{ uri: avatarUrl }} style={styles.image} />
			<Text style={styles.username}>{userName}</Text>
		</TouchableOpacity>
	);
};

const StoriesSlider = (props: StoriesSliderProps) => {
	return (
		<ScrollView bounces={false} horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
			<Story
				userName="Your Story"
				avatarUrl="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
			/>
			{STORIES.map((story, i) => {
				return <Story key={`STORY_${i}`} {...story} />;
			})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: scale(8),
		borderBottomColor: '#C6C6C8',
		borderBottomWidth: scale(0.5),
		paddingBottom: scale(8),
		height: scale(98),
		marginBottom: scale(8)
	},
	storyContainer: {
		marginHorizontal: scale(10),
		marginTop: scale(2),
		position: 'relative',
		alignSelf: 'center'
	},
	gradientContainer: {
		width: scale(61),
		height: scale(61),
		borderRadius: scale(61) / 2,
		position: 'absolute',
		top: scale(-2.4),
		left: scale(-2.4)
	},
	image: {
		width: scale(56),
		height: scale(56),
		borderRadius: scale(56) / 2,
		borderWidth: scale(2),
		marginBottom: scale(5),
		borderColor: 'white'
	},
	username: {
		fontSize: scale(12),
		color: '#262626'
	}
});

export default StoriesSlider;
