import React from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

import { person } from "./ImgRender";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Head() {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={homeStyle}>Detail</Text>
        </View>
      </View>
    </>
  );
}

const homeStyle = {
  color: "#fff",
  fontSize: 25,
};

const tabHeader = ({ navigation, route }) => ({
  headerTitle: () => <Head />,
  headerStyle: {
    backgroundColor: "#380202",
    height: 70,
  },
  headerTitleContainerStyle: { marginLeft: 0 },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default function Detail() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Detail"
          component={DetailProvider}
          options={tabHeader}
        />
      </Stack.Navigator>
    </>
  );
}

function DetailProvider() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <ImageBackground
          source={person}
          resizeMode="cover"
          blurRadius={2}
          style={{ width: "100%", height: 500 }}
        >
          <View style={styles.portBg}>
            <View style={styles.portTitleBg}>
              <Text style={styles.detailBan}>Richard Graverry</Text>
              <Text style={{ fontSize: 20, color: '#fff' }}>
                Designer, Content Manager & Developer
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View>
          <Portfolio />
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailBan: {
    fontSize: 60,
    fontFamily: "Gelasio_600SemiBold_Italic",
    color: '#fff',
  },
  portTitleBg: {
    paddingLeft: 20,
    paddingTop: 100,
  },
});
