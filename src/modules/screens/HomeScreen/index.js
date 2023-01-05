import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';

import PostComponent from './postComponent';
import ScreenNames from 'general/constants/ScreenNames';
import { useState } from 'react';
import { useEffect } from 'react';

export default function HomeScreen({ navigation }) {
  console.log('HomeScreen is rendering !!!!');

  //fetch data here
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjQ3NzM1ZWNmMTE2MDk5Y2IzMzY3NCIsImRhdGVMb2dpbiI6IjIwMjMtMDEtMDRUMTU6NTk6MDMuMzIyWiIsImlhdCI6MTY3Mjg0Nzk0MywiZXhwIjoxNjcyOTM0MzQzfQ.zm8a8wOQXNFqxbwNOWffUp7mVY7rQGprPObsXbh-Cdc';

  const url =
    'http://192.168.1.136:5000/it4788/post/get_list_posts?token=' +
    token +
    '&last_id=0&index=0&count=20';

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, { method: 'POST' })
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setPosts(json.data.posts);
      });
  }, []);

  // fetch(url, { method: 'POST' })
  //   .then((res) => res.json())
  //   .then((json) => {
  //     // setLoading(true);
  //     // setPosts(json.data.posts);
  //   });

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
    {
      id: '2',
      image: [
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      ],
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
        avatar:
          'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      },
      postStatus: 'Vua xong',
    },
    {
      id: '3',
      image: [
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      ],
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
        avatar:
          'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      },
      postStatus: 'Vua xong',
    },
  ];

  const onPressPost = ({ item }) => {
    navigation.navigate(ScreenNames.singlePostScreen, { post: item });
  };

  //fetch data here

  const renderItem = ({ item }) => (
    <Pressable onPress={() => onPressPost({ item })}>
      <PostComponent post={item} />
    </Pressable>
  );
  return (
    <View style={{ flex: 1, paddingBottom: 30 }}>
      <SafeAreaView>
        {loading ? (
          <Text>is Loading</Text>
        ) : (
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(post) => post.id}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
