import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreatePostScreen = () => {
    return (
        <View style={styles.container}>
            <Text>CreatePostScreen</Text>
        </View>
    )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
        , alignItems: "center"
    }
})