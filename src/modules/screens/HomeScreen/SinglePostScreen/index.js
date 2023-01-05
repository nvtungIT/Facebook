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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommentInputComp } from '../commentComponent';
import { useState, useCallback } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function SinglePostScreen({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false);
  const { post } = route.params;

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
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
        }}
      />
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <PostComponent post={post} type={'single'} goBack={goBack} />
      </ScrollView>
      <CommentInputComp avatarImg={avatarImg} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
});
