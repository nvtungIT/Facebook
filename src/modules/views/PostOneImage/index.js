import { like } from 'modules/screens/HomeScreen/function/like';
import { getStatus } from 'modules/screens/HomeScreen/function/status';
import { useState } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import ImageViewer from 'react-native-image-zoom-viewer';

export default PostOneImage = (params) => {
  const { visible, setvisible, post, isposter } = params;
  const image = [{ url: post.image[0].url }];
  const [iconLikeName, setIconLikeName] = useState(
    post.is_liked == '1' ? 'like1' : 'like2'
  );
  const [iconLikeColor, setIconLikeColor] = useState(
    post.is_liked == '1' ? 'blue' : 'black'
  );
  const [numLikes, setNumLikes] = useState(Number(post.like));
  const postStatus = getStatus(post.modified);
  const [numberLines, setNumberLines] = useState(1);
  const showhideButton = post.described.length > 80 ? true : false;
  const [showDescribed, setShowDescribed] = useState(true);

  const onPressLike = () => {
    if (post.is_liked == '1') {
      post.like = String(Number(post.like) - 1);
      post.is_liked = '0';
      setNumLikes(numLikes - 1);
      setIconLikeName('like2');
      setIconLikeColor('black');
    } else {
      post.like = String(Number(post.like) + 1);
      post.is_liked = '1';
      setNumLikes(numLikes + 1);
      setIconLikeName('like1');
      setIconLikeColor('blue');
    }
    like(post.id);
  };

  const changeNumberLines = () => {
    if (numberLines == 1) setNumberLines(0);
    else setNumberLines(1);
  };

  const callbak = () => {
    console.log('calbak');
    setShowDescribed(true);
  };

  const DescribedComp = () => (
    <Pressable
      style={{
        backgroundColor: 'black',
        width: Dimensions.get('window').width,
      }}
    >
      <Pressable onPress={() => setvisible(false)}>
        <AntDesignIcon name="closecircleo" size={30} />
      </Pressable>
      <Text>{post.author.username}</Text>
      <Text color={white}>{postStatus}</Text>

      <Pressable onPress={changeNumberLines} style={{ flexDirection: 'row' }}>
        <Text style={{ flex: 5 }} numberOfLines={numberLines}>
          {post.described}
        </Text>
        {numberLines == 1 && showhideButton && (
          <Text style={{ flex: 1 }}>Xem thêm</Text>
        )}
      </Pressable>
      <View style={{ flexDirection: 'row' }}>
        <AntDesignIcon name="like2" size={20} color="blue" />
        <Text style={{ flex: 1, textAlign: 'right' }}>
          {post.comment} bình luận
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Pressable style={styles.likeNcommentButton}>
          <AntDesignIcon name="like1" size={15} />
          <Text> Thích</Text>
        </Pressable>
        <Pressable style={styles.likeNcommentButton}>
          <Octicons name="comment" size={15} color="black" />
          <Text> Bình luận</Text>
        </Pressable>
      </View>
    </Pressable>
  );

  return (
    <Modal
      animationType="slide"
      // transparent={true}
      visible={visible}
      style={{ backgroundColor: 'black' }}
    >
      <ImageViewer imageUrls={image} renderFooter={() => <DescribedComp />} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  likeNcommentButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomPart: {
    part1: {
      flexDirection: 'row',
      flex: 1,
      padding: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    part2: {
      flexDirection: 'row',
      flex: 1,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      borderTopColor: '#ECECEC',
      borderBottomColor: '#ececec',
      borderWidth: 1,
      borderColor: 'white',
    },
    flexDirection: 'column',
    // flex: 1,
  },
});
