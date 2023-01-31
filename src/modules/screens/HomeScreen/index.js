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

import PostComponent from './PostComponent';
import ScreenNames from 'general/constants/ScreenNames';
import { useState, useCallback } from 'react';
import { get_list_posts } from './function/get_list_posts';
import { useEffect } from 'react';
import { check_new_item } from './function/check_new_item';
import { getPreference } from 'libs/storage/PreferenceStorage';
import AddPost from 'modules/views/CreatePost';
import FetchingPopup from 'modules/views/CreatePost/fetching-popup';

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
      setAvatarUrl(avatarUrl);
    }
    if (!avatarUrl) getAvatar();
  }, []);

  const avatarSrc =
    avatarUrl != '' && avatarUrl != null
      ? { uri: avatarUrl }
      : require('assets/images/male-avatar.jpg');

  const [addPostVisible, setAddPostVisible] = useState(false);

  const AddPostComponent = () => (
    <View>
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
        <Pressable
          onPress={() => {
            setAddPostVisible(true);
          }}
        >
          <Text>Bạn đang nghĩ gì?</Text>
        </Pressable>
      </View>
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
    // setLoading(true);
    setRefreshing(true);
    const lastid = posts[0]?.id ?? 0;
    console.log(lastid);
    check_new_item(lastid).then((rs) => {
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
        // setLoading(false);
        console.log('dont get new posts on refresh');
      }
    });
  }, [posts]);

  const updatePosts = (postId) => {
    let newPosts = posts.filter(function (post) {
      return post.id != postId;
    });
    setPosts(newPosts);
  };

  const renderItem = ({ item }) => (
    <PostComponent
      postPassing={item}
      navigate={navigation}
      updatePosts={updatePosts}
    />
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
          <Text>isLoading</Text>
        ) : (
          <View>
            <AddPost
              visible={addPostVisible}
              setvisible={setAddPostVisible}
              avatarSrc={avatarSrc}
              isEditPostMode={false}
            />
            <FlatList
              data={posts}
              extraData={render}
              renderItem={renderItem}
              keyExtractor={(post) => post.id}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  // progressViewOffset={1000}
                  size={'large'}
                />
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
      {loading && <FetchingPopup />}
    </View>
  );
}
