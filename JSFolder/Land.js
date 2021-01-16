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
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

import {
  slideImg,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
} from "./ImgRender";

import Story from "./Story";

export default function Land({ navigation }) {
  const SLIDER_WIDTH = Dimensions.get("window").width + 130;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.53);

  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
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

  function pagination() {
    return (
      <View>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={index}
          dotStyle={{
            width: 5,
            height: 5,
            borderRadius: 5,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.3}
          inactiveDotScale={0.8}
        />
      </View>
    );
  }

  function ImgCarousel({ item, index }) {
    return (
      <View style={styles.slider}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.slideText}>{item.text}</Text>
        <View style={styles.slideBtn}>
          <Button
            color="#1a508b"
            title="Learn more"
            onPress={() => navigation.navigate(item.url)}
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
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
          onSnapToItem={(index) => setIndex(index)}
        />
        {pagination()}
        <View>
          <Text style={styles.head2}>Trips & Tour</Text>
        </View>
        <Story />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    fontSize: 35,
    fontWeight: "700",
    marginLeft: -60,
    marginVertical: 15,
  },
  head2: {
    fontSize: 35,
    fontWeight: "700",
    marginLeft: -130,
    paddingBottom: 30,
  },
  slideBtn: {
    position: "absolute",
    top: 260,
    bottom: 0,
    left: 25,
  },
  slider: {
    borderRadius: 5,
    height: 350,
    paddingHorizontal: 50,
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
    paddingTop: "80%",
    fontSize: 19,
    fontWeight: "700",
    marginTop: 80,
    marginLeft: -20,
  },
});
