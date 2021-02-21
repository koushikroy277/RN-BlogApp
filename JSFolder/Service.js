import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  StatusBar,
  ImageBackground,
} from "react-native";

import { Ionicons, Octicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import Constants from "expo-constants";

import { person8 } from "./ImgRender";
import { ServeRender } from "./ServeRender";
import ServeCarousel from "./ServeCarousel";
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
          <Text style={homeStyle}>Service</Text>
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

export default function Service(){
  return(
    <>
      <Stack.Navigator>
        <Stack.Screen name="Service" component={ServiceProvider} options={tabHeader}/>
      </Stack.Navigator>
    </>
  )
}

function ServiceProvider() {
  return (
    <ScrollView>
      <View style={styles.parent}>
        <ImageBackground
          source={person8}
          resizeMode="cover"
          blurRadius={1}
          style={{ width: "100%", height: 600 }}
        >
          <View style={styles.parentHead}>
            <Text style={[styles.serveHead, { color: '#fff' }]}>
              Providing the best online, strategy & consulting services for
              years
            </Text>
            <Text style={[styles.serveText, { color: '#fff' }]}>
              I am a software developer & online consultant who's been working
              years for availing the best online and technological services for
              the users
            </Text>
            <TouchableHighlight style={styles.serveBtn}>
              <Text style={{ color: '#fff', fontSize: 20, }}>Know More</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
        <View>
          <Text style={styles.serveHead2}>
            Implementing your business idea into a Design
          </Text>
          <View>
            {ServeRender.map((info, index) => {
              const { serveTitle, serveDes, serveColor, serveIcon } = info;
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    margin: 30,
                    padding: 30,
                    height: 400,
                    borderWidth: 1,
                    borderColor: "#a80000",
                    backgroundColor: serveColor,
                  }}
                >
                  <View>
                    <Ionicons name={serveIcon} size={50} color="#333" />
                    <Text style={styles.helpTitle}>{serveTitle}</Text>
                    <Text style={styles.helpDes}>{serveDes}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={styles.serveHead2}>
            See my progress over the last few years
          </Text>
          <View>
            <View style={{ marginHorizontal: 30, marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Software Development
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>78%</Text>
              </View>

              <Progress.Bar
                style={{ marginVertical: 15 }}
                progress={0.7}
                width={300}
                height={10}
                color="#732716"
              />
            </View>
            <View style={{ marginHorizontal: 30, marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Web Design
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>91%</Text>
              </View>

              <Progress.Bar
                style={{ marginVertical: 15 }}
                progress={0.9}
                width={300}
                height={10}
                color="#732716"
              />
            </View>
            <View style={{ marginHorizontal: 30, marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Content Analysis
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>84%</Text>
              </View>

              <Progress.Bar
                style={{ marginVertical: 15 }}
                progress={0.8}
                width={300}
                height={10}
                color="#732716"
              />
            </View>
            <View style={{ marginHorizontal: 30, marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  System Management
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "700" }}>72%</Text>
              </View>

              <Progress.Bar
                style={{ marginVertical: 15 }}
                progress={0.6}
                width={300}
                height={10}
                color="#732716"
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.serveHead}>
            Check out the reviews of other clients
          </Text>
        </View>
        <View>
          <ServeCarousel />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentHead: {
    paddingTop: 80,
  },
  serveBtn: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: '#732716',
    width: 150,
    padding: 20,
  },
  serveHead: {
    fontSize: 30,
    fontFamily: "Livvic_700Bold",
    marginBottom: 20,
    marginLeft: 20,
  },
  serveHead2: {
    fontSize: 25,
    fontFamily: "BeVietnam_700Bold",
    marginVertical: 50,
    marginHorizontal: 20,
  },
  serveText: {
    fontSize: 18,
    fontFamily: "Alata_400Regular",
    marginHorizontal: 20,
  },
  helpTitle: {
    fontSize: 35,
    fontFamily: "serif",
    fontWeight: "700",
    marginVertical: 20,
  },
  helpDes: {
    fontSize: 18,
  },
});
