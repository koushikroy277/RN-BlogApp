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

import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

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
const Drawer = createDrawerNavigator();

export default function Home({ navigation }) {
  function Head(){
    return
  }

  return (
    <>
      <Stack.Navigator initialRouteName="LandWithin">
        <Stack.Screen
          name="LandWithin"
          component={LandWithin}
          options={({ navigation, route }) => ({
            title: () =><Head/>,
            headerStyle: {
              backgroundColor: "none",
              height: 0,
            },
            headerTitleContainerStyle: { marginLeft: "75%" },
            headerTintColor: "#0d335d",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          })}
        />

        <Stack.Screen
          name="EachStory"
          component={EachStory}
          options={({ navigation, route }) => ({
            title: "Story",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleAlign: "center",
            headerTintColor: "#03265c",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          })}
        />
        <Stack.Screen
          name="EachStory2"
          component={EachStory2}
          options={({ navigation, route }) => ({
            title: "Story",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleAlign: "center",
            headerTintColor: "#03265c",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          })}
        />
        <Stack.Screen
          name="EachStory3"
          component={EachStory3}
          options={({ navigation, route }) => ({
            title: "Story",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleAlign: "center",
            headerTintColor: "#03265c",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          })}
        />
        <Stack.Screen
          name="EachStory4"
          component={EachStory4}
          options={({ navigation, route }) => ({
            title: "Story",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleAlign: "center",
            headerTintColor: "#03265c",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          })}
        />
        <Stack.Screen
          name="EachStory5"
          component={EachStory5}
          options={({ navigation, route }) => ({
            title: "Story",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleAlign: "center",
            headerTintColor: "#03265c",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          })}
        />
        <Stack.Screen
          name="EachStory6"
          component={EachStory6}
          options={({ navigation, route }) => ({
            title: "Story",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleAlign: "center",
            headerTintColor: "#03265c",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          })}
        />
        <Stack.Screen
          name="EachStory7"
          component={EachStory7}
          options={({ navigation, route }) => ({
            title: "Story",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTitleAlign: "center",
            headerTintColor: "#03265c",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
            },
          })}
        />

        <Stack.Screen name="Within" component={Within} />
      </Stack.Navigator>
    </>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{marginTop: 40}}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function LandWithin(props) {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Land"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Land" component={Land} />
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </>
  );
}
