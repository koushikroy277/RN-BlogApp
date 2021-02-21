import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
  Dimensions,
  ImageBackground,
} from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

import {
  person,
  person2,
  person3,
  person4,
  person5,
  person6,
  post3,
} from "./ImgRender";

export default function ServeCarousel() {
  const sliderWidth = Dimensions.get("window").width + 80;
  const itemWidth = Math.round(sliderWidth * 0.8);

  const [indexNo, setIndexNo] = useState(0);
  const [review, setReview] = useState([
    {
      text:
        ' " Brilliant concept and conceptual design. Want to see more of that from you later on " ',
      work: "MD, Envato LTD.",
      name: "Sean Rushford",
      image: person,
    },
    {
      text:
        ' " Filled with potential services and point to point details. Great to work with you" ',
      work: "HR, Envato LTD.",
      name: "Berry Tyler",
      image: person3,
    },
    {
      text:
        ' " Efficient work on deadline time. Really want to work you later in the future " ',
      work: "CEO, Envato LTD.",
      name: "Katty Ellieson",
      image: person4,
    },
    {
      text:
        ' " Satisfactory project delivery within the give time period without any procrastination " ',
      work: "CTO, Envato LTD.",
      name: "Reaus Kat",
      image: person5,
    },
    {
      text:
        ' " Genuine Services with lot of benefits and reasonable prices. I honestly liked your working procedure and your strategy of holding onto any complicated project " ',
      work: "Director, Envato LTD.",
      name: "Thomas Belvin",
      image: person6,
    },
  ]);

  function serveSlide({ item, index }) {
    return (
      <View key={index} style={styles.serveSlide}>
        <View style={styles.serveReview}>
          <Text style={styles.serveSlideText}>{item.text}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Image style={styles.serveImage} source={item.image} />
          <View>
            <Text style={styles.serveSlideName}>{item.name}</Text>
            <Text style={styles.serveSlideWork}>{item.work}</Text>
          </View>
        </View>
      </View>
    );
  }

  function ServePaging() {
    return (
      <View>
        <Pagination
          dotsLength={review.length}
          activeDotIndex={indexNo}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
          }}
          animatedDuration={0.05}
          animatedTension={1}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.8}
        />
      </View>
    );
  }

  return (
    <View>
      <View style={{ transform: [
        { skewY: '3deg' },
      ] }}>
        <ImageBackground
          source={post3}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 700,
            marginTop: 50,
          }}
        >
          <View style={styles.serveRev}>
            <Text
              style={styles.serveHead}
            >
              Happy Clients Say
            </Text>
            <Carousel
              loop={true}
              autoplay={true}
              useScrollView={true}
              data={review}
              renderItem={serveSlide}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              onSnapToItem={(index) => setIndexNo(index)}
            />
            <ServePaging />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  serveSlide: {
    marginHorizontal: 10,
    marginVertical: 40,
    backgroundColor: "#fff",
    padding: 20,
  },
  serveReview: {
    justifyContent: "center",
    height: 270,
    marginHorizontal: 20,
  },
  serveSlideText: {
    fontSize: 20,
    fontFamily: "Alata_400Regular",
    marginBottom: 30,
    color: "#a20a0a",
  },
  serveSlideName: {
    fontSize: 20,
    fontFamily: "Alata_400Regular",
  },
  serveSlideWork: {
    fontSize: 20,
    fontFamily: "Alata_400Regular",
  },
  serveImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  serveHead: {
    fontSize: 30,
    fontFamily: "Livvic_700Bold",
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  serveRev: {
    marginTop: "auto", 
    marginBottom: "auto",
    transform: [
      { skewY: '-3deg' },
    ]
  }
});
