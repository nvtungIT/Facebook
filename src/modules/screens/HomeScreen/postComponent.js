import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useState } from 'react';
import ImagesComponent from './imagesComponent';
import TextComponent from './textComponent';
import VideoComponent from './videoComponent';
import CommentsComponent from './commentComponent';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MoreOption from 'modules/views/MoreOption';
import Ionicons from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get('window');

export default PostComponent = ({ post, type, goBack }) => {
  const comments = [
    {
      id: '1',
      comment: 'comment1',
      created: '',
      poster: {
        id: '1',
        name: 'dang',
        avatar:
          'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      },
    },
    {
      id: '2',
      comment:
        'comment2 comment2 comment2 comment2 comment2 comment2 comment2 comment2 comment2 comment2 comment2 comment2 comment2 comment2',
      created: '',
      poster: {
        id: '1',
        name: 'dang',
        avatar:
          'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
      },
    },
    {
      id: '3',
      comment: 'comment3',
      created: '',
      poster: {
        id: '1',
        name: 'dang',
        avatar:
          'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      },
    },
  ];

  const showhideButton = post.postContent.length > 300 ? true : false;
  const [numOfLine, setNumOfLine] = useState(type == 'single' ? 0 : 4);
  const [iconLikeName, setIconLikeName] = useState('like2');
  const [iconLikeColor, setIconLikeColor] = useState('black');
  const [numLikes, setNumLikes] = useState(post.like);

  const changeState = () => {
    if (!(type == 'single')) {
      if (numOfLine == 4) setNumOfLine(0);
      else setNumOfLine(4);
    }
  };

  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };

  const onComment = () => {};

  const onPressLike = () => {
    iconLikeColor == 'blue'
      ? setNumLikes(numLikes - 1)
      : setNumLikes(numLikes + 1);
    setIconLikeName(iconLikeName == 'like1' ? 'like2' : 'like1');
    setIconLikeColor(iconLikeColor == 'black' ? 'blue' : 'black');
  };

  return (
    <View style={styles.container}>
      <MoreOption setvisible={setModalShow} visible={modalShow} />
      <View style={styles.topPart}>
        {type == 'single' && (
          <Pressable style={styles.topPart.goBackIcon} onPress={goBack}>
            <Ionicons name="chevron-back" size={25} color="black" />
          </Pressable>
        )}
        <View style={styles.topPart.posterInfo}>
          <Image
            style={styles.avaImg}
            source={{
              uri: post.avaUrl,
            }}
          />
          <View>
            <Text style={styles.userNamePart}>{post.userName}</Text>
            <Text>{post.postStatus}</Text>
          </View>
        </View>

        <Pressable onPress={showModal} style={styles.topPart.moreicon}>
          <FeatherIcon name="more-horizontal" size={20} color="black" />
        </Pressable>
      </View>
      <View style={styles.contentPart}>
        <Pressable onPress={changeState} style={styles.contentPart.textPart}>
          <TextComponent numLine={numOfLine} content={post.postContent} />
          {!(type == 'single') && showhideButton && (
            <Text onPress={changeState}>Show/hide</Text>
          )}
        </Pressable>
        {!post.vidUrl && post.imgUrls.length > 0 && (
          <ImagesComponent type={type} imgUrls={post.imgUrls} />
        )}
        {post.vidUrl.length > 0 && !post.imgUrls && (
          <VideoComponent vidUrl={post.vidUrl} />
        )}
      </View>
      <View
        style={[
          styles.bottomPart,
          { flexDirection: type == 'single' ? 'column-reverse' : 'column' },
        ]}
      >
        <View style={styles.bottomPart.part1}>
          <View style={{ flex: 1 }}>
            <Text>
              <AntDesignIcon name="like2" size={20} color="blue" />
              {numLikes}
            </Text>
          </View>
          {!(type == 'single') && (
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text>{post.comment} bình luận</Text>
            </View>
          )}
        </View>

        <View style={[styles.bottomPart.part2]}>
          <Pressable
            style={{ flex: 1, alignItems: 'center' }}
            onPress={onPressLike}
          >
            <Text>
              <AntDesignIcon
                name={iconLikeName}
                size={15}
                color={iconLikeColor}
              />
              <Text style={{ textAlign: 'right', color: iconLikeColor }}>
                {' '}
                Thích
              </Text>
            </Text>
          </Pressable>
          {post.can_comment == '1' && (
            <Pressable
              style={{ flex: 1, alignItems: 'center' }}
              onPress={onComment}
            >
              <Text>
                <Octicons name="comment" size={15} color="black" />
                <Text> Bình luận</Text>
              </Text>
            </Pressable>
          )}
        </View>
      </View>
      {type == 'single' && (
        <CommentsComponent comments={comments} avaUser={post.avaUrl} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: 'white',
    fontFamily: 'Roboto',
  },
  topPart: {
    goBackIcon: {
      paddingLeft: 5,
    },
    posterInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 5,
    },
    moreicon: {
      flex: 1,
      alignItems: 'flex-end',
      paddingRight: 10,
    },
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  userNamePart: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  avaImg: {
    width: 40,
    height: 40,
    borderRadius: 40,
    margin: 8,
  },
  contentPart: {
    textPart: {
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 8,
    },
  },
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
      marginLeft: 10,
      marginRight: 10,
      borderTopColor: '#ececec',
      borderWidth: 1,
      borderColor: 'white',
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
