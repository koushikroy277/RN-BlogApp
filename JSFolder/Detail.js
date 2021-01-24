import React from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import { person } from "./ImgRender";

import Portfolio from "./Portfolio";

export default function Detail() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.portBg}>
          <Image style={styles.portImg} source={person} />
          <View style={styles.portTitleBg}>
            <Text style={styles.detailBan}>Richard Graverry</Text>
            <Text style={{ fontSize: 20 }}>
              Designer, Content Manager & Developer
            </Text>
          </View>
        </View>
        <View>
          <Portfolio />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2DCC9",
  },
  detailBan: { 
    fontSize: 60,  
    fontFamily: "Gelasio_600SemiBold_Italic" 
  },
  portBg: {
    height: 600,
  },
  portImg: {
    width: "100%",
    height: "100%",
  },
  portTitleBg: {
    backgroundColor: "rgba(255, 255, 255, .5)",
    justifyContent: "center",
    paddingLeft: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
