import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableHighlight,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function PostInfo(props) {
  return (
    <>
      <View>
        <View style={styles.post}>
          <Image style={styles.postImage} source={props.postImg} />
          <Text style={styles.postHead}>{props.postTitle}</Text>
          <Text style={styles.postPara}>{props.postPara}</Text>

          {props.postOpen === props.id && props.active && 
            <Text style={{fontSize: 16, opacity: .7, marginBottom: 20}}>{props.postLearn}</Text>
          }

          <TouchableHighlight
            underlayColor="none"
            style={{ marginBottom: 20 }}
            onPress={() => {
              return (
                props.setPostOpen(props.id), props.setActive(!props.active)
              );
            }}
          >
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Text style={{ fontSize: 18 }}>Learn More</Text>
              <Ionicons
                name="chevron-forward-outline"
                style={
                  props.postOpen === props.id && props.active
                    ? styles.postIconDown
                    : styles.postIcon
                }
              />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postImage: {
    width: "100%",
    height: 500,
    borderRadius: 10,
  },
  post: {
    marginHorizontal: 10,
  },
  postHead: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "serif",
    marginVertical: 20,
  },
  postPara: {
    fontSize: 16,
    opacity: 0.6,
    marginBottom: 20,
  },
  postIcon: {
    fontSize: 22,
    marginLeft: 70,
  },
  postIconDown: {
    fontSize: 22,
    marginLeft: 70,
    transform: [{ rotate: "90deg" }],
  },
});
