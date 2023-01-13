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
  const { avatarImg, focus, onPressSend } = params;
  const [comment, setComment] = useState(null);
  const ref_commentInput = useRef();

  return (
    <View style={styles.inputcontainer}>
      <Image source={avatarImg} style={styles.avaUser} />
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

export default CommentsComponent = ({ comments }) => {
  const renderItem = ({ item }) => {
    return <SingleComment comment={item} />;
  };
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={(comment) => comment.id}
        />
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
    backgroundColor: '#ffccff',
    padding: 8,
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
