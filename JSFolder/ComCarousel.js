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
  StatusBar,
  TouchableHighlight,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

export default function ComCarousel({ caroItems, styleImage, styleSlideText, styleSlider }) {
  const SLIDER_WIDTH = Dimensions.get("window").width + 50;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.62);
  const [indexNo, setIndexNo] = useState(0);

  const isCarousel = useRef(null);
  function Paging() {
    return (
      <View style={{marginLeft: 50}}>
        <Pagination
          dotsLength={caroItems.length}
          activeDotIndex={indexNo}
          dotStyle={{
            width: 5,
            height: 5,
            borderRadius: 5,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          animatedDuration={0.05}
          animatedTension={1}
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
        delayPressIn={10}
        onPress={() => navigation.navigate(item.url)}
      >
        <View style={styleSlider}>
          <Image style={styleImage} source={item.image} />
          <Text style={styleSlideText}>{item.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <View>
      <Carousel
        layout={"default"}
        data={caroItems}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        renderItem={ImgCarousel}
        ref={isCarousel}
        useScrollView={true}
        onSnapToItem={(index) => setIndexNo(index)}
      />
      <Paging />
    </View>
  );
}
