import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
	PinchGestureHandler,
	PinchGestureHandlerGestureEvent,
	RotationGestureHandler,
	RotationGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface StickerProps {
	imageUrl: string;
}

const Sticker = (porps: StickerProps) => {
	const scale = useSharedValue(1);
	const translation = useSharedValue([ 0, 0 ]);
	const rotation = useSharedValue(0);

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [
			{ scale: scale.value },
			{ translateX: translation.value[0] / scale.value },
			{ translateY: translation.value[1] / scale.value },
			{ rotate: `${rotation.value}rad` }
		]
	}));

	const panHandler = useAnimatedGestureHandler<
		PanGestureHandlerGestureEvent,
		{
			translation: Array<number>;
		}
	>({
		onStart: (_, context) => {
			context.translation = [ translation.value[0], translation.value[1] ];
		},
		onActive: (event, context) => {
			translation.value = [
				event.translationX + context.translation[0],
				event.translationY + context.translation[1]
			];
		}
	});

	const pinchHandler = useAnimatedGestureHandler<
		PinchGestureHandlerGestureEvent,
		{
			scale: number;
		}
	>({
		onStart: (_, context) => {
			context.scale = scale.value;
		},
		onActive: (event, context) => {
			scale.value = event.scale * context.scale;
		}
	});

	const rotationHandler = useAnimatedGestureHandler<
		RotationGestureHandlerGestureEvent,
		{
			rotation: number;
		}
	>({
		onStart: (_, context) => {
			context.rotation = rotation.value;
		},
		onActive: (event, context) => {
			rotation.value = event.rotation + context.rotation;
		}
	});

	return (
		<PanGestureHandler onGestureEvent={panHandler}>
			<Animated.View>
				<PinchGestureHandler onGestureEvent={pinchHandler}>
					<Animated.View>
						<RotationGestureHandler onGestureEvent={rotationHandler}>
							<Animated.View style={[ animatedStyles, styles.animated ]}>
								<Image source={{ uri: porps.imageUrl }} style={styles.image} />
							</Animated.View>
						</RotationGestureHandler>
					</Animated.View>
				</PinchGestureHandler>
			</Animated.View>
		</PanGestureHandler>
	);
};

export default Sticker;

const styles = StyleSheet.create({
	animated: {
		width: 100,
		height: 100
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	}
});
