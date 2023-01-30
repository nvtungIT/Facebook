import React from 'react'
import { Text, View, Button, ScrollView, SafeAreaView } from 'react-native'
import { FriendDataTest } from 'assets/FriendDataTest'
import FriendChoiceItem from 'modules/components/FriendChoiceItem'
import ViewHeader from 'modules/components/ViewHeader'
import { useEffect, useState } from 'react'
import { serverDomain } from 'general/constants/Global'
import { getPreference } from 'libs/storage/PreferenceStorage'
export default function SuggestedFriendView({ navigation }) {
  useEffect(() => {
    getData()
  }, [])

  const [data, setData] = useState([])
  const getSuggestedFriendList = async (token, index, count) => {
    try {
      const userId = await getPreference('UserId')
      const response = await fetch(
        serverDomain +
          'friend/get_list_suggested_friends?token=' +
          token +
          '&user_id=' +
          userId +
          '&index=0&count=10',

        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        },
      )

      const data = await response.json()
      if (data) {
        console.log('get_suggested_friend')
        // console.log(data.data.list_users)
        setData(data.data.list_users.filter((i) => i.user_id != userId))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async () => {
    try {
      const token = await getPreference('UserToken')
      if (token !== null) {
        getSuggestedFriendList(token)
      }
    } catch (e) {
      // error reading value
    }
  }
  return (
    <SafeAreaView>
      <ViewHeader title="Gợi ý" navigation={navigation} />

      <ScrollView>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 20,
            marginVertical: 10,
          }}
        >
          Những người bạn có thể biết
        </Text>
        {data.map((item) => (
          <FriendChoiceItem
            isRequested={false}
            first_button="Thêm bạn bè"
            second_button="Gỡ"
            user_id={item.user_id}
            key={item.user_id}
            avt={item.avatar}
            name={item.username}
            firstTaskName="gửi lời mời kết bạn cho "
            secondTaskName="gỡ gợi ý kết bạn của"
            firstTaskResponse="Đã gửi yêu cầu"
            secondTaskResponse="Đã gỡ lời mời"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
