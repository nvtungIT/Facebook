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

const SingleComment = ({ comment }) => {
  return (
    <View style={styles.singlecomment}>
      <Image
        source={{
          uri: comment.poster.avatar,
        }}
        style={{ width: 40, height: 40, borderRadius: 40 }}
      />
      <View style={styles.commentbox}>
        <View style={styles.commentbox.notIncludeTime}>
          <Text style={styles.commentbox.name}>{comment.poster.name}</Text>
          <Text>{comment.comment}</Text>
        </View>
        <Text style={styles.commentbox.time}>Thời gian</Text>
      </View>
    </View>
  );
};

const CommentInputComp = ({ avaUser }) => {
  return (
    <View style={styles.inputcontainer}>
      <Image source={{ uri: avaUser }} style={styles.avaUser} />
      <TextInput style={styles.commentinput}>
        type your thinking here...
      </TextInput>
    </View>
  );
};

export default CommentsComponent = ({ comments, avaUser }) => {
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
      <CommentInputComp avaUser={avaUser} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  singlecomment: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    paddingLeft: 5,
    paddingRight: 40,
    // marginRight: 10,
  },
  commentbox: {
    notIncludeTime: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      padding: 5,
      paddingTop: 0,
      backgroundColor: 'grey',
      // flex: 1,
      // width: 300,
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
    backgroundColor: '#ffeeff',
  },
});
