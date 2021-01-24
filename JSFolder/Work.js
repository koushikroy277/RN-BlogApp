import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Work() {
    return (
        <View style={styles.container}>
            <Text>This is my work</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200
    }
})