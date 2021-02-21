import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
} from "react-native";

import Constants from "expo-constants";
import { post3 } from "./ImgRender";
import Footer from "./Footer";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Head() {
  return (
    <>
      <View style={{ marginHorizontal: 20, }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={homeStyle}>Contact</Text>
        </View>
      </View>
    </>
  );
}

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

const homeStyle = {
  color: "#fff",
  fontSize: 25,
};

export default function Contact(){
  return(
    <>
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={ContactProvider}
        options={tabHeader} />
      </Stack.Navigator>
    </>
  )
}

function ContactProvider() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: Constants.statusBarHeight }}
    >
      <View>
        <View style={styles.conForm}>
          <View style={styles.conLine} />
          <Text style={styles.conHead}>Feel enthusiastic to stay in touch</Text>
          <View>
            <TextInput placeholder="Name" style={styles.conInput} />
            <TextInput placeholder="Email" style={styles.conInput} />
            <TextInput placeholder="Address" style={styles.conInput} />
            <TextInput placeholder="Phone number" style={styles.conInput} />
            <TextInput
              placeholder="Message"
              style={[styles.conInput, { height: 200 }]}
            />
            <TouchableHighlight
              onPress={null}
              style={{ alignItems: "center", marginTop: 50 }}
            >
              <Text style={styles.conBtn}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conHead: {
    fontSize: 30,
    fontFamily: "BeVietnam_700Bold",
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  conLine: {
    width: 100,
    height: 4,
    backgroundColor: "#732716",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  conForm: {
    backgroundColor: "#f5edee",
    marginHorizontal: 10,
    marginVertical: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  conInput: {
    padding: 15,
    backgroundColor: "#f5ffff",
    margin: 10,
  },
  conBtn: {
    width: 200,
    fontWeight: "700",
    fontSize: 25,
    color: "#fff",
    backgroundColor: "#732716",
    padding: 15,
    textAlign: "center",
    marginBottom: 50,
  },
});
