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

export default function Land() {
  const SLIDER_WIDTH = Dimensions.get("window").width + 80;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.62);

  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([
    {
      text: "Trip to Switzerland",
      image: slideImg,
      url: 'Within',
    },
    {
      text: "Trip to Switzerland",
      image: slideImg2,
      url: 'Within',
    },
    {
      text: "Trip to Switzerland",
      image: slideImg3,
      url: 'Within',
    },
    {
      text: "Trip to Switzerland",
      image: slideImg4,
      url: 'Within',
    },
    {
      text: "Trip to Switzerland",
      image: slideImg5,
      url: 'Within',
    },
  ]);

  function pagination() {
    return (
      <View style={{ position: 'relative', top: -150 }}>
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

  return (
    <View style={styles.container}>
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
    </View>
  );
}

function ImgCarousel({ item, index, navigation }) {
  return (
    <View style={styles.slider}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.slideText}>{item.text}</Text>
      <View style={styles.slideBtn}>
        <Button
        color= '#1a508b'
        title="Learn more"
        onPress={() => navigation.push("Within")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slideBtn:{
    position: 'absolute',
    top: 250,
    bottom: 0,
    left: 10,
  },
  slider: {
    borderRadius: 5,
    height: "100%",
    paddingHorizontal: 50,
    marginVertical: 10,
    position: 'relative'
  },
  imageContainer: {
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: 270,
    height: 320,
    borderRadius: 15,
  },
  slideText: {
    color: '#fff',
    paddingTop: '80%',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 15,
    fontSize: 20,
    fontWeight: '900',
    position: 'absolute',
    top: 0,
    bottom: 165,
    left: 0,
    right: 4,
  }
});
