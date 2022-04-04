import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

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
		marginTop: 9,
		borderBottomColor: '#C6C6C8',
		borderBottomWidth: 0.5,
		paddingBottom: 8,
		height: 98
	},
	storyContainer: {
		marginHorizontal: 10,
		marginTop: 2,
		position: 'relative',
		alignSelf: 'center'
	},
	gradientContainer: {
		width: 61,
		height: 61,
		borderRadius: 61 / 2,
		position: 'absolute',
		top: -2.4,
		left: -2.4
	},
	image: {
		width: 56,
		height: 56,
		borderRadius: 56 / 2,
		borderWidth: 2,
		marginBottom: 5,
		borderColor: 'white'
	},
	username: {
		fontSize: 12,
		color: '#262626'
	}
});

export default StoriesSlider;
