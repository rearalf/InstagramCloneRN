import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { scale } from '@app/utils';

const POST: Post = {
	user: {
		userName: 'Chardo',
		avatarUrl:
			'https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
		isVerified: true
	},
	media: [
		{
			url:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			type: 'image',
			size: {
				width: 375,
				height: 375
			}
		},
		{
			url:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			type: 'image',
			size: {
				width: 375,
				height: 375
			}
		},
		{
			url:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			type: 'image',
			size: {
				width: 375,
				height: 375
			}
		}
	],
	description: 'The game in Japan was amazing and I want to share some photos',
	place: {
		name: 'Tokyo, Japan'
	}
};

const Post = () => {
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<Image
						style={styles.avatar}
						source={{
							uri: POST.user.avatarUrl
						}}
					/>
					<View style={{ justifyContent: 'center' }}>
						<View style={styles.nameContainer}>
							<Text style={styles.userName}>{POST.user.userName}</Text>
							{POST.user.isVerified && (
								<Image
									style={styles.verifyIcon}
									source={require('@app/assets/icons/OfficialAccountIcon.png')}
								/>
							)}
						</View>
						<Text
							style={{
								fontSize: scale(11)
							}}
						>
							{POST.place.name}
						</Text>
					</View>
				</View>
				<Pressable style={styles.optionsButton}>
					<Image style={styles.optionsIcon} source={require('@app/assets/icons/OptionsIcon.png')} />
				</Pressable>
			</View>
			<ScrollView showsHorizontalScrollIndicator={false} scrollEventThrottle={16} pagingEnabled horizontal>
				{POST.media.map((media, i) => {
					return (
						<Image
							key={`MEDIA_${i}`}
							source={{ uri: media.url }}
							style={{
								width: scale(media.size.width),
								height: scale(media.size.height)
							}}
						/>
					);
				})}
			</ScrollView>
			<View style={{ paddingHorizontal: 15 }}>
				<View style={styles.actionsBar}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							style={{ resizeMode: 'contain', width: scale(24), height: scale(21), marginRight: 17 }}
							source={require('@app/assets/icons/LikeIcon.png')}
						/>
						<Image
							style={{ resizeMode: 'contain', width: scale(22), height: scale(23), marginRight: 17 }}
							source={require('@app/assets/icons/CommentIcon.png')}
						/>
						<Image
							style={{ resizeMode: 'contain', width: scale(21), height: scale(24) }}
							source={require('@app/assets/icons/MessangerIcon.png')}
						/>
					</View>
					<Image
						style={{ resizeMode: 'contain', width: scale(21), height: scale(24) }}
						source={require('@app/assets/icons/SaveIcon.png')}
					/>
				</View>
				<View style={styles.likesContainer}>
					<Image
						style={styles.likeImage}
						source={{
							uri:
								'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
						}}
					/>
					<Text style={{ fontSize: scale(13), color: '#262626' }}>
						Liked by <Text style={{ fontWeight: 'bold' }}>craig_love</Text> and
						<Text style={{ fontWeight: 'bold' }}>44,686 others</Text>
					</Text>
				</View>
				<Text style={styles.description}>
					<Text style={styles.descriptionUsername}>{POST.user.userName} </Text>
					{POST.description}
				</Text>
			</View>
		</View>
	);
};

export default Post;

const styles = StyleSheet.create({
	container: {},
	headerContainer: {
		height: scale(54),
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: scale(10)
	},
	avatar: {
		width: scale(40),
		height: scale(40),
		borderRadius: scale(40) / 2,
		marginRight: 10
	},
	nameContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 1
	},
	userName: {
		fontSize: scale(13),
		letterSpacing: -0.1,
		fontWeight: '600'
	},
	verifyIcon: {
		width: scale(10),
		height: scale(10),
		marginLeft: 5
	},
	optionsButton: {
		height: '100%',
		width: scale(19),
		justifyContent: 'center',
		alignItems: 'center'
	},
	optionsIcon: {
		width: scale(14),
		height: 3,
		resizeMode: 'contain'
	},
	actionsBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 12,
		marginBottom: 11
	},
	likesContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
	likeImage: {
		width: scale(17),
		height: scale(17),
		borderRadius: scale(17) / 2,
		marginRight: scale(6.5)
	},
	description: {
		fontSize: scale(13),
		color: '#262626',
		letterSpacing: scale(-0.07)
	},
	descriptionUsername: { fontWeight: 'bold', letterSpacing: scale(-0.1) }
});
