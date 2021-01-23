import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Image,
} from "react-native";

import { person2 } from "./ImgRender";

import { Feather } from '@expo/vector-icons';

export default function Portfolio() {
  return (
    <View>
      <View>
        <Text style={styles.portTitle}>My Portfolio</Text>
        <View style={{ marginHorizontal: 10, marginVertical: 40, height: 500 }}>
          <Image style={styles.profileImg} source={person2} />
        </View>
        <View>
          <Text style={styles.profileDes}>
            My name is Bernard Sydney. I am a Web Developer, and I'm very
            passionate and dedicated to my work.
          </Text>
          <Text style={styles.profileDes}>
            With 20 years experience as a professional Web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </Text>
        </View>
        <Text style={styles.portTitle}>My Skills</Text>
        <View>
          <View style={styles.portSkill}>
               <View style={{marginHorizontal: 20, marginTop: 20}}>
                    <Feather 
                    name="monitor" 
                    size={60} 
                    color="black" />
               </View>
               <View>
                    <Text style={{fontSize: 27, fontWeight: '700', marginBottom: 20,}}>Web Development</Text>
                    <Text>I mainly design the UI of the website. With lots of design components & tools, It's my eternal duty to decorate the site with utmost beauty</Text>
               </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  portTitle: {
    fontSize: 40,
    fontFamily: "sans-serif-condensed",
    fontWeight: "700",
    marginVertical: 30,
    marginLeft: 20,
    color: "#732716",
  },
  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  profileDes: {
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 10,
    lineHeight: 35,
    opacity: 0.6,
  },
  portSkill: {
       flexDirection: "row",
       marginRight: 30,
  }
});
