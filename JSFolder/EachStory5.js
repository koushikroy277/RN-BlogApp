import React from "react";
import {
  View,
  ScrollView,
} from "react-native";

import ComEachStory from './ComEachStory';

import { blog5 } from './ImgRender';

export default function EachStory() {
  return (
    <View>
      <ComEachStory 
      storyImg = {blog5}
      storyHead = "So, Winespeed has taken up my campaign to give Chenin blanc a fair chance on your dinner table. I enjoy it with seafood, pasta, cheese, and fruit. South Africa accounts for 53% of the world’s total planted acreage of chenin blanc. France grows 28%, primarily in the Loire Valley, and together the U.S. and Argentina split another 15%. For centuries chenin blanc was (and it still remains) South Africa’s most planted grape. Sometimes known there as steen, it was one of the first grapes to arrive on the Cape in the1650s."
      />
    </View>
  );
}
