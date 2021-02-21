import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.footerHeader}>
        <AntDesign name="codesquare" size={40} color="#fff" style={{ margin: 20, }} />
        <Text style={styles.footerTitle}>Developer & Entrepreneur</Text>
      </View>
      <View style={styles.footerContactBox}>
        <View style={styles.footerAddressBar}>
          <Text style={styles.footerTag}>My Number</Text>
          <Text style={styles.footerInfo}>+8801752933299</Text>
          <Text style={styles.footerTag}>My Email</Text>
          <Text style={styles.footerInfo}>roykoushik275@gmail.com</Text>
          <Text style={styles.footerTag}>My Website</Text>
          <TouchableHighlight onPress={null}>
            <Text  style={styles.footerInfo}>https://www.krxBlog.netlify.com</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.footerAddressBar}>
          <Text style={styles.footerTag}>My Address</Text>
          <Text style={styles.footerInfo}>
            13/B, Green Palace, East Helen Road, Switzerland
          </Text>
          <Text style={styles.footerTag}>My Sponsors</Text>
          <View>
            <Text style={styles.footerInfo}>SkillShare</Text>
            <Text style={styles.footerInfo}>SurfShark VPN</Text>
            <Text style={styles.footerInfo}>WIX</Text>
            <Text style={styles.footerInfo}>AlgoExpert</Text>
          </View>
          <Text style={styles.footerInfo}></Text>
          <Text style={styles.footerInfo}></Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerBox}>
          <View style={styles.footerCard}>
            <Text style={styles.footerItemHead}>IT Services</Text>
            <Text style={styles.footerItem}>Digital Marketing</Text>
            <Text style={styles.footerItem}>SEO, Domain & Hosting</Text>
            <Text style={styles.footerItem}>Cloud Computing</Text>
            <Text style={styles.footerItem}>Graphics & Web design</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerItemHead}>Company</Text>
            <Text style={styles.footerItem}>Google</Text>
            <Text style={styles.footerItem}>Adobe</Text>
            <Text style={styles.footerItem}>IBM</Text>
            <Text style={styles.footerItem}>Oracle</Text>
          </View>
        </View>
        <View style={styles.footerBox}>
          <View style={styles.footerCard}>
            <Text style={styles.footerItemHead}>Freelancing</Text>
            <Text style={styles.footerItem}>Web Development</Text>
            <Text style={styles.footerItem}>App Development</Text>
            <Text style={styles.footerItem}>Progressive Web App</Text>
            <Text style={styles.footerItem}>Desktop App</Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.footerItemHead}>Business</Text>
            <Text style={styles.footerItem}>Stock Management</Text>
            <Text style={styles.footerItem}>Business Analysis</Text>
            <Text style={styles.footerItem}>Production Management</Text>
            <Text style={styles.footerItem}>Ecommerce</Text>
          </View>
        </View>
      </View>
      <View style={styles.footerSocialBox}>
        <Text style={styles.footerSocialHead}>Follow Us</Text>
        <TouchableOpacity
          style={styles.footerMedia}
          onPress={() => Linking.openURL("https://www.instagram.com")}
        >
          <FontAwesome name="instagram" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerMedia}
          onPress={() => Linking.openURL("https://www.facebook.com")}
        >
          <MaterialCommunityIcons name="facebook" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerMedia}
          onPress={() => Linking.openURL("https://www.whatsapp.com")}
        >
          <FontAwesome name="whatsapp" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerMedia}
          onPress={() => Linking.openURL("https://www.youtube.com")}
        >
          <FontAwesome name="youtube-play" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#380202",
    marginTop: 200,
  },
  footerHeader: {
    flexDirection: "row",
    marginBottom: 20,
  },
  footerTitle: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Livvic_700Bold",
  },
  footerContainer: {
    flexDirection: "row",
    margin: 10,
  },
  footerContactBox: {
    flexDirection: "row",
    margin: 10,
  },
  footerAddressBar: {
    width: '50%',
  },
  footerSocialHead: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "serif",
    color: "#fff",
    margin: 10,
  },
  footerSocialBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#140102",
    height: 80,
  },
  footerBox: {
    marginLeft: 10,
  },
  footerCard: {
    marginVertical: 10,
  },
  footerElem: {},
  footerTag: {
    color: "#fff",
    marginTop: 10,
    marginLeft: 10,
  },
  footerInfo: {
    color: "#fff",
    marginLeft: 10,
    opacity: 0.6,
  },
  footerMedia: {
    color: "#fff",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  footerItemHead: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
  },
  footerItem: {
    color: "#fff",
    fontSize: 15,
    opacity: 0.6,
  },
});
