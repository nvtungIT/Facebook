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

export default function HomeScreen({ navigation }) {
  console.log('HomeScreen is rendering !!!!');
  const exampleData = [
    {
      id: '1',
      avaUrl:
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      userName: 'Dang',
      postStatus: 'Vua xong',
      postContent:
        '🥲🥲🥲🥲🥲🥲🥲🥲🥲Piedmont, or mountain, glaciers are found in many parts of the world. In North America they are distributed along the mountain ranges of the Pacific Coast from central California northward. ',
      imgUrls: [
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
        'https://firebasestorage.googleapis.com/v0/b/facebook-dnt.appspot.com/o/z3437264644391_4a7ac7029da59d14ae8298a3c1b8acfc.jpg?alt=media&token=e7c1c11a-f324-4abc-87b8-8181d3f9345d',
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      ],
      vidUrl: '',
    },
    {
      id: '2',
      avaUrl:
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      userName: 'Dang',
      postStatus: 'Vua xong',
      postContent:
        'Piedmont, or mountain, glaciers are found in many parts of the world. In North America they are distributed along the mountain ranges of the Pacific Coast from central California northward. ',
      imgUrls: [
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
        'https://firebasestorage.googleapis.com/v0/b/facebook-dnt.appspot.com/o/z3437264644391_4a7ac7029da59d14ae8298a3c1b8acfc.jpg?alt=media&token=e7c1c11a-f324-4abc-87b8-8181d3f9345d',
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      ],
      vidUrl: '',
    },
    {
      id: '3',
      avaUrl:
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      userName: 'Dang',
      postStatus: 'Vua xong',
      postContent:
        '🥲🥲🥲🥲🥲🥲🥲🥲🥲Piedmont, or mountain, glaciers are found in many parts of the world. In North America they are distributed along the mountain ranges of the Pacific Coast from central California northward. ',
      imgUrls: [
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
        'https://firebasestorage.googleapis.com/v0/b/facebook-dnt.appspot.com/o/z3437264644391_4a7ac7029da59d14ae8298a3c1b8acfc.jpg?alt=media&token=e7c1c11a-f324-4abc-87b8-8181d3f9345d',
        'https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg',
      ],
      vidUrl: '',
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
        <Text style={{ fontSize: 20, color: 'black' }}>HomeScreen</Text>
        {/* show PostComponent list here */}
        <FlatList
          data={exampleData}
          renderItem={renderItem}
          keyExtractor={(post) => post.id}
        />
        <PostComponent post={exampleData[0]} type={'single'} />
      </SafeAreaView>
    </View>
  );
}
