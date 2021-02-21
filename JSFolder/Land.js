import React, { useState, useRef } from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableHighlight,
} from "react-native";

import {
  slideImg,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
  travel,
  travel2,
  travel3,
  travel4,
  travel5,
  travel6,
} from "./ImgRender";

import Constants from "expo-constants";

import { StoryRender } from "./StoryRender";
import Post from "./Post";
import Footer from "./Footer";
import ComCarousel from "./ComCarousel";

export default function Land({ navigation }) {
  const [items, setItems] = useState([
    {
      text: "A Mesmerizing Trip to the Heaven of Earth, Switzerland",
      image: slideImg,
      url: "Within",
    },
    {
      text: "Visit the Longest Beach on this planet, Cox's Bazar",
      image: slideImg2,
      url: "Within",
    },
    {
      text: "Experience the Most Adventurous Bungee Jumping in Denmark",
      image: slideImg3,
      url: "Within",
    },
    {
      text: "Feel the limitless sky of Great Franch",
      image: slideImg4,
      url: "Within",
    },
    {
      text: "An adventure to the heaven of Earth, Switzerland",
      image: slideImg5,
      url: "Within",
    },
  ]);

  const [secondItems, setSecondItems] = useState([
    {
      text: "Black Rock Island of Red Sea",
      image: travel5,
      url: "Within",
    },
    {
      text: "Heaven of Garden",
      image: travel2,
      url: "Within",
    },
    {
      text: "Forest with a beam of glimpse",
      image: travel3,
      url: "Within",
    },
    {
      text: "The Dead End of Earth",
      image: travel4,
      url: "Within",
    },
    {
      text: "Peak point of Croatia",
      image: travel,
      url: "Within",
    },
    {
      text: "Yellow Rose of Bosnia",
      image: travel6,
      url: "Within",
    },
  ]);

  function Story() {
    return (
      <View>
        <View>
          {StoryRender.map((data) => {
            const { title, para, imgSrc, id, indi } = data;
            return (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="none"
                key={id}
                onPress={() => navigation.navigate(indi)}
              >
                <View style={styles.secondStory}>
                  <View style={styles.secondary}>
                    <Image style={styles.storyImg} source={imgSrc} />
                    <View style={styles.storyBg}>
                      <Text style={styles.storyText}>{title}</Text>
                      <Text style={styles.storyText2}>{para}</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <StatusBar
            animated={true}
            backgroundColor="#000"
            barStyle="light-content"
          />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.head}>Recommended</Text>
          </View>
          <View style={{ marginLeft: -60 }}>
            <ComCarousel
              caroItems={items}
              styleImage={styles.image}
              styleSlideText={styles.slideText}
              styleSlider={styles.slider}
            />
          </View>
          <View>
            <Text style={styles.head}>Latest</Text>
          </View>
          <View style={{ marginLeft: -60 }}>
            <ComCarousel
              caroItems={secondItems}
              styleImage={styles.secImage}
              styleSlideText={styles.secSlideText}
              styleSlider={styles.secSlider}
            />
          </View>
          <View>
            <Text style={styles.head2}>Trips & Tour</Text>
          </View>
          <Story />
          <View>
            <Text style={styles.head2}>Latest Posts</Text>
          </View>
          <Post />
          <View style={{ height: 200 }} />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  head: {
    fontSize: 35,
    fontWeight: "700",
    marginLeft: 20,
    marginVertical: 15,
    color: "#732716",
  },
  head2: {
    fontSize: 35,
    fontWeight: "700",
    marginLeft: 20,
    marginBottom: 40,
    color: "#732716",
  },
  slideBtn: {
    position: "absolute",
    top: 240,
    bottom: 0,
    left: 25,
  },
  imageContainer: {
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: 250,
    height: 320,
    borderRadius: 15,
  },
  slider: {
    borderRadius: 15,
    height: 325,
    paddingHorizontal: 50,
  },
  slideText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    position: "absolute",
    bottom: 30,
    left: 30,
  },
  secImage: {
    ...StyleSheet.absoluteFillObject,
    width: 240,
    height: 200,
    borderRadius: 15,
  },
  secSlider: {
    borderRadius: 15,
    height: 260,
    paddingHorizontal: 50,
  },
  secSlideText: {
    color: "#732716",
    fontSize: 20,
    fontWeight: "700",
    position: "absolute",
    bottom: 0,
    left: 10,
  },
  secondStory: {
    borderColor: "rgba(0, 0, 0, .2)",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  secondary: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    width: "60%",
  },
  storyImg: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
  },
  storyText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#59253D",
  },
  storyText2: {
    fontSize: 15,
    fontWeight: "700",
    color: "#F25F29",
  },
});
