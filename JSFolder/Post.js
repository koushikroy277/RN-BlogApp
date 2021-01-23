import React, { useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";

import { post, post2, post3, post4, post5, post6 } from "./ImgRender";

import PostInfo from "./PostInfo";

export default function Post() {
  const [postOpen, setPostOpen] = useState("");
  const [active, setActive] = useState(false);

  return (
    <ScrollView>
      <View>
        <PostInfo
          active={active}
          setActive={setActive}
          postOpen={postOpen}
          setPostOpen={setPostOpen}
          id="1"
          postTitle="An introduction to the New way of Blogging"
          postPara="Before I started my own adventure travel blog 10 years ago, I was inspired to explore the world after reading other people’s travel blogs online. Travel blogs are a wonderful source for cool ideas & advice if you’re planning a trip!"
          postLearn="I used to think that only cultures in dark corners of the earth considered people with disabilities as useless and of no value — places where infants born with disabilities were drowned or discarded in dumpsters. The truth is, even “enlightened” nations view certain individuals with disabilities as valueless. There are places where a doctor can legally put to death an infant or an elderly person with a mild disability. Even those who do not have the medical power to end a life are too quick to fall into the lie that it’s beneath our dignity to be weak and helpless, or that a person is better off dead than disabled."
          postImg={post}
        />
        <PostInfo
          active={active}
          setActive={setActive}
          postOpen={postOpen}
          setPostOpen={setPostOpen}
          id="2"
          postTitle="An introduction to the New way of Blogging"
          postPara="Before I started my own adventure travel blog 10 years ago, I was inspired to explore the world after reading other people’s travel blogs online. Travel blogs are a wonderful source for cool ideas & advice if you’re planning a trip!"
          postLearn="I used to think that only cultures in dark corners of the earth considered people with disabilities as useless and of no value — places where infants born with disabilities were drowned or discarded in dumpsters. The truth is, even “enlightened” nations view certain individuals with disabilities as valueless. There are places where a doctor can legally put to death an infant or an elderly person with a mild disability. Even those who do not have the medical power to end a life are too quick to fall into the lie that it’s beneath our dignity to be weak and helpless, or that a person is better off dead than disabled."
          postImg={post2}
        />
        <PostInfo
          active={active}
          setActive={setActive}
          postOpen={postOpen}
          setPostOpen={setPostOpen}
          id="3"
          postTitle="An introduction to the New way of Blogging"
          postPara="Before I started my own adventure travel blog 10 years ago, I was inspired to explore the world after reading other people’s travel blogs online. Travel blogs are a wonderful source for cool ideas & advice if you’re planning a trip!"
          postLearn="I used to think that only cultures in dark corners of the earth considered people with disabilities as useless and of no value — places where infants born with disabilities were drowned or discarded in dumpsters. The truth is, even “enlightened” nations view certain individuals with disabilities as valueless. There are places where a doctor can legally put to death an infant or an elderly person with a mild disability. Even those who do not have the medical power to end a life are too quick to fall into the lie that it’s beneath our dignity to be weak and helpless, or that a person is better off dead than disabled."
          postImg={post3}
        />
        <PostInfo
          active={active}
          setActive={setActive}
          postOpen={postOpen}
          setPostOpen={setPostOpen}
          id="4"
          postTitle="An introduction to the New way of Blogging"
          postPara="Before I started my own adventure travel blog 10 years ago, I was inspired to explore the world after reading other people’s travel blogs online. Travel blogs are a wonderful source for cool ideas & advice if you’re planning a trip!"
          postLearn="I used to think that only cultures in dark corners of the earth considered people with disabilities as useless and of no value — places where infants born with disabilities were drowned or discarded in dumpsters. The truth is, even “enlightened” nations view certain individuals with disabilities as valueless. There are places where a doctor can legally put to death an infant or an elderly person with a mild disability. Even those who do not have the medical power to end a life are too quick to fall into the lie that it’s beneath our dignity to be weak and helpless, or that a person is better off dead than disabled."
          postImg={post4}
        />
        <PostInfo
          active={active}
          setActive={setActive}
          postOpen={postOpen}
          setPostOpen={setPostOpen}
          id="5"
          postTitle="An introduction to the New way of Blogging"
          postPara="Before I started my own adventure travel blog 10 years ago, I was inspired to explore the world after reading other people’s travel blogs online. Travel blogs are a wonderful source for cool ideas & advice if you’re planning a trip!"
          postLearn="I used to think that only cultures in dark corners of the earth considered people with disabilities as useless and of no value — places where infants born with disabilities were drowned or discarded in dumpsters. The truth is, even “enlightened” nations view certain individuals with disabilities as valueless. There are places where a doctor can legally put to death an infant or an elderly person with a mild disability. Even those who do not have the medical power to end a life are too quick to fall into the lie that it’s beneath our dignity to be weak and helpless, or that a person is better off dead than disabled."
          postImg={post5}
        />
        <PostInfo
          active={active}
          setActive={setActive}
          postOpen={postOpen}
          setPostOpen={setPostOpen}
          id="6"
          postTitle="An introduction to the New way of Blogging"
          postPara="Before I started my own adventure travel blog 10 years ago, I was inspired to explore the world after reading other people’s travel blogs online. Travel blogs are a wonderful source for cool ideas & advice if you’re planning a trip!"
          postLearn="I used to think that only cultures in dark corners of the earth considered people with disabilities as useless and of no value — places where infants born with disabilities were drowned or discarded in dumpsters. The truth is, even “enlightened” nations view certain individuals with disabilities as valueless. There are places where a doctor can legally put to death an infant or an elderly person with a mild disability. Even those who do not have the medical power to end a life are too quick to fall into the lie that it’s beneath our dignity to be weak and helpless, or that a person is better off dead than disabled."
          postImg={post6}
        />
      </View>
    </ScrollView>
  );
}

