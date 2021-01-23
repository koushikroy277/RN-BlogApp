import React from "react";
import {
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function ComEachStory(props) {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.storyPage}>
          <View>
            <Image style={styles.storyImage} source={props.storyImg} />
          </View>
          <View style={styles.storyMainHead}>
            <Text style={styles.storyTitle}>This is a storyPage</Text>
          </View>
        </View>
        <View style={styles.storyDes}>
          <Text style={{fontSize: 18, opacity: .6}}>{props.storyHead}</Text>
        </View>
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storyPage: {
    height: 500,
  },
  storyMainHead: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  storyTitle: {
    position: "absolute",
    bottom: 150,
    left: 0,
    color: "#fff",
    fontSize: 30,
    fontWeight: '700',
    fontFamily: "sans-serif"
  },
  storyDes: {
    height: 500,
    backgroundColor: "#fff",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -100,
    paddingLeft: 20,
    paddingTop: 40,
  },
  storyImage: {
    width: "100%",
    height: "100%",
  },
});
