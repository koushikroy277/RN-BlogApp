import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Image,
  Dimensions,
} from "react-native";

import {
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import { TabView, SceneMap } from "react-native-tab-view";
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { person2 } from "./ImgRender";
import Work from "./Work";
import Education from "./Education";
import ComTab from "./ComTab";

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
              <Text style={styles.portSkillHead}>Content Management</Text>
              <Text style={styles.portSkillDes}>
                I also manage the content of the organization that helps to keep
                track of the company's progress
              </Text>
            </View>
          </View>
          <View style={styles.portSkill}>
            <View style={styles.portIcon}>
              <AntDesign name="windows" size={60} color="#931a25" />
            </View>
            <View>
              <Text style={styles.portSkillHead}>
                System & Computing Expert
              </Text>
              <Text style={styles.portSkillDes}>
                I check the computer's software & hardware of a company and make
                sure that the server & other computing system are working fine
              </Text>
            </View>
          </View>
          <View style={styles.portSkill}>
            <View style={styles.portIcon}>
              <AntDesign name="adduser" size={60} color="#931a25" />
            </View>
            <View>
              <Text style={styles.portSkillHead}>
                Team manager & leadership consultant
              </Text>
              <Text style={styles.portSkillDes}>
                I can greatly team up with the high potential employees and
                consultant all the possilble adversities a company can have
                within and outside which is an utmost of a business
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const FirstRoute = () => (
  <View style={styles.scene} key={Math.random()}>
    <ComTab
    comDate="2018-Now" 
    comTitle="Web Designer & Tech Manager At Google"
    comDes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto." />
    <ComTab
    comDate="2016-2018" 
    comTitle="Web & System Designer At Microsoft "
    comDes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto." />
    <ComTab
    comDate="2013-2016" 
    comTitle="Freelance Web Designer"
    comDes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto." />
    <ComTab
    comDate="2011-2013" 
    comTitle="Intern Web Designer & Tech Manager"
    comDes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto." />
  </View>
);

const SecondRoute = () => (
  <View style={styles.scene} key={Math.random()}>
    <ComTab 
    comDate="2008-2010"
    comTitle="Master's in CSE At BUET"
    comDes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto." />
    <ComTab 
    comDate="2004-2008"
    comTitle="Honour's in CSE At BUET"
    comDes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto." />
    <ComTab 
    comDate="2000-2004"
    comTitle="Intermediate Level At DRMC"
    comDes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto." />
    <ComTab 
    comDate="1998-2000"
    comTitle="Secondary Level At DRMC"
    comDes="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto." />
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

function PortTab() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Work' },
    { key: 'second', title: 'Education' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
 
  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
  
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );
          const borderBottomBox = {
            borderBottomColor: '#732716',
            paddingBottom: 10,
            fontFamily: 'Alata_400Regular',
            fontSize: 20,
            borderBottomWidth: Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 3 : 0
                ),
              })
            )
          }
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={ borderBottomBox }>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  
  return (
    <View style={{marginHorizontal: 30}}>
      <View style={{
        borderBottomWidth: 2,
        borderColor: 'rgba(0, 0, 0, .2)',
        position: 'relative',
        top: 62,
        left: 0,
      }} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  portTitle: {
    fontSize: 40,
    fontFamily: "Livvic_700Bold",
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
    fontFamily: "Alata_400Regular",
    marginHorizontal: 30,
    marginVertical: 10,
    lineHeight: 35,
    opacity: 0.6,
    paddingBottom: 10,
  },
  portSkill: {
    margin: 30,
    paddingHorizontal: 30,
    paddingVertical: 50,
    borderColor: "rgba(0, 0, 0, .4)",
    borderWidth: 1,
    borderRadius: 10,
  },
  portIcon: {
    marginBottom: 10,
  },
  portSkillHead: {
    fontFamily: "BeVietnam_700Bold",
    fontSize: 30,
    marginBottom: 10,
  },
  portSkillDes: {
    fontFamily: "Alata_400Regular",
    fontSize: 18,
    opacity: 0.6,
  },
  tabBar: {
    flexDirection: 'row',
    marginRight: 100,
  },
  tabItem: {
    padding: 16,
  },
  scene: {
    height: '100%',
    marginLeft: 10,
    paddingVertical: 20,
  },
});
