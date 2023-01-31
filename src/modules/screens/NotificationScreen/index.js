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
  SectionList,
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { BottomSheet } from '@gorhom/bottom-sheet'
import { useRef } from 'react'
import { useMemo } from 'react'
import NotificationItem from './NotificationItem'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getPreference } from 'libs/storage/PreferenceStorage'
import { serverDomain } from 'general/constants/Global'

export default function NotificationScreen(props) {
  console.log('NotificationScreen is rendering !!!!')
  const { navigation } = props
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    async function fetchData() {
      const token = await getPreference('UserToken')
      fetch(`${serverDomain}notification/get-noti`, {
        method: 'post',
        body: { token },
      })
        .then((data) => {
          console.log('notification', data)
          setNotifications(data.data)
        })
        .catch((err) => console.log(err))
    }
    fetchData()
  }, [])
  // notification = {
  //   !type: home || friends || group || posts,
  //   !object_id: truyen tham so cho viec chuyen man TouchableHighlightComponent,
  //   title: tieu de thong bao,
  //   notification_id,
  //   created,
  //   avatar,
  //   group: 0: nhan vao khong chuyen trang sang nao hoac trang chu || 1: chuyen sang 1 giao dien nao do,
  //   read: 0 || 1,
  //   badge: so notification moi xuat hien,
  //   last_badge
  //   notification_type: 1: thich, 2: binh luan, 3: sinh nhat, 4: bai viet moi/anh moi, 5: video, 6: ketban
  // }
  const DATA = [
    {
      id: 1,
      title: 'Mới',
      data: [
        {
          notification_id: '001',
          type: 'home',
          object_id: '00x2',
          title: 'Chu Mạnh Tiến đã thích bài viết của bạn.',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 1,
          badge: 10,
          last_badge: 10,
          notification_type: 1,
        },
        {
          notification_id: '002',
          type: 'home',
          object_id: '00x2',
          title: 'Chu Mạnh Tiến đã bình luận về bài viết của bạn.',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 0,
          badge: 10,
          last_badge: 10,
          notification_type: 2,
        },
        {
          notification_id: '003',
          type: 'home',
          object_id: '00x2',
          title: 'Sinh nhật của Chu Mạnh Tiến vào 30 tháng 4.',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 1,
          badge: 10,
          notification_type: 3,
          last_badge: 10,
        },
        {
          notification_id: '004',
          type: 'home',
          object_id: '00x2',
          title: 'Chu Mạnh Tiến đã thích bài viết của bạn',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 0,
          badge: 10,
          last_badge: 10,
          notification_type: 4,
        },
        {
          notification_id: '005',
          type: 'home',
          object_id: '00x2',
          title: 'Chu Mạnh Tiến đã thích bài viết của bạn',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 0,
          badge: 10,
          last_badge: 10,
          notification_type: 5,
        },
        {
          notification_id: '006',
          type: 'home',
          object_id: '00x2',
          title: 'Minh Nguyễn đã chấp nhận lời mời kết bạn của bạn.',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 1,
          badge: 10,
          last_badge: 10,
          notification_type: 6,
        },
        // {
        //   notification_id: '007',
        //   type: "home",
        //   object_id: '00x2',
        //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
        //   created: '1 giờ trước',
        //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
        //   group: 1,
        //   read: 1,
        //   badge: 10,
        //   last_badge: 10,
        //   notification_type: 1
        // },
        // {
        //   notification_id: '008',
        //   type: "home",
        //   object_id: '00x2',
        //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
        //   created: '1 giờ trước',
        //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
        //   group: 1,
        //   read: 0,
        //   badge: 10,
        //   last_badge: 10,
        //   notification_type: 1
        // },
        // {
        //   notification_id: '009',
        //   type: "home",
        //   object_id: '00x2',
        //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
        //   created: '1 giờ trước',
        //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
        //   group: 1,
        //   read: 0,
        //   badge: 10,
        //   last_badge: 10,
        //   notification_type: 1
        // },
        // {
        //   notification_id: '010',
        //   type: "home",
        //   object_id: '00x2',
        //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
        //   created: '1 giờ trước',
        //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
        //   group: 1,
        //   read: 0,
        //   badge: 10,
        //   last_badge: 10,
        //   notification_type: 1
        // },
      ],
    },
    {
      id: 2,
      title: 'Trước đó',
      data: [
        {
          notification_id: '001',
          type: 'home',
          object_id: '00x2',
          title: 'Chu Mạnh Tiến đã thích bài viết của bạn.',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 1,
          badge: 10,
          last_badge: 10,
          notification_type: 1,
        },
        {
          notification_id: '002',
          type: 'home',
          object_id: '00x2',
          title: 'Chu Mạnh Tiến đã bình luận về bài viết của bạn.',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 0,
          badge: 10,
          last_badge: 10,
          notification_type: 2,
        },
        {
          notification_id: '003',
          type: 'home',
          object_id: '00x2',
          title: 'Sinh nhật của Chu Mạnh Tiến vào 30 tháng 4.',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 1,
          badge: 10,
          notification_type: 3,
          last_badge: 10,
        },
        {
          notification_id: '004',
          type: 'home',
          object_id: '00x2',
          title: 'Chu Mạnh Tiến đã thích bài viết của bạn',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 0,
          badge: 10,
          last_badge: 10,
          notification_type: 4,
        },
        {
          notification_id: '005',
          type: 'home',
          object_id: '00x2',
          title: 'Chu Mạnh Tiến đã thích bài viết của bạn',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 0,
          badge: 10,
          last_badge: 10,
          notification_type: 5,
        },
        {
          notification_id: '006',
          type: 'home',
          object_id: '00x2',
          title: 'Minh Nguyễn đã chấp nhận lời mời kết bạn của bạn.',
          created: '1 giờ trước',
          avatar:
            'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
          group: 1,
          read: 1,
          badge: 10,
          last_badge: 10,
          notification_type: 6,
        },
        // {
        //   notification_id: '007',
        //   type: "home",
        //   object_id: '00x2',
        //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
        //   created: '1 giờ trước',
        //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
        //   group: 1,
        //   read: 1,
        //   badge: 10,
        //   last_badge: 10,
        //   notification_type: 1
        // },
        // {
        //   notification_id: '008',
        //   type: "home",
        //   object_id: '00x2',
        //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
        //   created: '1 giờ trước',
        //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
        //   group: 1,
        //   read: 0,
        //   badge: 10,
        //   last_badge: 10,
        //   notification_type: 1
        // },
        // {
        //   notification_id: '009',
        //   type: "home",
        //   object_id: '00x2',
        //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
        //   created: '1 giờ trước',
        //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
        //   group: 1,
        //   read: 0,
        //   badge: 10,
        //   last_badge: 10,
        //   notification_type: 1
        // },
        // {
        //   notification_id: '010',
        //   type: "home",
        //   object_id: '00x2',
        //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
        //   created: '1 giờ trước',
        //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
        //   group: 1,
        //   read: 0,
        //   badge: 10,
        //   last_badge: 10,
        //   notification_type: 1
        // },
      ],
    },
  ]
  let data = [
    {
      notification_id: '001',
      type: 'home',
      object_id: '00x2',
      title: 'Chu Mạnh Tiến đã thích bài viết của bạn.',
      created: '1 giờ trước',
      avatar:
        'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 1,
      badge: 10,
      last_badge: 10,
      notification_type: 1,
    },
    {
      notification_id: '002',
      type: 'home',
      object_id: '00x2',
      title: 'Chu Mạnh Tiến đã bình luận về bài viết của bạn.',
      created: '1 giờ trước',
      avatar:
        'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10,
      notification_type: 2,
    },
    {
      notification_id: '003',
      type: 'home',
      object_id: '00x2',
      title: 'Sinh nhật của Chu Mạnh Tiến vào 30 tháng 4.',
      created: '1 giờ trước',
      avatar:
        'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 1,
      badge: 10,
      notification_type: 3,
      last_badge: 10,
    },
    {
      notification_id: '004',
      type: 'home',
      object_id: '00x2',
      title: 'Chu Mạnh Tiến đã thích bài viết của bạn',
      created: '1 giờ trước',
      avatar:
        'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10,
      notification_type: 4,
    },
    {
      notification_id: '005',
      type: 'home',
      object_id: '00x2',
      title: 'Chu Mạnh Tiến đã thích bài viết của bạn',
      created: '1 giờ trước',
      avatar:
        'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 0,
      badge: 10,
      last_badge: 10,
      notification_type: 5,
    },
    {
      notification_id: '006',
      type: 'home',
      object_id: '00x2',
      title: 'Minh Nguyễn đã chấp nhận lời mời kết bạn của bạn.',
      created: '1 giờ trước',
      avatar:
        'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      group: 1,
      read: 1,
      badge: 10,
      last_badge: 10,
      notification_type: 6,
    },
    // {
    //   notification_id: '007',
    //   type: "home",
    //   object_id: '00x2',
    //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
    //   created: '1 giờ trước',
    //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
    //   group: 1,
    //   read: 1,
    //   badge: 10,
    //   last_badge: 10,
    //   notification_type: 1
    // },
    // {
    //   notification_id: '008',
    //   type: "home",
    //   object_id: '00x2',
    //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
    //   created: '1 giờ trước',
    //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
    //   group: 1,
    //   read: 0,
    //   badge: 10,
    //   last_badge: 10,
    //   notification_type: 1
    // },
    // {
    //   notification_id: '009',
    //   type: "home",
    //   object_id: '00x2',
    //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
    //   created: '1 giờ trước',
    //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
    //   group: 1,
    //   read: 0,
    //   badge: 10,
    //   last_badge: 10,
    //   notification_type: 1
    // },
    // {
    //   notification_id: '010',
    //   type: "home",
    //   object_id: '00x2',
    //   title: "Chu Mạnh Tiến đã thích bài viết của bạn",
    //   created: '1 giờ trước',
    //   avatar: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
    //   group: 1,
    //   read: 0,
    //   badge: 10,
    //   last_badge: 10,
    //   notification_type: 1
    // },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => {
          return index.toString()
        }}
        style={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <NotificationItem itemData={item} navigation={navigation} />
        )}
        renderSectionHeader={({ section: { title, id } }) => (
          <View>
            {id === 1 && (
              <View style={styles.headerElementWrap}>
                <Text style={styles.headerElementText}>Thông báo</Text>
                <View style={styles.headerElementIconWrap}>
                  <FontAwesome
                    style={styles.headerElementIcon}
                    name="search"
                    color={'#000'}
                  />
                </View>
              </View>
            )}
            <Text style={styles.sectionHeader}>{title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
  },
  readBackground: {
    backgroundColor: '#e0eeff',
  },
  headerLeftImageWrap: {
    flex: 2.5,
    borderRadius: 4,
    // backgroundColor: 'green',
    alignItems: 'center',
    paddingTop: 10,
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
    position: 'relative',
  },
  notificationMessageWrap: {
    width: '100%',
    height: '80%',
    // backgroundColor: 'white',
    overflow: 'hidden',
  },
  imageIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    bottom: 0,
    right: 0,
  },
  headerLeftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  text: {
    color: 'black',
  },
  timeWrap: {
    // backgroundColor: 'green',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  optionIconWrap: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  time: {
    color: '#919599',
    fontSize: 12,
  },
  icon: {
    // width: 20,
    // height: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  sectionHeader: {
    color: 'black',
    fontSize: 17,
    fontWeight: '700',
    paddingLeft: 15,
    paddingVertical: 6,
  },
  headerElementText: {
    fontSize: 24,
    color: '#000',
    fontWeight: '600',
  },
  headerElementIconWrap: {
    width: 35,
    height: 35,
    backgroundColor: '#dfdfdf',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerElementWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerElementIcon: {
    fontSize: 22,
  },
})
