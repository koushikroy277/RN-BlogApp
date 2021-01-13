import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Within() {
    return (
      <View style={styles.container}>
        <Text>Welcome to dear Screen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 'auto',
      marginBottom: 'auto',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  });