import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";

import {Ionicons} from '@expo/vector-icons';

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from "./JSFolder/Home";
import Detail from "./JSFolder/Detail";
import Contact from "./JSFolder/Contact";
import Service from "./JSFolder/Service";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
      initialRouteName='Home'
      barStyle={{ backgroundColor: '#0d335d' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Detail') {
            iconName = focused 
            ? 'person' 
            : 'person';
          } else if (route.name === 'Contact') {
            iconName = focused 
            ? 'call' 
            : 'call';
          } else if (route.name === 'Service') {
            iconName = focused 
            ? 'settings' 
            : 'settings';
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'deepskyblue',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Detail} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Service" component={Service} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    paddingBottom: 20, 
    width: 100, 
    height: 100,
  }
});
