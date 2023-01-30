import { like } from 'modules/screens/HomeScreen/function/like';
import { getStatus } from 'modules/screens/HomeScreen/function/status';
import { useState, useEffect } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import ImageViewer from 'react-native-image-zoom-viewer';
import CommentModal from './CommentModal';
import ScreenNames from 'general/constants/ScreenNames';

export default PostOneImage = (params) => {
  const { visible, setvisible, post, navigate, type, isposter } = params;
  const [visibleNested, setVisibleNested] = useState(false);
  const image = [{ url: post.image[0].url }];
  const [iconLikeName, setIconLikeName] = useState(
    post.is_liked == '1' ? 'like1' : 'like2'
  );
  const [iconLikeColor, setIconLikeColor] = useState(
    post.is_liked == '1' ? 'blue' : 'white'
  );
  const [numLikes, setNumLikes] = useState(Number(post.like));
  const postStatus = getStatus(post.modified);
  const [numberLines, setNumberLines] = useState(1);
  const showhideButton = post.described?.length > 80 ? true : false;
  const [showDescribed, setShowDescribed] = useState(true);

  useEffect(() => {
    setNumLikes(Number(post.like));
    setIconLikeColor(post.is_liked == '1' ? 'blue' : 'white');
    setIconLikeName(post.is_liked == '1' ? 'like1' : 'like2');
  }, [post.like]);

  const onPressLike = () => {
    if (post.is_liked == '1') {
      post.like = String(Number(post.like) - 1);
      post.is_liked = '0';
      setNumLikes(numLikes - 1);
      setIconLikeName('like2');
      setIconLikeColor('white');
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

  const handlePressComment = () => {
    if (type == 'single') {
      setvisible(false);
    } else {
      navigate.navigate(ScreenNames.singlePostScreen, {
        postPassing: post,
        focus: true,
      });
      setvisible(false);
    }
  };

  const FooterComp = () =>
    showDescribed && (
      <Pressable
        style={{
          width: Dimensions.get('window').width,
          backgroundColor: '#11111188',
          paddingTop:
            numberLines == 1 && showhideButton ? 0 : showhideButton ? 600 : 0,
          padding: 8,
        }}
        onPress={changeNumberLines}
      >
        <Text
          style={{
            color: 'white',
          }}
        >
          {post.author.username}
        </Text>
        <Text style={{ color: 'white' }}>{postStatus}</Text>

        <Pressable onPress={changeNumberLines} style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 5, color: 'white' }} numberOfLines={numberLines}>
            {post.described}
          </Text>
          {numberLines == 1 && showhideButton && (
            <Text style={{ flex: 1, color: 'white' }}>Xem thêm</Text>
          )}
        </Pressable>
        <View style={{ flexDirection: 'row' }}>
          {numLikes > 0 && (
            <Text style={{ color: 'white' }}>
              <AntDesignIcon name="like2" size={20} color="blue" />
              {post.is_liked == '1'
                ? numLikes - 1 > 0
                  ? ' Bạn và ' + (numLikes - 1) + ' người khác'
                  : ' Bạn'
                : numLikes}
            </Text>
          )}
          {post.comment > 0 && (
            <Text style={{ flex: 1, textAlign: 'right', color: 'white' }}>
              {post.comment} bình luận
            </Text>
          )}
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Pressable style={styles.likeNcommentButton} onPress={onPressLike}>
            <AntDesignIcon
              name={iconLikeName}
              size={15}
              color={iconLikeColor}
            />
            <Text style={{ color: iconLikeColor }}> Thích</Text>
          </Pressable>
          <Pressable
            style={styles.likeNcommentButton}
            onPress={handlePressComment}
          >
            <Octicons name="comment" size={15} color="white" />
            <Text style={{ color: 'white' }}> Bình luận</Text>
          </Pressable>
        </View>
      </Pressable>
    );

  const HeaderComp = () =>
    showDescribed && (
      <View
        style={{
          width: Dimensions.get('window').width,
          height: 80,
          backgroundColor: '#11111188',
          padding: 8,
          position: 'absolute',
          zIndex: 100,
        }}
      >
        <AntDesignIcon
          onPress={() => setvisible(false)}
          name="closecircleo"
          size={25}
          color="white"
        />
      </View>
    );

  const handleClickImg = () => {
    if (showDescribed == true) setShowDescribed(false);
    else setShowDescribed(true);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <CommentModal
        visible={visibleNested}
        setvisible={setVisibleNested}
        postid={post.id}
      />
      <ImageViewer
        imageUrls={image}
        onClick={handleClickImg}
        enableSwipeDown={true}
        onSwipeDown={() => setvisible(false)}
        renderHeader={() => <HeaderComp />}
        renderFooter={() => <FooterComp />}
        backgroundColor={'#333333'}
      />
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
