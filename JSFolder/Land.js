import React, { useState, useRef } from "react";

import {
  SafeAreaView,
  ScrollView,
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

import {
  slideImg,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
} from "./ImgRender";

import { Ionicons } from "@expo/vector-icons";
import { appModel } from "./ImgRender";

import { StoryRender } from "./StoryRender";
import Post from "./Post";

export default function Land({ navigation }) {
  const SLIDER_WIDTH = Dimensions.get("window").width + 130;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.53);

  const isCarousel = useRef(null);
  const [indexNo, setIndexNo] = useState(0);
  const [items, setItems] = useState([
    {
      text: "Trip to Switzerland",
      image: slideImg,
      url: "Within",
    },
    {
      text: "Trip to Switzerland",
      image: slideImg2,
      url: "Within",
    },
    {
      text: "Trip to Switzerland",
      image: slideImg3,
      url: "Within",
    },
    {
      text: "Trip to Switzerland",
      image: slideImg4,
      url: "Within",
    },
    {
      text: "Trip to Switzerland",
      image: slideImg5,
      url: "Within",
    },
  ]);

  function Paging() {
    return (
      <View>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={indexNo}
          dotStyle={{
            width: 5,
            height: 5,
            borderRadius: 5,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          animatedDuration={0.5}
          animatedTension={10}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.8}
        />
      </View>
    );
  }

  function ImgCarousel({ item, index }) {
    return (
      <TouchableHighlight
        underlayColor="none"
        delayPressIn={100}
        onPress={() => navigation.navigate(item.url)}
      >
        <View style={styles.slider}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.slideText}>{item.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }

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
                <View style={styles.secondary}>
                  <Image style={styles.storyImg} source={imgSrc} />
                  <View style={styles.storyBg}>
                    <Text style={styles.storyText}>{title}</Text>
                    <Text style={styles.storyText2}>{para}</Text>
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
        <View style={styles.container}>
          <View style={styles.Menu}>
            <Ionicons
              name="menu-outline"
              style={{ marginLeft: 30 }}
              color="#000"
              size={40}
              onPress={() => navigation.openDrawer()}
            />
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                position: "relative",
                right: -250,
              }}
              source={appModel}
            />
          </View>
          <View>
            <Text style={styles.head}>Recommended</Text>
          </View>
          <Carousel
            layout={"default"}
            data={items}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={ImgCarousel}
            ref={isCarousel}
            useScrollView={true}
            onSnapToItem={(index) => setIndexNo(index)}
          />
          <Paging />
          <View>
            <Text style={styles.head2}>Trips & Tour</Text>
          </View>
          <Story />
          <View>
            <Text style={styles.head2}>Latest Posts</Text>
          </View>
          <Post />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F2DCC9',
  },
  Menu: {
    marginTop: 40,
    marginLeft: -270,
    flexDirection: "row",
    
  },
  head: {
    fontSize: 35,
    fontWeight: "700",
    marginLeft: -60,
    marginVertical: 15,
    color: "#732716",
  },
  head2: {
    fontSize: 35,
    fontWeight: "700",
    marginLeft: -130,
    marginBottom: 40,
    color: "#732716",
  },
  slideBtn: {
    position: "absolute",
    top: 240,
    bottom: 0,
    left: 25,
  },
  slider: {
    borderRadius: 5,
    height: 350,
    paddingHorizontal: 50,
    marginLeft: -30,
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
  slideText: {
    color: "#fff",
    paddingTop: "60%",
    fontSize: 19,
    fontWeight: "700",
    marginTop: 80,
    marginLeft: -20,
  },
  secondary: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#F2D5CE",
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
    color: '#59253D',
  },
  storyText2: {
    fontSize: 15,
    fontWeight: "700",
    color: '#F25F29',
    
  },
});
