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
import Avatar from '../Avatar';
import { get_comment } from '../function/get_comment';
import { getStatus } from '../function/status';
import styles from './styles';

const SingleComment = ({ comment, navigate }) => {
  const commentStatus = getStatus(comment.created);
  return (
    <View style={styles.singlecomment}>
      <Avatar url={comment.poster.avatar} navigate={navigate} />
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
  const { focus, onPressSend, navigate } = params;
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

  return (
    <View style={styles.inputcontainer}>
      <Avatar url={avatarUrl} navigate={navigate} />
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
  const { postId, inputComment, navigate } = params;
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
    return <SingleComment comment={item} navigate={navigate} />;
  };
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        {loadingComment ? (
          <Text>is Loading</Text>
        ) : (
          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <SingleComment comment={item} navigate={navigate} />
            )}
            keyExtractor={(comment) => comment.id}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
