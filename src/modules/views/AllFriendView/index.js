import FriendItem from 'modules/components/FriendItem'
import React from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import { FriendDataTest } from 'assets/FriendDataTest'
import SortFriendModal from '../SortFriendModal'
import { useState, useEffect } from 'react'
import ViewHeader from 'modules/components/ViewHeader'
import { getPreference } from 'libs/storage/PreferenceStorage'
import { serverDomain } from 'general/constants/Global'
export default function AllFriendView({ navigation }) {
  const [isSortFriendModal, setIsSortFriendModal] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    getUserFriend()
  }, [])
  const getUserFriend = async () => {
    const token = await getPreference('UserToken')

    fetch(
      serverDomain +
        `friend/get_user_friends?token=${token}&user_id=&index=${0}&count=${10}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      },
    )
      .then((data) => data.json())
      .then((data) => {
        // console.log(data.data.friends[0])
        setData(data.data.friends)
      })
      .catch((err) => console.error(err))
  }

  return (
    <SafeAreaView>
      <ViewHeader title="Bạn bè" navigation={navigation} />

      <SortFriendModal
        isVisible={isSortFriendModal}
        onModalHidden={() => {
          setIsSortFriendModal(false)
        }}
      />
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            53 bạn bè
          </Text>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setIsSortFriendModal(true)
            }}
          >
            <Text
              style={{
                marginRight: 20,
                fontSize: 18,
                color: '#1778F2',
                fontWeight: '600  ',
              }}
            >
              Sắp xếp
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {data.map((item) => (
            <FriendItem
              key={item._id}
              user_id={item._id}
              avt={item.avatar.url}
              name={item.name}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
