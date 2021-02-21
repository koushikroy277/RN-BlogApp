import React from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";

export default function ComTab(props) {
  return (
    <View>
      <View style={styles.work}>
        <Text style={styles.date}>{props.comDate}</Text>
        <Text style={styles.workTitle}>{props.comTitle}</Text>
        <Text style={styles.workDes}>{props.comDes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  work: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, .3)",
    paddingBottom: 20,
  },
  date: {
    width: 120,
    backgroundColor: "#732716",
    color: "#fff",
    padding: 15,
    marginVertical: 30,
    fontSize: 16,
  },
  workTitle: {
    marginBottom: 30,
    fontSize: 25,
    fontFamily: "BeVietnam_700Bold",
  },
  workDes: {
    fontFamily: "Alata_400Regular",
    fontSize: 18,
    opacity: 0.5,
  },
});
