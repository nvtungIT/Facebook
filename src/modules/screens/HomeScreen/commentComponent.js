import { getPreference } from 'libs/storage/PreferenceStorage';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import {
  FlatList,
  Pressable,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { get_comment } from './function/get_comment';
import { getStatus } from './function/status';

const SingleComment = ({ comment }) => {
  const posterImg =
    comment.poster.avatar != null
      ? { uri: comment.poster.avatar }
      : require('assets/images/default_avafb.jpg');
  const commentStatus = getStatus(comment.created);
  return (
    <View style={styles.singlecomment}>
      <Image
        source={posterImg}
        style={{ width: 40, height: 40, borderRadius: 40, marginTop: 5 }}
      />
      <View style={styles.commentbox}>
        <View style={styles.commentbox.notIncludeTime}>
          <Text style={styles.commentbox.name}>{comment.poster.name}</Text>
          <Text>{comment.comment}</Text>
        </View>
        <Text style={styles.commentbox.time}>{commentStatus}</Text>
      </View>
    </View>
  );
};

export const CommentInputComp = (params) => {
  const { focus, onPressSend } = params;
  console.log('cmt input render');
  const [comment, setComment] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');

  const ref_commentInput = useRef();

  useEffect(() => {
    async function getAvatar() {
      let avatarUrl = await getPreference('UserAvatar');
      setAvatarUrl(avatarUrl);
    }
    if (!avatarUrl) getAvatar();
  }, []);
  const avatarSrc =
    avatarUrl != '' && avatarUrl != null
      ? { uri: avatarUrl }
      : require('assets/images/default_avafb.jpg');

  return (
    <View style={styles.inputcontainer}>
      <Image source={avatarSrc} style={styles.avaUser} />
      <TextInput
        style={styles.commentinput}
        autoFocus={focus}
        placeholder={'type your thinking here...'}
        onChangeText={(cmt) => setComment(cmt)}
        ref={ref_commentInput}
      ></TextInput>
      <Pressable
        style={styles.inputcontainer.sendIconStyle}
        onPress={() => {
          onPressSend(comment);
          setComment(null);
          ref_commentInput.current.blur();
          ref_commentInput.current.clear();
        }}
      >
        <FontAwesomeIcon name="send" size={24} />
      </Pressable>
    </View>
  );
};

export default CommentsComponent = (params) => {
  const { postId, inputComment } = params;
  const [comments, setComments] = useState([]);
  const [loadingComment, setLoadingComment] = useState(true);
  useEffect(() => {
    console.log('get comment');
    get_comment({
      postId: postId,
      setComments: setComments,
      setLoading: setLoadingComment,
    });
  }, []);

  useEffect(() => {
    if (inputComment != undefined) {
      console.log(inputComment);
      setComments([...comments, inputComment]);
    }
  }, [inputComment]);

  const renderItem = ({ item }) => {
    return <SingleComment comment={item} />;
  };
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        {loadingComment ? (
          <Text>is Loading</Text>
        ) : (
          <FlatList
            data={comments}
            renderItem={renderItem}
            keyExtractor={(comment) => comment.id}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  singlecomment: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    paddingLeft: 5,
    paddingRight: 40,
  },
  commentbox: {
    notIncludeTime: {
      borderRadius: 15,
      padding: 10,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: '#f0f2f5',
    },
    time: {
      paddingLeft: 5,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
    },

    padding: 5,
    marginLeft: 5,
  },
  avaUser: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  inputcontainer: {
    sendIconStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    borderTopColor: '#f0f2f5',
    borderColor: 'white',
    borderWidth: 1,
  },
  commentinput: {
    flex: 1,
    borderRadius: 20,
    paddingLeft: 20,
    marginLeft: 10,
    height: 40,
    backgroundColor: '#f0f2f5',
  },
});
