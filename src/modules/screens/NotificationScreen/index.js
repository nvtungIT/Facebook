import React, { Component, useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableHighlight,
  TouchableHighlightComponent,
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import {BottomSheet} from "@gorhom/bottom-sheet";
import { useRef } from 'react';
import { useMemo } from 'react';
export default function NotificationScreen(props) {
  console.log('NotificationScreen is rendering !!!!')

  const BottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  // notification = {
  //   type: home || friends || group || posts,
  //   object_id: truyen tham so cho viec chuyen man TouchableHighlightComponent,
  //   title: tieu de thogn bao,
  //   notification_id,
  //   created,
  //   avatar,
  //   group: 0: nhan vao khong chuyen trang sang nao hoac trang chu || 1: chuyen sang 1 giao dien nao do,
  //   read: 0 || 1,
  //   badge: so notification moi xuat hien,
  //   last_badge
  // }
  const data = [
    {
      notification_id: '001',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 1,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '002',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '003',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 1,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '004',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '005',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '006',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 1,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '007',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 1,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '008',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '009',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10
    },
    {
      notification_id: '010',
      type: "home",
      object_id: '00x2',
      title: "Chu Mạnh Tiến đã thích bài viết của bạn",
      created: '1 giờ trước',
      avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10
    },
  ]
  // const data = [
  //   {
  //     id: '001',
  //     post_title: 'Heavy weight',
  //     post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
  //     post_city: "New York",
  //     username: "Chu Manh Tien",
  //     notification: "Like your post",
  //     time: "10:00"
  //   },
  //   {
  //     id: '002',
  //     post_title: 'Heavy weight',
  //     post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
  //     post_city: "New York",
  //     username: "Chu Manh Tien",
  //     notification: "Like your post",
  //     time: "10:00"
  //   },
  //   {
  //     id: '003',
  //     post_title: 'Heavy weight',
  //     post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
  //     post_city: "New York",
  //     username: "Chu Manh Tien",
  //     notification: "Like your post fkjasfdlkjasdfkjlkfjlkdsjfkladsjfkldsfjkls",
  //     time: "10:00"
  //   },
  //   {
  //     id: '004',
  //     post_title: 'Heavy weight',
  //     post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
  //     post_city: "New York",
  //     username: "Chu Manh Tien",
  //     notification: "Like your post",
  //     time: "10:00"
  //   },
  //   {
  //     id: '005',
  //     post_title: 'Heavy weight',
  //     post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
  //     post_city: "New York",
  //     username: "Chu Manh Tien",
  //     notification: "Like your post",
  //     time: "10:00"
  //   },
  //   {
  //     id: '006',
  //     post_title: 'Heavy weight',
  //     post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
  //     post_city: "New York",
  //     username: "Chu Manh Tien",
  //     notification: "Like your post",
  //     time: "10:00"
  //   },
  //   {
  //     id: '007',
  //     post_title: 'Heavy weight',
  //     post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
  //     post_city: "New York",
  //     username: "Chu Manh Tien",
  //     notification: "Like your post",
  //     time: "10:00"
  //   },
  //   {
  //     id: '008',
  //     post_title: 'Heavy weight',
  //     post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
  //     post_city: "New York",
  //     username: "Chu Manh Tien",
  //     notification: "Like your post",
  //     time: "10:00"
  //   },

  // ]


  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ fontSize: 20, color: 'black' }}>NotificationScreen</Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.container, item.read ? styles.readBackground : '']}
                onPress={() => {}}
              >
                <View
                  style={styles.headerLeftImageWrap}
                >
                  <View style={styles.imageView}>
                    <Image
                      style={styles.headerLeftImage}
                      source = {{uri: item.avatar}}
                    />
                    <Image
                      style={styles.imageIcon}
                      source={ require('../../../assets/images/icon_group_2.png')}
                    />
                  </View>
                  
                </View>
                <View style={styles.notificationWrap}>
                  <View style={styles.notificationMessageWrap}>
                    <Text style={styles.text}>{ item.title }</Text>
                  </View>
                  <View style={styles.timeWrap}>  
                    <Text style={styles.time}>{ item.created }</Text>
                  </View>
                </View>
                <View
                  style={styles.optionWrap}
                >
                  <TouchableHighlight
                    onPress={() => {
                      // setIsShowExtendedList(!isShowExtendedList)
                      console.log("Show bottom sheet")
                    }}
                    underlayColor='#abb1b8'
                    style={styles.optionIconWrap}
                  >
                    <Icon
                      size={15}
                      color='black'
                      name="dots-three-horizontal"
                      style={styles.icon}
                    />
                    
                  </TouchableHighlight>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    with: '100%',
    height: '100%',
    paddingBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    color: 'black',
    // backgroundColor: 'gray',
    height: 110
  },
  readBackground: {
    backgroundColor: '#e0eeff'
  },
  headerLeftImageWrap: {
    flex: 2.5,
    borderRadius: 4,
    // backgroundColor: 'green',
    alignItems: 'center',
    paddingTop: 10

  },
  notificationWrap: {
    flex: 8,
    paddingVertical: 10,
  },
  optionWrap: {
    flex: 1.2,
    // backgroundColor: 'blue',
  },
  imageView: {
    width: 65,
    height: 65,
    // backgroundColor: 'blue',
    position: 'relative'
  },
  notificationMessageWrap: {
    width: "100%",
    height: "80%",
    // backgroundColor: 'white',
    overflow: 'hidden'
  },
  imageIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    bottom: 0,
    right: 0
  },
  headerLeftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  text: {
    color: 'black'
  },
  timeWrap: {
    // backgroundColor: 'green',
    position: 'absolute',
    width: "100%",
    bottom: 0
  },
  optionIconWrap: {
    width: "100%",
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  time: {
    color: '#919599',
    fontSize: 12
  },
  icon: {
    // width: 20,
    // height: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})