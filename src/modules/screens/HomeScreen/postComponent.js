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
const window = Dimensions.get('window');

export default PostComponent = ({ post, type }) => {
  const onPressFunc = () => {};
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
        <Text>Show number likes, comments here </Text>
      </View>
      <Pressable onPress={onPressFunc}>
        <Text>I'm pressable!</Text>
      </Pressable>
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
  },
  userNamePart: {},
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
    flexDirection: 'row',
  },
  logo: {
    width: 66,
    height: 58,
  },
});
