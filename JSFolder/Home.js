import React from "react";

import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  StyleSheet,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Land from './Land';
import Within from './Within';

const Stack = createStackNavigator();

export default function Home() {
  return (
      <Stack.Navigator initialRouteName="Land">
        <Stack.Screen 
        name="Land" 
        component={Land}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#0d335d',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }} />
        <Stack.Screen name="Within" component={Within}/>
      </Stack.Navigator>
  );
}
