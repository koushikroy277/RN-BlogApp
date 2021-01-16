import React from 'react';
import {Image, Text,ScrollView, View, StyleSheet} from 'react-native';
import {blog, blog2, blog3, blog4, blog5, blog6, blog7} from './ImgRender';

export default function Story() {
     return (
          <View>
               <View style={styles.container}>
                    <View style={styles.secondary}>
                         <Image style={styles.storyImg} source={blog} />
                         <View style={styles.storyBg}>
                              <Text style={styles.storyText}>Genelia Exertent Resort</Text>
                              <Text style={styles.storyText2}>Genelia Exertent Resort</Text>
                         </View>
                    </View>
                    <View style={styles.secondary}>
                         <Image style={styles.storyImg} source={blog2} />
                         <View style={styles.storyBg}>
                              <Text style={styles.storyText}>Genelia Exertent Resort</Text>
                              <Text style={styles.storyText2}>Genelia Exertent Resort</Text>
                              <Text></Text>
                         </View>
                    </View>
                    <View style={styles.secondary}>
                         <Image style={styles.storyImg} source={blog3} />
                         <View style={styles.storyBg}>
                              <Text style={styles.storyText}>Genelia Exertent Resort</Text>
                              <Text style={styles.storyText2}>Genelia Exertent Resort</Text>
                         </View>
                    </View>
                    <View style={styles.secondary}>
                         <Image style={styles.storyImg} source={blog4} />
                         <View style={styles.storyBg}>
                              <Text style={styles.storyText}>Genelia Exertent Resort</Text>
                              <Text style={styles.storyText2}>Genelia Exertent Resort</Text>
                         </View>
                    </View>
                    <View style={styles.secondary}>
                         <Image style={styles.storyImg} source={blog5} />
                         <View style={styles.storyBg}>
                              <Text style={styles.storyText}>Genelia Exertent Resort</Text>
                              <Text style={styles.storyText2}>Genelia Exertent Resort</Text>
                         </View>
                    </View>
                    <View style={styles.secondary}>
                         <Image style={styles.storyImg} source={blog6} />
                         <View style={styles.storyBg}>
                              <Text style={styles.storyText}>Genelia Exertent Resort</Text>
                              <Text style={styles.storyText2}>Genelia Exertent Resort</Text>
                         </View>
                    </View>
                    <View style={styles.secondary}>
                         <Image style={styles.storyImg} source={blog7} />
                         <View style={styles.storyBg}>
                              <Text style={styles.storyText}>Genelia Exertent Resort</Text>
                              <Text style={styles.storyText2}>Genelia Exertent Resort</Text>
                         </View>
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          fontFamily: 'Times New Roman'
     },
     secondary: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          backgroundColor: '#edf5f5',
     },
     storyImg: {
          width: 100,
          height: 100,
          marginRight: 20,
          borderRadius: 10,
     },
     storyText: {
          fontSize: 20,
     },
     storyText2: {
          fontSize: 15,
     },
     storyBg: {
          
     },
})