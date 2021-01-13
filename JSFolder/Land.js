import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Button,
  Text,
  StyleSheet,
} from "react-native";

import Carousel, { ParallaxImage } from "react-native-snap-carousel";

export default function Land() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ]);

  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        layoutCardOffset={`18`}
        // ref={(ref) => (carousel = ref)}
        data={items}
        sliderWidth={300}
        itemWidth={300}
        renderItem={ImgCarousel}
        onSnapToItem={(index) => setIndex(index)}
      />
    </View>
  );
}

function ImgCarousel({ item, index }) {
  return (
    <View style={styles.slider}>
      <ParallaxImage
        source={{ uri: item.thumbnail }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    backgroundColor: "floralwhite",
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
});
