import React from 'react';
import { API_TOKEN } from '@env';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';
import { ScreenProps } from '@app/@types/navigation';
import { gestureHandlerRootHOC, TextInput } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GiphyContent, GiphyGridView, GiphyMedia, GiphyMediaType, GiphySDK } from '@giphy/react-native-sdk';
import { scale } from '@app/utils';
import Sticker from './auxiliar/Sticker';

GiphySDK.configure({ apiKey: 'vqoRUuKQZTxecNdUTSoime1HDB7mTqQB' });

const { height } = Dimensions.get('window');

interface StoryCreatorScreenProps extends ScreenProps<RootNavigatorParamsList, 'StoryCreator'> {}

const StoryCreatorScreen = gestureHandlerRootHOC((props: StoryCreatorScreenProps) => {
	const modalizeRef = React.useRef<Modalize>(null);
	const [ searchQuery, setSearchQuery ] = React.useState<string>('');
	const [ media, setMedia ] = React.useState<Array<GiphyMedia>>([]);
	const insets = useSafeAreaInsets();

	const onOpen = () => {
		modalizeRef.current?.open();
	};
	const onClose = () => {
		modalizeRef.current?.close();
	};
	return (
		<View style={styles.container}>
			<Image
				style={StyleSheet.absoluteFillObject}
				source={{
					uri:
						'https://images.pexels.com/photos/7148953/pexels-photo-7148953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
				}}
			/>

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

			<Pressable
				style={[
					styles.openButton,
					{
						top: scale(16) + insets.top
					}
				]}
				onPress={onOpen}
			>
				<Image style={styles.openIcon} source={require('@app/assets/icons/StickerIcon.png')} />
			</Pressable>

			{media.map((sticker, i) => (
				<Sticker imageUrl={sticker.data.images.original.url} key={`STICKER__${sticker.id}_${i}`} />
			))}

			<Modalize ref={modalizeRef} modalHeight={height * 0.8} modalStyle={styles.modalize}>
				<View
					style={{
						paddingTop: 14,
						paddingHorizontal: 16
					}}
				>
					<View style={styles.search}>
						<Image source={require('@app/assets/icons/SearchIcon.png')} style={styles.iconSearch} />
						<TextInput
							autoFocus
							placeholder="Search..."
							placeholderTextColor="white"
							style={styles.inputSearch}
							value={searchQuery}
							onChangeText={setSearchQuery}
						/>
					</View>
				</View>
				<GiphyGridView
					cellPadding={3}
					style={styles.gridStickers}
					onMediaSelect={(e) => {
						setMedia([ ...media, e.nativeEvent.media ]);
						onClose();
					}}
					content={
						searchQuery ? (
							GiphyContent.search({
								searchQuery: searchQuery,
								mediaType: GiphyMediaType.Sticker
							})
						) : (
							GiphyContent.trendingStickers()
						)
					}
				/>
			</Modalize>
		</View>
	);
});
{
	/* <Sticker imageUrl="https://images.pexels.com/photos/7148953/pexels-photo-7148953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */
}

export default StoryCreatorScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	goBackButton: {
		position: 'absolute',
		left: 17,
		zIndex: 2
	},
	goBackIcon: {
		resizeMode: 'contain',
		width: scale(20),
		height: scale(20),
		tintColor: 'white'
	},
	openButton: {
		position: 'absolute',
		right: scale(17),
		zIndex: 2
	},
	openIcon: {
		resizeMode: 'contain',
		width: scale(35),
		height: scale(30)
	},
	modalize: {
		backgroundColor: 'trasnparent',
		overflow: 'hidden'
	},
	search: {
		width: '100%',
		flexDirection: 'row',
		backgroundColor: 'rgba(255,255,255,0.75)',
		height: 34,
		borderRadius: 8,
		paddingLeft: 8,
		alignItems: 'center'
	},
	iconSearch: {
		tintColor: 'white',
		width: scale(16),
		height: scale(16),
		marginRight: scale(8)
	},
	inputSearch: {
		color: 'white'
	},
	gridStickers: {
		height: height * 0.8,
		marginTop: 24
	}
});
