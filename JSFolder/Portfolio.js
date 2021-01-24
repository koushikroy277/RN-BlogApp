import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Image,
} from "react-native";

import {
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import { person2 } from "./ImgRender";
import Work from "./Work";
import Education from "./Education";

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
        <View>
          <PortTab />
        </View>
        <Text style={styles.portTitle}>My Skills</Text>
        <View>
          <View style={styles.portSkill}>
            <View style={styles.portIcon}>
              <Feather name="monitor" size={60} color="#931a25" />
            </View>
            <View>
              <Text style={styles.portSkillHead}>Web Development</Text>
              <Text style={styles.portSkillDes}>
                I mainly design the UI of the website. With lots of design
                components & tools, It's my eternal duty to decorate the site
                with utmost beauty
              </Text>
            </View>
          </View>
          <View style={styles.portSkill}>
            <View style={styles.portIcon}>
              <MaterialCommunityIcons
                name="content-duplicate"
                size={60}
                color="#931a25"
              />
            </View>
            <View>
              <Text style={styles.portSkillHead}>Web Development</Text>
              <Text style={styles.portSkillDes}>
                I mainly design the UI of the website. With lots of design
                components & tools, It's my eternal duty to decorate the site
                with utmost beauty
              </Text>
            </View>
          </View>
          <View style={styles.portSkill}>
            <View style={styles.portIcon}>
              <AntDesign name="windows" size={60} color="#931a25" />
            </View>
            <View>
              <Text style={styles.portSkillHead}>Web Development</Text>
              <Text style={styles.portSkillDes}>
                I mainly design the UI of the website. With lots of design
                components & tools, It's my eternal duty to decorate the site
                with utmost beauty
              </Text>
            </View>
          </View>
          <View style={styles.portSkill}>
            <View style={styles.portIcon}>
              <AntDesign name="adduser" size={60} color="#931a25" />
            </View>
            <View>
              <Text style={styles.portSkillHead}>Web Development</Text>
              <Text style={styles.portSkillDes}>
                I mainly design the UI of the website. With lots of design
                components & tools, It's my eternal duty to decorate the site
                with utmost beauty
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

