import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Pressable,
  RefreshControl,
  Image,
} from 'react-native';

import PostComponent from './postComponent';
import ScreenNames from 'general/constants/ScreenNames';
import { useState, useCallback } from 'react';
import { get_list_posts } from './function/get_list_posts';
import { useEffect } from 'react';
import { check_new_item } from './function/check_new_item';
import { getPreference } from 'libs/storage/PreferenceStorage';
import AddPost from 'modules/views/CreatePost';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function HomeScreen({ navigation }) {
  console.log('HomeScreen is rendering !!!!');

  //fetch data here

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); //state to render topLoading posts state
  const [loadingText, setLoadingText] = useState('isLoading');
  const [refreshing, setRefreshing] = useState(false);
  const [render, setRender] = useState([true]); //state to render flatlist
  const [avatarUrl, setAvatarUrl] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    get_list_posts({
      setLoading: setLoading,
      setPosts: setPosts,
      type: 'get first time',
    });
    console.log('get list post first time');
  }, []);

  useEffect(
    () =>
      navigation.addListener('focus', () => {
        setRender([...render]);
      }),
    [navigation]
  );

  useEffect(() => {
    async function getAvatar() {
      let avatarUrl = await getPreference('UserAvatar');
      console.log(avatarUrl);
      setAvatarUrl(avatarUrl);
    }
    async function getToken() {
      let token = await getPreference('UserToken');
      setToken(token);
    }
    async function getUserId() {
      let userId = await getPreference('UserId');
      setUserId(userId);
      console.log(userId);
    }
    async function getUserName() {
      let userName = await getPreference('UserName');
      console.log(userName);
      setUserName(userName);
    }
    if (!avatarUrl) getAvatar();
    if (!token) getToken();
    if (!userId) getUserId();
    if (!userName) getUserName();
  }, []);

  const avatarSrc =
    avatarUrl != ''
      ? { uri: avatarUrl }
      : require('assets/images/default_avafb.jpg');

  const [addPostVisible, setAddPostVisible] = useState(false);

  const AddPostComponent = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Pressable>
        <Image
          source={avatarSrc}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            margin: 8,
          }}
        />
      </Pressable>
      <Pressable onPress={() => setAddPostVisible(true)}>
        <Text>Bạn đang nghĩ gì?</Text>
      </Pressable>
    </View>
  );

  const exampleData = [
    {
      id: '1',
      image: null,
      video: '',
      described:
        '🥲🥲🥲🥲🥲🥲🥲🥲🥲Piedmont, or mountain, glaciers are found in many parts of the world. In North America they are distributed along the mountain ranges of the Pacific Coast from central California northward.🥲🥲🥲🥲🥲🥲🥲🥲🥲Piedmont, or mountain, glaciers are found in many parts of the world. In North America they are distributed along the mountain ranges of the Pacific Coast from central California northward.🥲🥲🥲🥲🥲🥲🥲🥲🥲Piedmont, or mountain, glaciers are found in many parts of the world. In North America they are distributed along the mountain ranges of the Pacific Coast from central California northward. ',
      created: null,
      modified: null,
      like: 50,
      comment: '20',
      is_liked: '1',
      is_blocked: '0',
      can_comment: '1',
      can_edit: '1',
      state: null,
      author: {
        id: '1',
        username: 'Dang',
        avatar: null,
      },
      postStatus: 'Vua xong',
    },
  ];

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    check_new_item(posts[0].id).then((rs) => {
      console.log('newposts: ' + rs);
      if (rs > 0) {
        get_list_posts({
          posts: posts,
          setLoading: setLoading,
          setPosts: setPosts,
          newItems: rs,
          type: 'get new posts',
        }).then(() => {
          setRefreshing(false);
        });
        console.log('get new posts on refresh');
      } else {
        setRefreshing(false);
        setLoading(false);
        console.log('dont get new posts on refresh');
      }
    });
  }, [posts]);

  const onPressPostArea = ({ item }) => {
    navigation.navigate(ScreenNames.singlePostScreen, {
      post: item,
    });
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => onPressPostArea({ item })}>
      <PostComponent post={item} navigate={navigation} />
    </Pressable>
  );

  const handlePullUpLoadMore = () => {
    setLoadingText('isLoading');
    if (posts.length > 0) {
      let length = posts.length;
      let lastid = posts[length - 1].id;
      get_list_posts({
        posts: posts,
        setLoadingText: setLoadingText,
        setPosts: setPosts,
        last_id: lastid,
        type: 'get old posts',
      }).then(setRender([...render]));
    }
    console.log('get older post');
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        {loading ? (
          <Text>is Loading</Text>
        ) : (
          <View>
            <AddPost
              modalVisible={addPostVisible}
              setModalVisible={setAddPostVisible}
              token={token}
              userId={userId}
              avatar={avatarUrl}
              userName={userName}
              postData
            />
            <FlatList
              data={posts}
              extraData={render}
              renderItem={renderItem}
              keyExtractor={(post) => post.id}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              onEndReachedThreshold={0.5}
              onEndReached={handlePullUpLoadMore}
              ListHeaderComponent={<AddPostComponent />}
              ListFooterComponent={<Text>{loadingText}</Text>}
              ListEmptyComponent={<Text>No post to show!</Text>}
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
