import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  RefreshControl,
} from 'react-native';
import PostComponent from '../postComponent';
import { CommentInputComp } from '../commentComponent';
import { useState, useCallback } from 'react';
import { set_comment } from '../function/set_comment';
import { get_comment } from '../function/get_comment';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function SinglePostScreen({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false);
  const { post, focus } = route.params;
  const [inputComment, setInputComment] = useState(undefined);

  const avatarImg =
    post.author.avatar != null
      ? { uri: post.author.avatar }
      : require('assets/images/default_avafb.jpg');

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const onPressSend = (comment) => {
    console.log(comment);
    if (comment != null) {
      let cmt = {
        id: Date.now(),
        comment: comment,
        created: Date.now() / 1000,
        poster: {
          name: post.author.username,
          avatar: post.author.avatar,
        },
      };
      setInputComment(cmt);
      set_comment({ comment: comment, postId: post.id });
    }
  };

  const infoComponent = () => (
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
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* {infoComponent} */}
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        StickyHeaderComponent={infoComponent}
        stickyHeaderHiddenOnScroll={false}
        // stickyHeaderIndices={0}
        // invertStickyHeaders={true}
      >
        <PostComponent
          post={post}
          type={'single'}
          goBack={goBack}
          inputComment={inputComment}
        />
      </ScrollView>
      <CommentInputComp
        avatarImg={avatarImg}
        focus={focus}
        onPressSend={onPressSend}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  scrollView: {
    backgroundColor: 'white',
  },
});
