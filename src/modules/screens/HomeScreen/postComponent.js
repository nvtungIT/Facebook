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
import { getStatus } from './function/status';
import { like } from './function/like';
import ScreenNames from 'general/constants/ScreenNames';
import { get_comment } from './function/get_comment';
import PostOneImage from 'modules/views/PostOneImage';

const window = Dimensions.get('window');

export default PostComponent = (params) => {
  const { post, type, goBack, navigate, inputComment } = params;

  const showhideButton = post.described.length > 300 ? true : false;
  const [numOfLine, setNumOfLine] = useState(type == 'single' ? 0 : 4);
  const [iconLikeName, setIconLikeName] = useState(
    post.is_liked == '1' ? 'like1' : 'like2'
  );
  const [iconLikeColor, setIconLikeColor] = useState(
    post.is_liked == '1' ? 'blue' : 'black'
  );
  const [numLikes, setNumLikes] = useState(Number(post.like));
  const [loadingComment, setLoadingComment] = useState(true);
  const [comments, setComments] = useState([]);
  const [numCmt, setNumCmt] = useState(Number(post.comment));

  useEffect(() => {
    setNumLikes(Number(post.like));
    setIconLikeColor(post.is_liked == '1' ? 'blue' : 'black');
    setIconLikeName(post.is_liked == '1' ? 'like1' : 'like2');
  }, [post.like]);

  useEffect(() => {
    setNumCmt(Number(post.comment));
  }, [post.comment]);

  useEffect(() => {
    if (inputComment != undefined) {
      console.log(inputComment);
      setComments([...comments, inputComment]);
    }
  }, [inputComment]);

  const postStatus = getStatus(post.modified);

  if (type == 'single') console.log('single post render');

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
  const [singleImageShow, setSingleImageShow] = useState(false);

  const showModal = () => {
    setModalShow(true);
  };

  const onPressComment = () => {
    if (type !== 'single')
      navigate.navigate(ScreenNames.singlePostScreen, {
        post: post,
        focus: true,
      });
  };

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

  useEffect(() => {
    if (type == 'single') {
      console.log('get comment');
      get_comment({
        postId: post.id,
        setComments: setComments,
        setLoading: setLoadingComment,
      });
    }
  }, []);

  const onPressImg = () => {
    if (post.image.length == 1) {
      setSingleImageShow(true);
    } else {
      if (!(type == 'single'))
        navigate.navigate(ScreenNames.singlePostScreen, {
          post: post,
        });
    }
  };

  return (
    <View style={styles.container}>
      <MoreOption setvisible={setModalShow} visible={modalShow} />
      {post.image != null && (
        <PostOneImage
          setvisible={setSingleImageShow}
          visible={singleImageShow}
          post={post}
        />
      )}
      {/* top part of post */}
      {type != 'single' && (
        <View style={styles.topPart}>
          {type == 'single' && (
            <Pressable style={styles.topPart.goBackIcon} onPress={goBack}>
              <Ionicons name="chevron-back" size={25} color="black" />
            </Pressable>
          )}
          <View style={styles.topPart.posterInfo}>
            <Image style={styles.topPart.avaImg} source={avatarImg} />
            <View>
              <Text style={styles.topPart.userNamePart}>
                {post.author.username}
              </Text>
              <Text>{postStatus}</Text>
            </View>
          </View>

          <Pressable onPress={showModal} style={styles.topPart.moreicon}>
            <FeatherIcon name="more-horizontal" size={20} color="black" />
          </Pressable>
        </View>
      )}
      {/* content part */}
      <View style={styles.contentPart}>
        <Pressable onPress={changeState} style={styles.contentPart.textPart}>
          <TextComponent numLine={numOfLine} content={post.described} />
          {!(type == 'single') && showhideButton && (
            <Text onPress={changeState}>Show/hide</Text>
          )}
        </Pressable>
        {!post.video && post.image && (
          <Pressable onPress={onPressImg}>
            <ImagesComponent type={type} image={post.image} />
          </Pressable>
        )}
        {post.video && !post.image && <VideoComponent vidUrl={post.video} />}
      </View>
      {/* bottom part */}
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
                {post.is_liked == '1'
                  ? numLikes - 1 > 0
                    ? ' Bạn và ' + (numLikes - 1) + ' người khác'
                    : ' Bạn'
                  : numLikes}
              </Text>
            )}
          </View>
          {!(type == 'single') && numCmt > 0 && (
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text>{numCmt} bình luận</Text>
            </View>
          )}
        </View>

        <View style={styles.bottomPart.part2}>
          <Pressable
            style={styles.bottomPart.likeNcommentButton}
            onPress={onPressLike}
          >
            <AntDesignIcon
              name={iconLikeName}
              size={15}
              color={iconLikeColor}
            />
            <Text style={{ textAlign: 'right', color: iconLikeColor }}>
              {' '}
              Thích
            </Text>
          </Pressable>
          {post.can_comment == '1' && (
            <Pressable
              style={styles.bottomPart.likeNcommentButton}
              onPress={onPressComment}
            >
              <Octicons name="comment" size={15} color="black" />
              <Text> Bình luận</Text>
            </Pressable>
          )}
        </View>
      </View>
      {/* list comments part */}
      {type == 'single' &&
        (loadingComment ? (
          <Text>is Loading</Text>
        ) : (
          <CommentsComponent comments={comments} />
        ))}
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
    avaImg: {
      width: 40,
      height: 40,
      borderRadius: 40,
      margin: 8,
    },
    userNamePart: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
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
    likeNcommentButton: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
});
