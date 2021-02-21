import React from "react";

import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  Image,
  StyleSheet,
} from "react-native";

import * as RootNavigation from "./RootNavigation";

import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

import Land from "./Land";
import Within from "./Within";
import Notification from "./Notification";
import Feed from "./Feed";
import EachStory from "./EachStory";
import EachStory2 from "./EachStory2";
import EachStory3 from "./EachStory3";
import EachStory4 from "./EachStory4";
import EachStory5 from "./EachStory5";
import EachStory6 from "./EachStory6";
import EachStory7 from "./EachStory7";

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
          <Text style={homeStyle}>Home</Text>
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

const pageHeader = ({ navigation, route }) => ({
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

export default function Home({ navigation }) {

  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Land} options={tabHeader} />

        <Stack.Screen
          name="EachStory"
          component={EachStory}
          options={pageHeader}
        />
        <Stack.Screen
          name="EachStory2"
          component={EachStory2}
          options={pageHeader}
        />
        <Stack.Screen
          name="EachStory3"
          component={EachStory3}
          options={pageHeader}
        />
        <Stack.Screen
          name="EachStory4"
          component={EachStory4}
          options={pageHeader}
        />
        <Stack.Screen
          name="EachStory5"
          component={EachStory5}
          options={pageHeader}
        />
        <Stack.Screen
          name="EachStory6"
          component={EachStory6}
          options={pageHeader}
        />
        <Stack.Screen
          name="EachStory7"
          component={EachStory7}
          options={pageHeader}
        />

        <Stack.Screen name="Within" component={Within} />
      </Stack.Navigator>
    </>
  );
}
