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
import { useEffect } from 'react';

const window = Dimensions.get('window');

function postStatus(modifiedTime) {
  let time = Math.floor(Date.now() / 1000) - modifiedTime; // đơn vị time: giây
  if (time < 60) return 'Vừa xong';
  else {
    time = Math.floor(time / 60); // đơn vị time: phút
    if (time < 60) return time + ' phút';
    else {
      time = Math.floor(time / 60); //đơn vị time: giờ
      if (time < 24) return time + ' giờ';
      else {
        time = Math.floor(time / 24);
        return time + ' ngày';
      }
    }
  }
}

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

  const showhideButton = post.described.length > 300 ? true : false;
  const [numOfLine, setNumOfLine] = useState(type == 'single' ? 0 : 4);
  const [iconLikeName, setIconLikeName] = useState('like2');
  const [iconLikeColor, setIconLikeColor] = useState('black');
  const [numLikes, setNumLikes] = useState(post.like);

  useEffect(() => {
    post.postStatus = postStatus(post.modified);
  }, []);

  const avatarImg =
    post.author.avatar != null
      ? { uri: post.author.avatar }
      : require('assets/images/default_avafb.jpg');

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
          <Image style={styles.avaImg} source={avatarImg} />
          <View>
            <Text style={styles.userNamePart}>{post.author.username}</Text>
            <Text>{post.postStatus}</Text>
          </View>
        </View>

        <Pressable onPress={showModal} style={styles.topPart.moreicon}>
          <FeatherIcon name="more-horizontal" size={20} color="black" />
        </Pressable>
      </View>
      <View style={styles.contentPart}>
        <Pressable onPress={changeState} style={styles.contentPart.textPart}>
          <TextComponent numLine={numOfLine} content={post.described} />
          {!(type == 'single') && showhideButton && (
            <Text onPress={changeState}>Show/hide</Text>
          )}
        </Pressable>
        {!post.video && post.image && (
          <ImagesComponent type={type} image={post.image} />
        )}
        {post.video && !post.image && <VideoComponent vidUrl={post.video} />}
      </View>
      <View
        style={[
          styles.bottomPart,
          { flexDirection: type == 'single' ? 'column-reverse' : 'column' },
        ]}
      >
        <View style={styles.bottomPart.part1}>
          <View style={{ flex: 1 }}>
            {numLikes > 0 && (
              <Text>
                <AntDesignIcon name="like2" size={20} color="blue" />
                {numLikes}
              </Text>
            )}
          </View>
          {!(type == 'single') && post.comment > 0 && (
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
      {type == 'single' && <CommentsComponent comments={comments} />}
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
