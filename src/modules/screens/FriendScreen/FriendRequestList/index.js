import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { FriendDataTest } from '../../../../assets/FriendDataTest'
import FriendChoiceItem from 'modules/components/FriendChoiceItem'
import { getPreference } from 'libs/storage/PreferenceStorage'
import { PreferenceKeys } from 'general/constants/Global'
export default function FriendRequestList() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const token = await getPreference('UserToken')
      if (token !== null) {
        getRequestedFriendList(token, 0, 10)
      }
    } catch (e) {
      // error reading value
    }
  }

  const getRequestedFriendList = async (token, index, count) => {
    try {
      const response = await fetch(
        `http://192.168.254.54:5000/it4788/friend/get_requested_friends`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            token,
            index,
            count,
          }),
        },
      )

      const data = await response.json()
      if (data) {
        console.log('get_requested_friend')
        console.log(data)
        console.log(data.data.request)
        setData(data.data.request)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Text
        style={{
          fontFamily: 'FACEBOLF',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginLeft: 20,
          lineHeight: 40,
        }}
      >
        Lời mời kết bạn
      </Text>
      {/* <Button
        onPress={() => {
          getData()
        }}
        title="Friend List"
      ></Button> */}
      {data.map((item) => (
        <FriendChoiceItem
          first_button="Chấp nhận"
          second_button="Xoá"
          key={item.id}
          avt={item.avatar}
          name={item.username}
          firstTaskName="trở thành bạn bè với"
          secondTaskName="xóa lời mời kết bạn của"
          firstTaskResponse="Các bạn đã trở thành bạn bè"
          secondTaskResponse="Đã xóa"
        />
      ))}
    </View>
  )
}
