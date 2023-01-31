import React from 'react'
import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles'
import ScreenNames from 'general/constants/ScreenNames';
// iconType: 1: Feather, 2: FontAwareSome5, 3: 

export default function NotificationSetting({navigation}) {

  const DATA = [
    {
      id: 1,
      title: 'Bạn nhận thông báo về',
      data: [
        {
          titleText: 'Bình luận',
          iconName: 'message-square',
          iconType: 1,
          onPushNotification: true,
          linkTo: ScreenNames.commentsNotification,
          // options: [1, 2, 3]
        },
        {
          titleText: 'Cập nhật từ bạn bè',
          iconName: 'users',
          iconType: 1,
          onPushNotification: true,
          linkTo: ScreenNames.updatesFromFriendsNotification
          // options: [1, 2, 3]
        },
        {
          titleText: 'Lời mời kết bạn',
          iconName: 'user-plus',
          iconType: 1,
          onPushNotification: true,
          linkTo: ScreenNames.friendRequestsNotification,
          // options: [1, 2, 3]
        },
        {
          titleText: 'Những người bạn có thể biết',
          iconName: 'address-book', //FontAwareSome5
          iconType: 2,
          onPushNotification: true,
          linkTo: ScreenNames.peopleMayKnowNotification,
          // options: [1, 2, 3]
        },
        {
          titleText: 'Sinh nhật (Không làm giao diện)',
          iconName: 'birthday-cake', //FontAwareSome5,
          iconType: 2,
          onPushNotification: true,
          linkTo: ScreenNames.birthdaysNotification,
          options: [1, 2, 3]
        },
        {
          titleText: 'Video',
          iconName: 'youtube',
          iconType: 1,
          onPushNotification: true,
          linkTo: ScreenNames.videoNotification,
          // options: [1, 2, 3]
        },
      ],
    },
    {
      id: 2,
      title: 'Bạn nhận thông báo qua',
      data: [
        {
          titleText: 'Thông báo đẩy',
          iconName: 'notification', //Entipo
          iconType: 3,
          onPushNotification: true,
          linkTo: ScreenNames.pushNofitication,
          // options: [1, 2, 3]
        }
      ],
    },
  ];

  return (
    <SafeAreaView
      style={styles.container}
    >
      {/* <ScrollView> */}
        
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <TouchableHighlight style={styles.item1}
            underlayColor="#DDDDDD"
            onPress={() => {
              navigation.navigate(item.linkTo)
            }}
          >
            <View
              style={styles.itemWrapper}
              to={{ screen: item.linkTo }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  padding: 5
                }}
              >
                {item.iconType == 1 ? (
                  <Feather
                    name={item.iconName}
                    style={styles.icon}
                  />) : item.iconType === 2 ? (
                    <FontAwesome5
                      name={item.iconName}
                      style={[styles.icon, { paddingHorizontal: 1.25 }]}
                    />) : (
                  <Entypo
                    name={item.iconName}
                    style={styles.icon}
                  />
                )
                }
              </View>
              <View
                style={{ paddingHorizontal: 10 }}
              >
                <Text style={styles.titleText}>{item.titleText}</Text>
                <Text style={styles.normalText}>{item.onPushNotification ? "Thông báo đẩy" : "Chỉ trong ứng dụng"}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text style={styles.header}>{title}</Text>
              
          </View>
        )}
        ListHeaderComponent={() => (
          <Text style={[styles.headerText, styles.normalText]}>Có thể Facebook vẫn gửi cho bạn những thông báo quan trọng về
            tài khoản và nội dụng ngoài cài đặt thông báo ưu tiên của bạn.
          </Text>
        )}
        renderSectionFooter={({ section: { id } }) => (
          id == 1 && (
            <Text
              style={{
                height: 2,
                backgroundColor: '#DDD'
              }}
            ></Text>
          ))}
        />
        
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 8,r
//     backgroundColor: '#fff'
//   },
//   headerText: {
//     paddingHorizontal: 15
//   },
//   itemWrapper: {
//     flexDirection: "row",
//     paddingVertical: 5,
//     paddingHorizontal: 15
//   },
//   header: {
//     fontSize: 20,
//     color: 'black',
//     fontWeight: "700",
//     padding: 15,
//     // marginTop: 15
//     // backgroundColor: '#000',
//   },
//   icon: {
//     fontSize: 24,
//     fontWeight: 100,
//     color: '#666666'
//   },
//   titleText: {
//     color: 'black',
//     fontWeight: '600',
//     fontSize: 17,
//   },
//   normalText: {
//     fontSize: 13
//   },
//   title: {
//     fontSize: 24,
//   },
// });
