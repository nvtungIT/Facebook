import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ImagesComponent from './imagesComponent';
import TextComponent from './textComponent';
import VideoComponent from './videoComponent';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useState } from 'react';
const window = Dimensions.get('window');

export default PostComponent = ({ post, type }) => {
  const showModal = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Image
          style={styles.avaImg}
          source={{
            uri: post.avaUrl,
          }}
        />
        <View style={styles.userNamePart}>
          <Text>{post.userName}</Text>
          <Text>{post.postStatus}</Text>
        </View>
        <Pressable onPress={showModal} style={styles.moreicon}>
          <FeatherIcon name="more-horizontal" size={20} color="black" />
        </Pressable>
      </View>
      <View style={styles.contentPart}>
        <TextComponent type={type} content={post.postContent} />
        {!post.vidUrl && post.imgUrls && (
          <ImagesComponent type={type} imgUrls={post.imgUrls} />
        )}
        {post.vidUrl && !post.imgUrls && (
          <VideoComponent vidUrl={post.vidUrl} />
        )}
      </View>
      <View style={styles.bottomPart}>
        <View style={styles.bottomPart.part1}>
          <View style={{ flex: 1 }}>
            <Text>
              <AntDesignIcon name="like2" size={20} color="blue" />
              {post.like}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text>{post.comment} bình luận</Text>
          </View>
        </View>
        <View style={[styles.bottomPart.part2, {}]}>
          <Pressable style={{ flex: 1, alignItems: 'center' }}>
            <Text>
              <AntDesignIcon name="like2" size={15} color="black" />
              <Text style={{ textAlign: 'right' }}> Thích</Text>
            </Text>
          </Pressable>
          {post.can_comment == '1' && (
            <Pressable style={{ flex: 1, alignItems: 'center' }}>
              <Text>
                <Octicons name="comment" size={15} color="black" />
                <Text> Bình luận</Text>
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    backgroundColor: 'white',
    fontFamily: 'Roboto',
  },
  topPart: {
    flexDirection: 'row',
    flex: 1,
  },
  userNamePart: {
    flex: 1,
  },
  moreicon: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  avaImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    margin: 10,
  },
  contentPart: {},
  postImg: {
    width: window.width,
    height: window.height / 3,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bottomPart: {
    part1: {
      flexDirection: 'row',
      flex: 1,
      padding: 5,
      margin: 5,
    },
    part2: {
      flexDirection: 'row',
      flex: 1,
      padding: 5,
      paddingTop: 15,
      marginLeft: 10,
      marginRight: 10,
      borderTopColor: '#ECECEC',
      borderWidth: 1,
      borderColor: 'white',
    },
  },
  logo: {
    width: 66,
    height: 58,
  },
});
