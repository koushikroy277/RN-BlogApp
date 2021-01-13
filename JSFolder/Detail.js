import React from "react";
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function Detail() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.view}>
        <Text>Detail</Text>
      </ScrollView>
    </SafeAreaView>
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
