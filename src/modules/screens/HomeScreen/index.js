import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Pressable,
  RefreshControl,
  NetInfo,
} from 'react-native';

import PostComponent from './postComponent';
import ScreenNames from 'general/constants/ScreenNames';
import { useState, useCallback } from 'react';
import { get_list_posts } from './function/get_list_posts';
import { useEffect } from 'react';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function HomeScreen({ navigation }) {
  console.log('HomeScreen is rendering !!!!');

  //fetch data here

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); //state to render topLoading posts state
  const [bottomLoading, setBottomLoading] = useState(false); //state to render bottomLoading posts state
  const [loadingText, setLoadingText] = useState('isLoading');
  const [refreshing, setRefreshing] = useState(false);
  const [render, setRender] = useState([true]); //state to render flatlist

  useEffect(() => {
    //hàm get_list_posts: gọi api login lấy token rồi gọi api get_list_posts với token có đc
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
    get_list_posts({
      posts: posts,
      setLoading: setLoading,
      setPosts: setPosts,
      type: 'get new posts',
    }).then(() => {
      setRefreshing(false);
    });
    console.log('get new posts');
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
    if (posts.length > 0) {
      setBottomLoading(true);
      let length = posts.length;
      let lastid = posts[length - 1].id;
      get_list_posts({
        posts: posts,
        setBottomLoading: setBottomLoading,
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
              ListFooterComponent={<Text>{loadingText}</Text>}
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
